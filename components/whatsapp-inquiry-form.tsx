"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { ContactIcons } from "@/components/contact-icons";
import { routeFor, type Locale } from "@/lib/site-content";

export function WhatsAppInquiryForm({
  locale,
  whatsappPhone,
  services,
}: {
  locale: Locale;
  whatsappPhone: string;
  services: readonly string[];
}) {
  const isIndonesian = locale === "id";

  function sendInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const labels = isIndonesian
      ? { greeting: "Halo PAP, saya ingin bertanya mengenai layanan perusahaan.", name: "Nama", company: "Perusahaan", phone: "Nomor telepon", service: "Layanan yang diminati", message: "Kebutuhan" }
      : { greeting: "Hello PAP, I would like to ask about your company services.", name: "Name", company: "Company", phone: "Phone number", service: "Service of interest", message: "Inquiry" };
    const entries = [
      labels.greeting,
      `${labels.name}: ${String(formData.get("name") ?? "").trim()}`,
      String(formData.get("company") ?? "").trim() && `${labels.company}: ${String(formData.get("company")).trim()}`,
      String(formData.get("phone") ?? "").trim() && `${labels.phone}: ${String(formData.get("phone")).trim()}`,
      `${labels.service}: ${String(formData.get("service") ?? "").trim()}`,
      `${labels.message}: ${String(formData.get("message") ?? "").trim()}`,
    ].filter((entry): entry is string => Boolean(entry));

    const message = encodeURIComponent(entries.join("\n"));
    window.location.assign(`https://wa.me/${whatsappPhone}?text=${message}`);
  }

  return (
    <form
      className="whatsapp-inquiry-form"
      action={`https://wa.me/${whatsappPhone}`}
      method="get"
      onSubmit={sendInquiry}
    >
      <div className="whatsapp-inquiry-form__grid">
        <div className="whatsapp-inquiry-form__field">
          <label htmlFor="inquiry-name">{isIndonesian ? "Nama" : "Name"}</label>
          <input id="inquiry-name" name="name" autoComplete="name" maxLength={100} required />
        </div>
        <div className="whatsapp-inquiry-form__field">
          <label htmlFor="inquiry-company">{isIndonesian ? "Perusahaan (opsional)" : "Company (optional)"}</label>
          <input id="inquiry-company" name="company" autoComplete="organization" maxLength={140} />
        </div>
        <div className="whatsapp-inquiry-form__field">
          <label htmlFor="inquiry-phone">{isIndonesian ? "Nomor telepon / WhatsApp (opsional)" : "Phone / WhatsApp number (optional)"}</label>
          <input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" maxLength={32} />
        </div>
        <div className="whatsapp-inquiry-form__field">
          <label htmlFor="inquiry-service">{isIndonesian ? "Layanan yang diminati" : "Service of interest"}</label>
          <select id="inquiry-service" name="service" defaultValue="" required>
            <option value="" disabled>{isIndonesian ? "Pilih layanan" : "Select a service"}</option>
            {services.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </div>
        <div className="whatsapp-inquiry-form__field whatsapp-inquiry-form__field--full">
          <label htmlFor="inquiry-message">{isIndonesian ? "Ceritakan kebutuhan Anda" : "Tell us about your needs"}</label>
          <textarea id="inquiry-message" name="message" rows={5} maxLength={2000} required />
        </div>
      </div>

      <div className="whatsapp-inquiry-form__consent">
        <input id="inquiry-privacy-consent" type="checkbox" required />
        <div>
          <label htmlFor="inquiry-privacy-consent">
            {isIndonesian
              ? "Saya setuju meneruskan informasi di atas melalui WhatsApp dan telah membaca "
              : "I agree to share the information above through WhatsApp and have read the "}
          </label>
          <Link href={routeFor(locale, "privacy-policy")}>
            {isIndonesian ? "Kebijakan Privasi" : "Privacy Notice"}
          </Link>.
        </div>
      </div>

      <div className="whatsapp-inquiry-form__actions">
        <button className="button button--whatsapp" type="submit">
          <ContactIcons type="whatsapp" />
          {isIndonesian ? "Lanjutkan ke WhatsApp" : "Continue to WhatsApp"}
          <span aria-hidden="true">↗</span>
        </button>
        <p>
          {isIndonesian
            ? "Situs ini tidak menyimpan isi formulir. WhatsApp akan terbuka agar Anda dapat memeriksa dan mengirim pesan. Jangan sertakan data pribadi debitur atau informasi keuangan sensitif."
            : "This website does not store the form contents. WhatsApp will open so you can review and send the message. Do not include debtor personal data or sensitive financial information."}
        </p>
      </div>
    </form>
  );
}
