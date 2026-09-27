export type Locale = "id" | "en";

export const siteConfig = {
  companyName: "PT Pelita Anugrah Perkasa",
  logoPath: "/assets/brand/logo-primary.png",
  contact: {
    person: "Ahimsa",
    email: "callcenter@papcorp.services",
    phone: "+62 821-4371-3602",
    whatsapp: null,
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
          "Hubungi Ahimsa melalui telepon atau email, atau kunjungi kantor PAP di Malang dan Yogyakarta.",
        statusTitle: "Hubungi PAP",
        statusBody:
          "Nomor telepon, email, contact person, dan kantor di Malang serta Yogyakarta tersedia pada halaman kontak.",
        pendingItems: ["Ahimsa — Direktur", "Nomor telepon", "Email perusahaan", "Alamat kantor"],
      },
      "privacy-policy": {
        navLabel: "Kebijakan Privasi",
        eyebrow: "INFORMASI LEGAL",
        title: "Kebijakan Privasi",
        description:
          "Pemberitahuan privasi akan disusun berdasarkan proses pengumpulan, penggunaan, penyimpanan, dan penghapusan data yang sebenarnya.",
        statusTitle: "Kebijakan privasi menunggu tinjauan",
        statusBody:
          "Halaman ini belum berisi nasihat atau pernyataan legal. Persetujuan pihak perusahaan diperlukan sebelum formulir data pribadi diaktifkan.",
        pendingItems: ["Tujuan dan dasar pemrosesan", "Masa retensi dan hak subjek data", "Kontak privasi", "Persetujuan dan pengelolaan cookie"],
      },
      terms: {
        navLabel: "Syarat Penggunaan",
        eyebrow: "INFORMASI LEGAL",
        title: "Syarat Penggunaan",
        description:
          "Ketentuan penggunaan situs akan dilengkapi dan ditinjau oleh pihak perusahaan sebelum diterbitkan.",
        statusTitle: "Ketentuan penggunaan belum diterbitkan",
        statusBody:
          "Konten legal tidak dibuat dengan mengarang kewajiban, pendaftaran, atau status hukum perusahaan.",
        pendingItems: ["Ruang lingkup penggunaan", "Hak kekayaan intelektual", "Batas tanggung jawab", "Hukum dan mekanisme penyelesaian"],
      },
      "cookie-policy": {
        navLabel: "Kebijakan Cookie",
        eyebrow: "INFORMASI LEGAL",
        title: "Kebijakan Cookie",
        description:
          "Informasi cookie akan disesuaikan dengan teknologi yang benar-benar digunakan dan pilihan privasi perusahaan.",
        statusTitle: "Kebijakan cookie menunggu konfigurasi",
        statusBody:
          "Tidak ada ID analitik atau pelacakan pihak ketiga yang diklaim aktif pada pratinjau ini.",
        pendingItems: ["Cookie esensial", "Analitik dan tujuan penggunaan", "Pihak ketiga", "Pengaturan dan masa simpan"],
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
          "Contact Ahimsa by phone or email, or visit PAP's offices in Malang and Yogyakarta.",
        statusTitle: "Contact PAP",
        statusBody:
          "The contact person, phone, email and offices in Malang and Yogyakarta are listed on the contact page.",
        pendingItems: ["Ahimsa — Director", "Phone number", "Company email", "Office addresses"],
      },
      "privacy-policy": {
        navLabel: "Privacy Policy",
        eyebrow: "LEGAL INFORMATION",
        title: "Privacy Policy",
        description:
          "The privacy notice will reflect the actual processes for collecting, using, storing and deleting information.",
        statusTitle: "Privacy policy under review",
        statusBody:
          "This page is not legal advice or a legal representation. Company approval is required before personal-data forms are enabled.",
        pendingItems: ["Purpose and basis of processing", "Retention and data subject rights", "Privacy contact", "Consent and cookie management"],
      },
      terms: {
        navLabel: "Terms of Use",
        eyebrow: "LEGAL INFORMATION",
        title: "Terms of Use",
        description:
          "Website terms will be completed and reviewed by the company before publication.",
        statusTitle: "Terms have not been published",
        statusBody:
          "Legal content will not invent company obligations, registrations or legal status.",
        pendingItems: ["Scope of use", "Intellectual property", "Limitation of liability", "Law and dispute resolution"],
      },
      "cookie-policy": {
        navLabel: "Cookie Policy",
        eyebrow: "LEGAL INFORMATION",
        title: "Cookie Policy",
        description:
          "Cookie information will match the technology actually used and the company's privacy choices.",
        statusTitle: "Cookie policy awaiting configuration",
        statusBody:
          "No analytics ID or third-party tracking is represented as active in this preview.",
        pendingItems: ["Essential cookies", "Analytics and purpose", "Third parties", "Preferences and retention"],
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
  "careers",
  "news",
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
  };
}
