export type Locale = "id" | "en";

export const siteConfig = {
  companyName: "PT Pelita Anugrah Perkasa",
  logoPath: "/assets/brand/logo-primary.png",
  contact: {
    person: "Ahimsa",
    phone: "+62 821-4371-3602",
    whatsapp: "6282143713602",
    address: "Malang; Yogyakarta",
  },
} as const;

export const pageSlugs = [
  "about",
  "services",
  "industries",
  "operations",
  "compliance",
  "careers",
  "news",
  "contact",
  "privacy-policy",
  "terms",
  "cookie-policy",
] as const;

export type PageSlug = (typeof pageSlugs)[number];
export type RouteSlug = "home" | PageSlug;

export interface PageCopy {
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  statusTitle: string;
  statusBody: string;
  pendingItems: string[];
}

interface LocaleCopy {
  localeName: string;
  previewNotice: string;
  navigationLabel: string;
  homeLabel: string;
  menuOpen: string;
  menuClose: string;
  languageLabel: string;
  partnerCta: string;
  footerDescription: string;
  footerCompany: string;
  footerExplore: string;
  footerLegal: string;
  copyright: string;
  backHome: string;
  pages: Record<PageSlug, PageCopy>;
}

export const copy: Record<Locale, LocaleCopy> = {
  id: {
    localeName: "Bahasa Indonesia",
    previewNotice:
      "Pratinjau profil perusahaan · konten bersumber dari Company Profile 2026 yang disetujui. Informasi legal masih disiapkan.",
    navigationLabel: "Navigasi utama",
    homeLabel: "Beranda",
    menuOpen: "Buka menu",
    menuClose: "Tutup menu",
    languageLabel: "Pilih bahasa",
    partnerCta: "Jadilah Mitra Kami",
    footerDescription:
      `Layanan operasional, desk collection, dan labor supply oleh ${siteConfig.companyName}.`,
    footerCompany: "Perusahaan",
    footerExplore: "Jelajahi",
    footerLegal: "Informasi legal",
    copyright: "Hak cipta dilindungi.",
    backHome: "Kembali ke Beranda",
    pages: {
      about: {
        navLabel: "Tentang",
        eyebrow: "TENTANG PERUSAHAAN",
        title: `Tentang ${siteConfig.companyName}`,
        description:
          "Profil, visi, misi, dan nilai PT Pelita Anugrah Perkasa.",
        statusTitle: "Tentang PT Pelita Anugrah Perkasa",
        statusBody:
          "Profil, visi, misi, dan nilai perusahaan tersedia berdasarkan Company Profile 2026.",
        pendingItems: ["Gambaran perusahaan", "Visi dan misi", "Nilai perusahaan", "Tenaga kerja"],
      },
      services: {
        navLabel: "Layanan",
        eyebrow: "LAYANAN",
        title: "Layanan operasional dan collection.",
        description:
          "Desk collection, collection management, data management, reporting, dan labor supply.",
        statusTitle: "Empat layanan utama PAP",
        statusBody:
          "Desk collection, collection management, data management dan reporting system, serta labor supply.",
        pendingItems: ["Desk collection", "Collection management", "Data management dan reporting", "Labor supply"],
      },
      industries: {
        navLabel: "Klien",
        eyebrow: "KLIEN KAMI",
        title: "Mitra yang telah bekerja sama dengan PAP.",
        description:
          "Daftar klien PT Pelita Anugrah Perkasa berdasarkan Company Profile 2026.",
        statusTitle: "Klien PAP",
        statusBody:
          "Daftar mitra bisnis dicantumkan pada halaman klien berdasarkan profil perusahaan yang disetujui.",
        pendingItems: ["Traveloka", "Bussan Auto Finance", "Akulaku", "BCA dan mitra lainnya"],
      },
      operations: {
        navLabel: "Operasional",
        eyebrow: "OPERASIONAL",
        title: "Proses desk collection dan sistem collection.",
        description:
          "Alur kerja desk collection, kriteria account, metrik, dan sistem yang digunakan PAP.",
        statusTitle: "Alur desk collection",
        statusBody:
          "Halaman operasional menjelaskan proses, kriteria, indikator, dan sistem collection dari Company Profile 2026.",
        pendingItems: ["Assignment dan campaign", "Desk collection", "Segmented account", "Field collection"],
      },
      compliance: {
        navLabel: "Kepatuhan",
        eyebrow: "TATA KELOLA & TANGGUNG JAWAB",
        title: "Sertifikasi ISO/IEC 27001:2022.",
        description:
          "Informasi sertifikasi sistem manajemen keamanan informasi, keamanan siber, dan perlindungan privasi PAP.",
        statusTitle: "Sertifikasi ISO/IEC 27001:2022",
        statusBody:
          "Ruang lingkup dan tanggal sertifikasi ditampilkan mengikuti informasi dalam Company Profile 2026.",
        pendingItems: ["Keamanan informasi", "Keamanan siber", "Perlindungan privasi", "Ruang lingkup sertifikasi"],
      },
      careers: {
        navLabel: "Karier",
        eyebrow: "KARIER",
        title: "Temukan peluang bersama PAP.",
        description:
          "Informasi peluang kerja akan dipublikasikan setelah posisi dan proses rekrutmen dikonfirmasi oleh tim perusahaan.",
        statusTitle: "Belum ada lowongan terverifikasi",
        statusBody:
          "Silakan kembali untuk melihat pembaruan. Formulir lamaran akan diaktifkan bersama kebijakan privasi dan penyimpanan berkas yang aman.",
        pendingItems: ["Posisi dan departemen", "Lokasi dan jenis kerja", "Deskripsi dan kualifikasi", "Batas waktu dan proses lamaran"],
      },
      news: {
        navLabel: "Berita",
        eyebrow: "BERITA & WAWASAN",
        title: "Kabar dan wawasan dari PAP.",
        description:
          "Artikel akan diterbitkan setelah melalui proses editorial dan persetujuan konten perusahaan.",
        statusTitle: "Belum ada artikel yang dipublikasikan",
        statusBody:
          "Ruang berita telah disiapkan. Tidak ada artikel demo atau kabar yang ditampilkan sebagai informasi nyata.",
        pendingItems: ["Artikel dan wawasan", "Kategori dan topik", "Penulis dan tanggal terbit", "Konten terkait"],
      },
      contact: {
        navLabel: "Kontak",
        eyebrow: "HUBUNGI KAMI",
        title: "Mari mulai percakapan yang tepat.",
        description:
          "Telepon Direktur atau isi formulir singkat untuk mengirim pertanyaan melalui WhatsApp.",
        statusTitle: "Hubungi PAP",
        statusBody:
          "Hubungi Direktur melalui panggilan telepon atau lanjutkan pertanyaan melalui WhatsApp.",
        pendingItems: ["Telepon Direktur", "Formulir WhatsApp", "Layanan PAP", "Kantor Malang dan Yogyakarta"],
      },
      "privacy-policy": {
        navLabel: "Kebijakan Privasi",
        eyebrow: "INFORMASI LEGAL",
        title: "Kebijakan Privasi",
        description:
          "Cara PAP menggunakan informasi yang Anda isi dalam formulir pertanyaan dan kirim melalui WhatsApp.",
        statusTitle: "Privasi dan pertanyaan bisnis",
        statusBody:
          "Formulir kontak diproses di peramban dan hanya diteruskan ke WhatsApp saat Anda memilih untuk membukanya.",
        pendingItems: ["Informasi yang dimasukkan", "Tujuan penggunaan", "WhatsApp sebagai penerima", "Hak dan permintaan privasi"],
      },
      terms: {
        navLabel: "Syarat Penggunaan",
        eyebrow: "INFORMASI LEGAL",
        title: "Syarat Penggunaan",
        description:
          "Ketentuan untuk menggunakan situs PAP dan mengirim pertanyaan mengenai layanan perusahaan.",
        statusTitle: "Penggunaan situs dan informasi layanan",
        statusBody:
          "Informasi situs bersifat umum; ruang lingkup layanan ditetapkan melalui kesepakatan tertulis dengan klien.",
        pendingItems: ["Penggunaan yang diperbolehkan", "Hak atas konten", "Informasi dan layanan", "Tautan pihak ketiga"],
      },
      "cookie-policy": {
        navLabel: "Kebijakan Cookie",
        eyebrow: "INFORMASI LEGAL",
        title: "Kebijakan Cookie",
        description:
          "Penggunaan cookie dan penyimpanan lokal pada situs publik PAP.",
        statusTitle: "Cookie esensial saja",
        statusBody:
          "Situs publik tidak menggunakan cookie analitik atau iklan. Area admin menggunakan cookie sesi yang diperlukan untuk autentikasi.",
        pendingItems: ["Cookie autentikasi admin", "Tidak ada cookie iklan", "Tidak ada analytics", "Pengaturan peramban"],
      },
    },
  },
  en: {
    localeName: "English",
    previewNotice:
      "Company profile preview · content is based on the approved 2026 Company Profile. Legal information is still being prepared.",
    navigationLabel: "Main navigation",
    homeLabel: "Home",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageLabel: "Choose language",
    partnerCta: "Partner With Us",
    footerDescription:
      `Operational, desk collection and labor supply services by ${siteConfig.companyName}.`,
    footerCompany: "Company",
    footerExplore: "Explore",
    footerLegal: "Legal information",
    copyright: "All rights reserved.",
    backHome: "Back to Home",
    pages: {
      about: {
        navLabel: "About",
        eyebrow: "ABOUT THE COMPANY",
        title: `About ${siteConfig.companyName}`,
        description:
          "The profile, vision, mission and values of PT Pelita Anugrah Perkasa.",
        statusTitle: "About PT Pelita Anugrah Perkasa",
        statusBody:
          "The company profile, vision, mission and values are based on the approved 2026 Company Profile.",
        pendingItems: ["Company overview", "Vision and mission", "Company values", "Workforce"],
      },
      services: {
        navLabel: "Services",
        eyebrow: "SERVICES",
        title: "Operational and collection services.",
        description:
          "Desk collection, collection management, data management, reporting and labor supply.",
        statusTitle: "PAP’s four core services",
        statusBody:
          "Desk collection, collection management, data management and reporting systems, and labor supply.",
        pendingItems: ["Desk collection", "Collection management", "Data management and reporting", "Labor supply"],
      },
      industries: {
        navLabel: "Clients",
        eyebrow: "OUR CLIENTS",
        title: "Partners who have worked with PAP.",
        description:
          "Clients of PT Pelita Anugrah Perkasa, as listed in the 2026 Company Profile.",
        statusTitle: "PAP clients",
        statusBody:
          "Business partners are listed on the clients page based on the approved company profile.",
        pendingItems: ["Traveloka", "Bussan Auto Finance", "Akulaku", "BCA and other partners"],
      },
      operations: {
        navLabel: "Operations",
        eyebrow: "OPERATIONS",
        title: "Desk collection workflow and collection systems.",
        description:
          "Desk collection workflow, account criteria, metrics and systems used by PAP.",
        statusTitle: "Desk collection workflow",
        statusBody:
          "The operations page explains the process, criteria, indicators and collection systems from the 2026 Company Profile.",
        pendingItems: ["Assignment and campaign", "Desk collection", "Segmented account", "Field collection"],
      },
      compliance: {
        navLabel: "Compliance",
        eyebrow: "GOVERNANCE & RESPONSIBILITY",
        title: "ISO/IEC 27001:2022 certification.",
        description:
          "Information about PAP's information security management, cybersecurity and privacy protection certification.",
        statusTitle: "ISO/IEC 27001:2022 certification",
        statusBody:
          "The certification scope and dates are presented as supplied in the approved 2026 Company Profile.",
        pendingItems: ["Information security", "Cybersecurity", "Privacy protection", "Certification scope"],
      },
      careers: {
        navLabel: "Careers",
        eyebrow: "CAREERS",
        title: "Explore opportunities with PAP.",
        description:
          "Career opportunities will be published once positions and the recruitment process are confirmed by the company.",
        statusTitle: "No verified vacancies yet",
        statusBody:
          "Please check back for updates. Applications will open when the privacy notice and secure document storage are ready.",
        pendingItems: ["Position and department", "Location and employment type", "Description and qualifications", "Deadline and application process"],
      },
      news: {
        navLabel: "News",
        eyebrow: "NEWS & INSIGHTS",
        title: "News and insights from PAP.",
        description:
          "Articles will be published after editorial review and company approval.",
        statusTitle: "No articles published yet",
        statusBody:
          "The news area is ready. No demo articles or fictional announcements are presented as real information.",
        pendingItems: ["Articles and insights", "Categories and topics", "Author and publish date", "Related content"],
      },
      contact: {
        navLabel: "Contact",
        eyebrow: "CONTACT",
        title: "Let’s start the right conversation.",
        description:
          "Call the Director or fill out a short form to send an inquiry through WhatsApp.",
        statusTitle: "Contact PAP",
        statusBody:
          "Call the Director or continue your inquiry through WhatsApp.",
        pendingItems: ["Call the Director", "WhatsApp form", "PAP services", "Malang and Yogyakarta offices"],
      },
      "privacy-policy": {
        navLabel: "Privacy Policy",
        eyebrow: "LEGAL INFORMATION",
        title: "Privacy Policy",
        description:
          "How PAP handles information entered in the inquiry form and sent through WhatsApp.",
        statusTitle: "Privacy and business inquiries",
        statusBody:
          "The contact form is processed in your browser and only passed to WhatsApp when you choose to open it.",
        pendingItems: ["Information entered", "Purpose of use", "WhatsApp as recipient", "Privacy rights and requests"],
      },
      terms: {
        navLabel: "Terms of Use",
        eyebrow: "LEGAL INFORMATION",
        title: "Terms of Use",
        description:
          "Terms for using the PAP website and making service inquiries.",
        statusTitle: "Website use and service information",
        statusBody:
          "Website information is general; service scope is established through a written agreement with the client.",
        pendingItems: ["Permitted use", "Content rights", "Information and services", "Third-party links"],
      },
      "cookie-policy": {
        navLabel: "Cookie Policy",
        eyebrow: "LEGAL INFORMATION",
        title: "Cookie Policy",
        description:
          "How cookies and local storage are used on the PAP public website.",
        statusTitle: "Essential cookies only",
        statusBody:
          "The public website does not use advertising or analytics cookies. The admin area uses a session cookie required for authentication.",
        pendingItems: ["Admin authentication cookie", "No advertising cookies", "No analytics", "Browser settings"],
      },
    },
  },
};

export const navigationSlugs: PageSlug[] = [
  "about",
  "services",
  "industries",
  "operations",
  "compliance",
  "contact",
];

export function routeFor(locale: Locale, slug: RouteSlug): string {
  const prefix = locale === "en" ? "/en" : "";
  return slug === "home" ? prefix || "/" : `${prefix}/${slug}`;
}

export function isPageSlug(value: string): value is PageSlug {
  return (pageSlugs as readonly string[]).includes(value);
}

export function pageMetadata(locale: Locale, slug: PageSlug) {
  const page = copy[locale].pages[slug];
  return {
    title: page.title,
    description: page.description,
    ...((slug === "careers" || slug === "news")
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}
