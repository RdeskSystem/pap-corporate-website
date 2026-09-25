import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";

const SCRYPT_N = 32_768;
const SCRYPT_R = 8;
const SCRYPT_P = 1;
const KEY_LENGTH = 64;
const MAX_MEMORY = 64 * 1024 * 1024;
const PASSWORD_MIN_LENGTH = 12;
const PASSWORD_MAX_LENGTH = 128;

export const DUMMY_PASSWORD_HASH =
  "scrypt$32768$8$1$cGFwLWR1bW15LXNhbHQtMQ$AndkQMjpTIeD1n1mbV5Itpj-6ZW-5gLYICnPC3JAhs41ijTDEqwZBHR7JAce9-aHCSYbIw2uBw2omXjSGWA7FA";

function deriveKey(password: string, salt: Buffer, cost: number, blockSize: number, parallelization: number) {
  return new Promise<Buffer>((resolve, reject) => {
    scrypt(
      password,
      salt,
      KEY_LENGTH,
      { N: cost, r: blockSize, p: parallelization, maxmem: MAX_MEMORY },
      (error, key) => {
        if (error) reject(error);
        else resolve(key);
      },
    );
  });
}

export async function hashPassword(password: string): Promise<string> {
  if (password.length < PASSWORD_MIN_LENGTH || password.length > PASSWORD_MAX_LENGTH) {
    throw new Error(`Password must be ${PASSWORD_MIN_LENGTH}-${PASSWORD_MAX_LENGTH} characters long.`);
  }

  const salt = randomBytes(16);
  const key = await deriveKey(password, salt, SCRYPT_N, SCRYPT_R, SCRYPT_P);
  return [
    "scrypt",
    SCRYPT_N,
    SCRYPT_R,
    SCRYPT_P,
    salt.toString("base64url"),
    key.toString("base64url"),
  ].join("$");
}

export async function verifyPassword(password: string, encodedHash: string): Promise<boolean> {
  const [algorithm, costText, blockSizeText, parallelizationText, saltText, keyText, ...extra] = encodedHash.split("$");
  if (
    algorithm !== "scrypt" ||
    extra.length > 0 ||
    !saltText ||
    !keyText ||
    !/^[a-zA-Z0-9_-]+$/.test(saltText) ||
    !/^[a-zA-Z0-9_-]+$/.test(keyText)
  ) {
    return false;
  }

  const cost = Number(costText);
  const blockSize = Number(blockSizeText);
  const parallelization = Number(parallelizationText);
  if (cost !== SCRYPT_N || blockSize !== SCRYPT_R || parallelization !== SCRYPT_P) return false;

  const salt = Buffer.from(saltText, "base64url");
  const expectedKey = Buffer.from(keyText, "base64url");
  if (salt.length !== 16 || expectedKey.length !== KEY_LENGTH) return false;

  const actualKey = await deriveKey(password, salt, cost, blockSize, parallelization);
  return timingSafeEqual(actualKey, expectedKey);
}
