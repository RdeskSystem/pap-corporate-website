export type Locale = "id" | "en";

export const siteConfig = {
  companyName: "PT Pelita Anugrah Perkasa",
  logoPath: "/assets/brand/logo-primary.png",
  contact: {
    person: null,
    email: null,
    phone: null,
    whatsapp: null,
    address: null,
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

interface HomeCopy {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  visualLabel: string;
  visualTitle: string;
  visualSteps: string[];
  introEyebrow: string;
  introTitle: string;
  introBody: string;
  exploreEyebrow: string;
  exploreTitle: string;
  exploreBody: string;
  processEyebrow: string;
  processTitle: string;
  processBody: string;
  processSteps: string[];
  processNote: string;
  technologyEyebrow: string;
  technologyTitle: string;
  technologyBody: string;
  technologyLabel: string;
  technologyFootnote: string;
  technologyCta: string;
  discoveryEyebrow: string;
  discoveryTitle: string;
  discoveryBody: string;
  closingEyebrow: string;
  closingTitle: string;
  closingBody: string;
  closingCta: string;
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
  home: HomeCopy;
  pages: Record<PageSlug, PageCopy>;
}

export const copy: Record<Locale, LocaleCopy> = {
  id: {
    localeName: "Bahasa Indonesia",
    previewNotice:
      "Pratinjau awal · informasi perusahaan dan kanal kontak resmi akan dilengkapi setelah dikonfirmasi.",
    navigationLabel: "Navigasi utama",
    homeLabel: "Beranda",
    menuOpen: "Buka menu",
    menuClose: "Tutup menu",
    languageLabel: "Pilih bahasa",
    partnerCta: "Jadilah Mitra Kami",
    footerDescription:
      `Informasi resmi ${siteConfig.companyName} sedang disiapkan untuk ditampilkan secara akurat dan bertanggung jawab.`,
    footerCompany: "Perusahaan",
    footerExplore: "Jelajahi",
    footerLegal: "Informasi legal",
    copyright: "Hak cipta dilindungi.",
    backHome: "Kembali ke Beranda",
    home: {
      eyebrow: "PROFIL PERUSAHAAN",
      title: "Kemitraan yang kuat dimulai dari kejelasan.",
      description:
        `Kami sedang menyiapkan informasi resmi ${siteConfig.companyName}. Cakupan layanan, pendekatan operasional, dan detail perusahaan akan diperbarui setelah dikonfirmasi.`,
      primaryCta: "Kenali PAP",
      secondaryCta: "Informasi kontak",
      visualLabel: "KERANGKA ILUSTRATIF",
      visualTitle: "Kolaborasi yang terarah",
      visualSteps: ["Pahami kebutuhan", "Susun pendekatan", "Evaluasi bersama"],
      introEyebrow: "TENTANG PAP",
      introTitle: "Mengenal perusahaan melalui informasi yang terverifikasi.",
      introBody:
        "Profil, visi, tim, dan riwayat perusahaan akan disampaikan berdasarkan dokumen resmi yang telah ditinjau.",
      exploreEyebrow: "LAYANAN",
      exploreTitle: "Cakupan layanan ditampilkan setelah dikonfirmasi.",
      exploreBody:
        "Struktur halaman telah disiapkan. Rincian bisnis akan ditampilkan setelah ruang lingkupnya dikonfirmasi oleh perusahaan.",
      processEyebrow: "PENDEKATAN KERJA",
      processTitle: "Kejelasan di setiap tahap kolaborasi.",
      processBody:
        "Diagram berikut adalah kerangka ilustratif untuk menjelaskan informasi yang nantinya akan disesuaikan dengan metodologi resmi PAP.",
      processSteps: ["Kebutuhan", "Perencanaan", "Pelaksanaan", "Evaluasi"],
      processNote: "Ilustrasi konsep · bukan pernyataan SOP atau proses operasional yang telah disahkan.",
      technologyEyebrow: "TEKNOLOGI & PELAPORAN",
      technologyTitle: "Informasi yang relevan, pada saat dibutuhkan.",
      technologyBody:
        "Penjelasan tentang platform, pengukuran, dan pelaporan akan disesuaikan setelah proses dan sistem yang digunakan dikonfirmasi.",
      technologyLabel: "KERANGKA TAMPILAN · ILUSTRATIF",
      technologyFootnote: "Tampilan contoh tidak menggunakan data operasional.",
      technologyCta: "Lihat pendekatan operasional",
      discoveryEyebrow: "LEBIH LANJUT",
      discoveryTitle: "Setiap informasi berangkat dari konfirmasi.",
      discoveryBody:
        "Cakupan industri, peluang karier, dan kabar perusahaan akan ditambahkan dari sumber resmi.",
      closingEyebrow: "LANGKAH BERIKUTNYA",
      closingTitle: "Mari mulai dengan percakapan yang tepat.",
      closingBody:
        "Kanal kontak resmi akan ditambahkan setelah detail PIC, telepon, WhatsApp, dan email dikonfirmasi.",
      closingCta: "Lihat status kontak",
    },
    pages: {
      about: {
        navLabel: "Tentang",
        eyebrow: "TENTANG PERUSAHAAN",
        title: `Tentang ${siteConfig.companyName}`,
        description:
          "Profil, visi, misi, nilai, dan perjalanan perusahaan akan disusun dari informasi resmi yang telah ditinjau.",
        statusTitle: "Profil perusahaan sedang disiapkan",
        statusBody:
          "Informasi faktual belum dimasukkan hingga dokumen perusahaan diterima dan disetujui.",
        pendingItems: ["Gambaran perusahaan", "Visi, misi, dan nilai", "Kepemimpinan dan tim", "Riwayat perusahaan"],
      },
      services: {
        navLabel: "Layanan",
        eyebrow: "LAYANAN",
        title: "Layanan yang relevan, dijelaskan dengan jelas.",
        description:
          "Ruang lingkup layanan akan ditampilkan setelah nama, ketersediaan, dan kapabilitasnya dikonfirmasi oleh perusahaan.",
        statusTitle: "Ruang lingkup layanan menunggu konfirmasi",
        statusBody:
          "Kategori dalam brief proyek masih berupa arah editorial dan belum dianggap sebagai daftar layanan resmi.",
        pendingItems: ["Nama dan deskripsi layanan", "Kapabilitas dan proses", "Manfaat dan FAQ", "Industri terkait"],
      },
      industries: {
        navLabel: "Industri",
        eyebrow: "INDUSTRI",
        title: "Memahami konteks setiap industri.",
        description:
          "Halaman ini akan menjelaskan konteks dan pendekatan yang relevan setelah cakupan industri PAP diverifikasi.",
        statusTitle: "Cakupan industri belum dipublikasikan",
        statusBody:
          "Kategori industri tidak menunjukkan bahwa PAP telah melayani atau memiliki klien pada sektor tersebut.",
        pendingItems: ["Cakupan yang disetujui", "Tantangan dan konteks", "Kapabilitas terkait", "Pendekatan operasional"],
      },
      operations: {
        navLabel: "Operasional",
        eyebrow: "OPERASIONAL",
        title: "Proses yang jelas mendukung kolaborasi yang terukur.",
        description:
          "Metodologi, tata kelola, pengawasan, dan pelaporan akan dijelaskan setelah proses resmi dikonfirmasi.",
        statusTitle: "Metodologi operasional menunggu tinjauan",
        statusBody:
          "Diagram atau uraian di halaman ini tidak akan menyatakan SOP aktual sebelum disetujui perusahaan.",
        pendingItems: ["Alur kerja resmi", "Pemantauan dan jaminan kualitas", "Pelaporan", "Eskalasi dan koordinasi"],
      },
      compliance: {
        navLabel: "Kepatuhan",
        eyebrow: "TATA KELOLA & TANGGUNG JAWAB",
        title: "Kepercayaan dibangun melalui tanggung jawab.",
        description:
          "Informasi kebijakan, privasi, perilaku, keamanan, dan sertifikasi hanya akan ditampilkan berdasarkan bukti dan persetujuan yang sesuai.",
        statusTitle: "Pernyataan kepatuhan belum dipublikasikan",
        statusBody:
          "Tidak ada sertifikasi atau status regulasi yang dicantumkan tanpa dokumen pendukung yang telah diverifikasi.",
        pendingItems: ["Kebijakan operasional", "Privasi dan perlindungan data", "Pengawasan dan eskalasi", "Sertifikasi terverifikasi"],
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
          "Kanal kontak resmi akan ditambahkan setelah informasi PIC dan detail perusahaan diterima.",
        statusTitle: "Informasi kontak sedang dikonfirmasi",
        statusBody:
          "Email, telepon, WhatsApp, alamat, jam operasional, dan formulir bisnis belum diaktifkan agar pesan tidak terkirim ke tujuan yang keliru.",
        pendingItems: ["Nama contact person", "Email dan nomor telepon / WhatsApp", "Alamat dan jam operasional", "Formulir dan tujuan notifikasi"],
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
      "Early preview · official company information and contact channels will be added after confirmation.",
    navigationLabel: "Main navigation",
    homeLabel: "Home",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageLabel: "Choose language",
    partnerCta: "Partner With Us",
    footerDescription:
      `Official information about ${siteConfig.companyName} is being prepared for accurate and responsible publication.`,
    footerCompany: "Company",
    footerExplore: "Explore",
    footerLegal: "Legal information",
    copyright: "All rights reserved.",
    backHome: "Back to Home",
    home: {
      eyebrow: "CORPORATE PROFILE",
      title: "Strong partnerships begin with clarity.",
      description:
        `We are preparing official information about ${siteConfig.companyName}. Service scope, operating approach and company details will be updated once confirmed.`,
      primaryCta: "Discover PAP",
      secondaryCta: "Contact information",
      visualLabel: "ILLUSTRATIVE FRAMEWORK",
      visualTitle: "Purposeful collaboration",
      visualSteps: ["Understand needs", "Shape an approach", "Review together"],
      introEyebrow: "ABOUT PAP",
      introTitle: "Get to know the company through verified information.",
      introBody:
        "The company profile, vision, team and history will be presented from reviewed official documents.",
      exploreEyebrow: "SERVICES",
      exploreTitle: "Service scope will be shared once confirmed.",
      exploreBody:
        "The page structure is ready. Business details will be added after their scope has been confirmed by the company.",
      processEyebrow: "WORKING APPROACH",
      processTitle: "Clarity at every stage of collaboration.",
      processBody:
        "The diagram below is an illustrative framework; it will be aligned with PAP's official methodology when confirmed.",
      processSteps: ["Needs", "Planning", "Delivery", "Review"],
      processNote: "Concept illustration · not a statement of approved SOPs or operating processes.",
      technologyEyebrow: "TECHNOLOGY & REPORTING",
      technologyTitle: "Relevant information, when it is needed.",
      technologyBody:
        "Details about platforms, measurement and reporting will be aligned with the actual processes and systems once confirmed.",
      technologyLabel: "ILLUSTRATIVE INTERFACE FRAMEWORK",
      technologyFootnote: "This conceptual view contains no operational data.",
      technologyCta: "Explore the operating approach",
      discoveryEyebrow: "DISCOVER MORE",
      discoveryTitle: "Every detail starts with confirmation.",
      discoveryBody:
        "Industry scope, career opportunities and company news will be added from official sources.",
      closingEyebrow: "NEXT STEP",
      closingTitle: "Let’s start with the right conversation.",
      closingBody:
        "Official contact channels will be added after the contact person, phone, WhatsApp and email are confirmed.",
      closingCta: "View contact status",
    },
    pages: {
      about: {
        navLabel: "About",
        eyebrow: "ABOUT THE COMPANY",
        title: `About ${siteConfig.companyName}`,
        description:
          "The company profile, vision, mission, values and history will be prepared from reviewed official information.",
        statusTitle: "Company profile in preparation",
        statusBody:
          "Factual information will be added after the company document is received and approved.",
        pendingItems: ["Company overview", "Vision, mission and values", "Leadership and team", "Company history"],
      },
      services: {
        navLabel: "Services",
        eyebrow: "SERVICES",
        title: "Relevant services, explained clearly.",
        description:
          "Service scope will be published once the company confirms its names, availability and capabilities.",
        statusTitle: "Service scope awaiting confirmation",
        statusBody:
          "Categories in the project brief are editorial direction only and are not yet an official service list.",
        pendingItems: ["Service names and descriptions", "Capabilities and process", "Benefits and FAQs", "Related industries"],
      },
      industries: {
        navLabel: "Industries",
        eyebrow: "INDUSTRIES",
        title: "Understanding the context of each industry.",
        description:
          "This page will explain relevant context and approaches after PAP's industry scope has been verified.",
        statusTitle: "Industry coverage not yet published",
        statusBody:
          "An industry category does not imply that PAP has served or has clients in that sector.",
        pendingItems: ["Approved coverage", "Challenges and context", "Related capabilities", "Operating approach"],
      },
      operations: {
        navLabel: "Operations",
        eyebrow: "OPERATIONS",
        title: "Clear processes support measurable collaboration.",
        description:
          "Methodology, governance, monitoring and reporting will be explained after the official process is confirmed.",
        statusTitle: "Operating methodology under review",
        statusBody:
          "This page will not describe a process or SOP as current until it is approved by the company.",
        pendingItems: ["Approved workflow", "Monitoring and quality assurance", "Reporting", "Escalation and coordination"],
      },
      compliance: {
        navLabel: "Compliance",
        eyebrow: "GOVERNANCE & RESPONSIBILITY",
        title: "Trust is built through responsibility.",
        description:
          "Policy, privacy, conduct, security and certification information will only appear with appropriate evidence and approval.",
        statusTitle: "Compliance statements not yet published",
        statusBody:
          "No certification or regulatory status will be listed without verified supporting documentation.",
        pendingItems: ["Operating policies", "Privacy and data protection", "Monitoring and escalation", "Verified certifications"],
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
          "Official contact channels will be added after the company contact person and details are provided.",
        statusTitle: "Contact information being confirmed",
        statusBody:
          "Email, phone, WhatsApp, address, business hours and the inquiry form are not enabled yet, so messages are not sent to an unverified destination.",
        pendingItems: ["Contact person", "Email and phone / WhatsApp", "Address and business hours", "Form and notification destination"],
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
