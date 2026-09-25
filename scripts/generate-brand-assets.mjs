import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const source = path.join(projectRoot, "assets/logo_pap.png");
const brandDir = path.join(projectRoot, "public/assets/brand");
const iconDir = path.join(projectRoot, "public/assets/icons");
const socialDir = path.join(projectRoot, "public/assets/social");

await Promise.all([
  mkdir(brandDir, { recursive: true }),
  mkdir(iconDir, { recursive: true }),
  mkdir(socialDir, { recursive: true }),
]);

const primaryMark = path.join(brandDir, "logo-primary.png");
await copyFile(source, primaryMark);

async function createIcon({ size, output, padding = 0.18, background = "#ffffff" }) {
  const logoSize = Math.round(size * (1 - padding * 2));
  const logo = await sharp(source)
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  const canvas = sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: background === "transparent" ? { r: 255, g: 255, b: 255, alpha: 0 } : background,
    },
  });

  await canvas
    .composite([{ input: logo, left: Math.floor((size - logoSize) / 2), top: Math.floor((size - logoSize) / 2) }])
    .png()
    .toFile(output);
}

await Promise.all([
  createIcon({ size: 64, output: path.join(brandDir, "favicon.png"), padding: 0.08, background: "transparent" }),
  createIcon({ size: 180, output: path.join(brandDir, "apple-touch-icon.png"), padding: 0.19 }),
  createIcon({ size: 192, output: path.join(iconDir, "icon-192.png"), padding: 0.2 }),
  createIcon({ size: 512, output: path.join(iconDir, "icon-512.png"), padding: 0.2 }),
  createIcon({ size: 512, output: path.join(iconDir, "maskable-512.png"), padding: 0.29 }),
]);

const socialArtwork = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#F5F7FA"/>
    <rect x="806" width="394" height="630" fill="#293696"/>
    <circle cx="1003" cy="315" r="244" fill="none" stroke="#FFFFFF" stroke-opacity=".14"/>
    <circle cx="1003" cy="315" r="180" fill="none" stroke="#FFFFFF" stroke-opacity=".14"/>
    <rect x="77" y="83" width="36" height="4" fill="#FA9F1A"/>
    <text x="77" y="127" fill="#293696" font-family="Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="4">PROFIL PERUSAHAAN</text>
    <text x="77" y="220" fill="#111827" font-family="Arial, sans-serif" font-size="49" font-weight="700" letter-spacing="-2">PT Pelita Anugrah</text>
    <text x="77" y="281" fill="#111827" font-family="Arial, sans-serif" font-size="49" font-weight="700" letter-spacing="-2">Perkasa</text>
    <text x="77" y="351" fill="#475569" font-family="Arial, sans-serif" font-size="22">Informasi resmi perusahaan</text>
    <path d="M77 416H725" stroke="#D8DEE8" stroke-width="2"/>
    <text x="77" y="463" fill="#657188" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="2">INDONESIA</text>
    <rect x="904" y="216" width="198" height="198" rx="2" fill="#FFFFFF"/>
    <rect x="925" y="237" width="156" height="156" fill="#F7F8FB"/>
    <text x="1003" y="471" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="3">PAP</text>
  </svg>
`);

const englishSocialArtwork = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#F5F7FA"/>
    <rect x="806" width="394" height="630" fill="#293696"/>
    <circle cx="1003" cy="315" r="244" fill="none" stroke="#FFFFFF" stroke-opacity=".14"/>
    <circle cx="1003" cy="315" r="180" fill="none" stroke="#FFFFFF" stroke-opacity=".14"/>
    <rect x="77" y="83" width="36" height="4" fill="#FA9F1A"/>
    <text x="77" y="127" fill="#293696" font-family="Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="4">CORPORATE PROFILE</text>
    <text x="77" y="220" fill="#111827" font-family="Arial, sans-serif" font-size="49" font-weight="700" letter-spacing="-2">PT Pelita Anugrah</text>
    <text x="77" y="281" fill="#111827" font-family="Arial, sans-serif" font-size="49" font-weight="700" letter-spacing="-2">Perkasa</text>
    <text x="77" y="351" fill="#475569" font-family="Arial, sans-serif" font-size="22">Official company information</text>
    <path d="M77 416H725" stroke="#D8DEE8" stroke-width="2"/>
    <text x="77" y="463" fill="#657188" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="2">INDONESIA</text>
    <rect x="904" y="216" width="198" height="198" rx="2" fill="#FFFFFF"/>
    <rect x="925" y="237" width="156" height="156" fill="#F7F8FB"/>
    <text x="1003" y="471" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="3">PAP</text>
  </svg>
`);

const mark = await sharp(source).resize(156, 156, { fit: "contain" }).png().toBuffer();

async function writeSocialPreview(artwork, name) {
  const imagePath = path.join(socialDir, name);
  const previewPath = path.join(socialDir, name.replace("og-image", "social-preview"));
  await sharp(artwork)
    .composite([{ input: mark, left: 925, top: 237 }])
    .png()
    .toFile(imagePath);
  await copyFile(imagePath, previewPath);
}

await Promise.all([
  writeSocialPreview(socialArtwork, "og-image.png"),
  writeSocialPreview(englishSocialArtwork, "og-image-en.png"),
]);

console.log("Generated proportional brand icons and social preview from the supplied logo.");
