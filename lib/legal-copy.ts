import type { Locale } from "@/lib/site-content";

export type LegalSlug = "privacy-policy" | "terms" | "cookie-policy";

interface LegalSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

interface LegalDocument {
  effectiveDate: string;
  summary: string;
  sections: LegalSection[];
}

export const legalCopy: Record<Locale, Record<LegalSlug, LegalDocument>> = {
  id: {
    "privacy-policy": {
      effectiveDate: "Berlaku mulai 27 September 2026",
      summary: "Pemberitahuan ini menjelaskan penanganan informasi saat Anda menjelajahi situs PAP atau mengirim pertanyaan tentang layanan perusahaan.",
      sections: [
        {
          heading: "Pengelola dan cakupan",
          paragraphs: [
            "Situs ini dikelola oleh PT Pelita Anugrah Perkasa (PAP). Pemberitahuan ini berlaku untuk halaman publik berbahasa Indonesia dan Inggris serta formulir pertanyaan yang tersedia di halaman Kontak.",
            "Pertanyaan privasi dapat disampaikan melalui panggilan atau formulir WhatsApp pada halaman Kontak dengan menyebutkan bahwa permintaan Anda berkaitan dengan privasi.",
          ],
        },
        {
          heading: "Informasi yang Anda masukkan",
          paragraphs: ["Formulir pertanyaan dapat berisi informasi berikut:"] ,
          items: [
            "Nama dan nama perusahaan (nama perusahaan bersifat opsional).",
            "Nomor telepon/WhatsApp, bila Anda memilih untuk mengisinya.",
            "Layanan yang diminati dan isi pertanyaan Anda.",
          ],
        },
        {
          heading: "Cara kerja formulir WhatsApp",
          paragraphs: [
            "Formulir diproses di peramban Anda dan tidak dikirim ke atau disimpan pada server situs PAP. Saat Anda memilih Lanjutkan ke WhatsApp, situs membuka tautan WhatsApp dengan pesan yang sudah diisi. WhatsApp menerima data tautan tersebut untuk menyiapkan percakapan; pesan baru dikirim kepada PAP setelah Anda memeriksa dan menekan tombol kirim di WhatsApp.",
            "Setelah pesan diterima melalui WhatsApp, PAP menggunakan isi percakapan untuk menjawab pertanyaan, membahas kebutuhan layanan, dan melakukan tindak lanjut bisnis yang Anda minta. Catatan percakapan dapat disimpan selama diperlukan untuk menangani permintaan dan memenuhi kewajiban bisnis atau hukum yang berlaku.",
          ],
        },
        {
          heading: "Tujuan dan dasar penggunaan",
          paragraphs: ["Informasi digunakan secara terbatas untuk:"] ,
          items: [
            "Menanggapi pertanyaan dan permintaan informasi layanan PAP.",
            "Menghubungi Anda terkait pembahasan atau tindak lanjut yang Anda minta.",
            "Menjaga keamanan situs serta memenuhi kewajiban hukum yang berlaku.",
          ],
        },
        {
          heading: "Penerima dan layanan pihak ketiga",
          paragraphs: [
            "Jika Anda memilih WhatsApp, informasi yang terdapat di pesan dan tautan akan diproses oleh layanan WhatsApp/Meta sesuai ketentuan dan pemberitahuan privasi mereka. Setelah pesan dikirim, staf PAP yang menangani pertanyaan dapat melihat isi percakapan.",
            "Penyedia hosting dapat memproses data teknis koneksi untuk mengoperasikan dan mengamankan situs. Situs publik PAP tidak mengaktifkan cookie iklan atau analitik pihak ketiga.",
          ],
        },
        {
          heading: "Informasi yang tidak boleh dikirim",
          paragraphs: [
            "Jangan masukkan data pribadi debitur, nomor rekening, saldo, kredensial, dokumen identitas, atau informasi keuangan rahasia ke dalam formulir pertanyaan. Formulir ini hanya untuk pertanyaan awal mengenai layanan PAP.",
          ],
        },
        {
          heading: "Hak dan permintaan privasi",
          paragraphs: [
            "Sesuai peraturan perlindungan data pribadi yang berlaku di Indonesia, Anda dapat meminta akses, koreksi, atau penghapusan informasi yang berkaitan dengan percakapan Anda, serta menyampaikan keberatan atau pertanyaan mengenai penanganannya. PAP akan meninjau permintaan tersebut sesuai hukum dan kewajiban penyimpanan yang berlaku.",
            "Untuk mengajukan permintaan, hubungi PAP melalui panggilan atau formulir WhatsApp pada halaman Kontak. Sertakan konteks yang cukup agar percakapan dapat ditemukan; jangan kirimkan dokumen identitas atau data keuangan yang tidak diperlukan.",
          ],
        },
        {
          heading: "Perubahan pemberitahuan",
          paragraphs: ["PAP dapat memperbarui pemberitahuan ini apabila cara kerja situs atau formulir berubah. Versi terbaru akan ditampilkan pada halaman ini beserta tanggal berlakunya."],
        },
      ],
    },
    terms: {
      effectiveDate: "Berlaku mulai 27 September 2026",
      summary: "Ketentuan ini mengatur penggunaan situs publik PT Pelita Anugrah Perkasa dan informasi layanan yang ditampilkan di dalamnya.",
      sections: [
        {
          heading: "Informasi situs dan layanan",
          paragraphs: [
            "Situs ini menyediakan informasi umum mengenai PAP, layanan outsourcing, desk collection, labor supply, sistem collection, kantor, serta kanal kontak perusahaan. Informasi pada situs tidak dengan sendirinya menjadi penawaran yang mengikat, jaminan hasil, atau perjanjian penyediaan layanan.",
            "Ruang lingkup, target, tanggung jawab, harga, jadwal, pengolahan data, dan ketentuan suatu pekerjaan ditetapkan melalui pembahasan serta perjanjian tertulis dengan klien. Jika terdapat perbedaan, perjanjian tertulis yang disepakati para pihak berlaku untuk proyek tersebut.",
          ],
        },
        {
          heading: "Penggunaan yang diperbolehkan",
          paragraphs: ["Anda setuju untuk menggunakan situs secara sah dan tidak:"] ,
          items: [
            "Mengganggu ketersediaan, keamanan, atau operasi situs.",
            "Mengirim kode berbahaya, spam, ancaman, atau materi yang melanggar hukum melalui kanal kontak.",
            "Menyamar sebagai orang lain atau mengirim informasi yang Anda tidak berwenang bagikan.",
          ],
        },
        {
          heading: "Formulir pertanyaan dan WhatsApp",
          paragraphs: [
            "Formulir di halaman Kontak menyiapkan pesan di peramban dan meneruskannya ke WhatsApp hanya setelah Anda memilih untuk membuka tautan tersebut. Anda bertanggung jawab memastikan informasi yang dimasukkan akurat dan Anda berwenang untuk membagikannya.",
            "Jangan mengirim data pribadi debitur, informasi rekening, saldo, dokumen identitas, kredensial, atau data keuangan rahasia melalui formulir pertanyaan. Pengiriman pesan bergantung pada WhatsApp dan koneksi internet Anda.",
          ],
        },
        {
          heading: "Hak atas konten",
          paragraphs: [
            "Nama, logo, teks, desain, dan materi PAP pada situs dilindungi oleh ketentuan kekayaan intelektual yang berlaku. Merek pihak ketiga tetap menjadi milik masing-masing pemiliknya. Penggunaan situs tidak memberikan lisensi untuk memperbanyak atau menggunakan materi tersebut di luar tujuan yang diizinkan hukum atau persetujuan pemilik.",
          ],
        },
        {
          heading: "Tautan dan layanan pihak ketiga",
          paragraphs: [
            "Situs dapat membuka WhatsApp untuk meneruskan pertanyaan Anda. WhatsApp beroperasi berdasarkan ketentuan dan kebijakan privasinya sendiri. PAP tidak mengendalikan ketersediaan atau perubahan layanan pihak ketiga tersebut.",
          ],
        },
        {
          heading: "Ketersediaan dan tanggung jawab",
          paragraphs: [
            "PAP berupaya menjaga informasi tetap relevan dan situs tersedia, namun situs dapat mengalami pemeliharaan atau gangguan. Materi situs disediakan untuk informasi umum; hasil, kapasitas, dan ruang lingkup layanan bergantung pada kebutuhan dan kesepakatan khusus dengan klien.",
          ],
        },
        {
          heading: "Hukum yang berlaku dan perubahan",
          paragraphs: [
            "Ketentuan ini ditafsirkan berdasarkan hukum Republik Indonesia. Ketentuan dapat diperbarui seiring perubahan situs atau layanan; versi terbaru beserta tanggal berlakunya akan ditampilkan pada halaman ini.",
          ],
        },
      ],
    },
    "cookie-policy": {
      effectiveDate: "Berlaku mulai 27 September 2026",
      summary: "Situs publik PAP tidak menggunakan cookie iklan atau analitik. Cookie sesi hanya digunakan pada area admin jika autentikasi admin diaktifkan dan digunakan.",
      sections: [
        {
          heading: "Cookie pada situs publik",
          paragraphs: [
            "Halaman publik tidak memasang cookie analitik, iklan, atau pelacakan lintas situs. Formulir WhatsApp berjalan di peramban dan tidak menyimpan isian ke cookie atau penyimpanan lokal PAP.",
          ],
        },
        {
          heading: "Cookie esensial area admin",
          paragraphs: [
            "Jika area admin digunakan setelah autentikasi dikonfigurasi, situs menetapkan cookie sesi yang diperlukan untuk mempertahankan status masuk dan melindungi akun. Cookie ini bersifat HttpOnly, Secure pada produksi, SameSite Strict, dan berakhir saat masa sesi habis (maksimal 12 jam). Cookie admin tidak dipakai untuk melacak pengunjung situs publik.",
          ],
        },
        {
          heading: "WhatsApp dan layanan pihak ketiga",
          paragraphs: [
            "Jika Anda membuka WhatsApp dari formulir Kontak, WhatsApp/Meta dapat menggunakan cookie atau teknologi mereka sendiri. Penggunaan tersebut mengikuti pengaturan dan kebijakan privasi layanan pihak ketiga, bukan pengaturan cookie situs PAP.",
          ],
        },
        {
          heading: "Mengelola cookie",
          paragraphs: [
            "Anda dapat mengelola atau menghapus cookie melalui pengaturan peramban. Menonaktifkan cookie esensial dapat menghalangi fungsi masuk ke area admin; hal itu tidak memengaruhi pembacaan halaman publik.",
          ],
        },
        {
          heading: "Perubahan kebijakan",
          paragraphs: ["Kebijakan ini akan diperbarui apabila teknologi situs berubah. Versi dan tanggal terbaru akan tersedia pada halaman ini."],
        },
      ],
    },
  },
  en: {
    "privacy-policy": {
      effectiveDate: "Effective 27 September 2026",
      summary: "This notice explains how information is handled when you browse PAP’s website or ask about the company’s services.",
      sections: [
        {
          heading: "Controller and scope",
          paragraphs: [
            "This website is operated by PT Pelita Anugrah Perkasa (PAP). This notice covers the Indonesian and English public pages and the inquiry form on the Contact page.",
            "Privacy questions can be sent by calling the Director or using the WhatsApp form on the Contact page. Please identify your request as a privacy inquiry.",
          ],
        },
        {
          heading: "Information you provide",
          paragraphs: ["The inquiry form may contain:"] ,
          items: [
            "Your name and company name (company name is optional).",
            "Your phone/WhatsApp number, if you choose to provide it.",
            "The service you are interested in and the details of your inquiry.",
          ],
        },
        {
          heading: "How the WhatsApp form works",
          paragraphs: [
            "The form is processed in your browser and is not submitted to or stored on PAP’s website server. When you choose Continue to WhatsApp, the website opens a WhatsApp link containing the prepared message. WhatsApp receives that link data to prepare the conversation; the message is not sent to PAP until you review and press Send in WhatsApp.",
            "After PAP receives your message through WhatsApp, PAP uses the conversation to respond, discuss service needs, and follow up on the business inquiry you requested. Conversation records may be retained as needed to handle the inquiry and meet applicable business or legal requirements.",
          ],
        },
        {
          heading: "Purposes and grounds for use",
          paragraphs: ["Information is used only to:"] ,
          items: [
            "Respond to questions and requests for information about PAP’s services.",
            "Contact you about a discussion or follow-up you requested.",
            "Protect the website and comply with applicable legal requirements.",
          ],
        },
        {
          heading: "Recipients and third-party services",
          paragraphs: [
            "If you choose WhatsApp, the message and link data are processed by WhatsApp/Meta under their own terms and privacy notice. Once you send a message, PAP staff handling the inquiry can see the conversation.",
            "The hosting provider may process technical connection data to operate and secure the website. PAP’s public pages do not enable advertising or third-party analytics cookies.",
          ],
        },
        {
          heading: "Information you should not send",
          paragraphs: [
            "Do not include debtor personal data, account numbers, balances, credentials, identity documents, or confidential financial information in the public inquiry form. The form is for initial questions about PAP’s services only.",
          ],
        },
        {
          heading: "Privacy requests and rights",
          paragraphs: [
            "Under applicable Indonesian personal data protection laws, you may request access, correction, or deletion of information relating to your conversation and raise questions or objections about its handling. PAP will consider requests in accordance with applicable law and recordkeeping requirements.",
            "To make a request, contact PAP by phone or through the WhatsApp form on the Contact page. Provide enough context to identify the conversation; do not send unnecessary identity documents or financial data.",
          ],
        },
        {
          heading: "Changes to this notice",
          paragraphs: ["PAP may update this notice when website or form practices change. The latest version and effective date will appear on this page."],
        },
      ],
    },
    terms: {
      effectiveDate: "Effective 27 September 2026",
      summary: "These terms govern use of the public PT Pelita Anugrah Perkasa website and the service information presented here.",
      sections: [
        {
          heading: "Website and service information",
          paragraphs: [
            "This website provides general information about PAP, outsourcing, desk collection, labor supply, collection systems, offices, and company contact channels. Website content is not, by itself, a binding offer, guarantee of results, or service agreement.",
            "The scope, targets, responsibilities, fees, schedule, data handling, and terms of any engagement are agreed with the client in a written agreement. If information on this website differs from a signed agreement, the written agreement governs that engagement.",
          ],
        },
        {
          heading: "Acceptable use",
          paragraphs: ["You agree to use the website lawfully and not to:"] ,
          items: [
            "Interfere with website availability, security, or operation.",
            "Send malicious code, spam, threats, or unlawful material through a contact channel.",
            "Impersonate another person or submit information you are not authorized to share.",
          ],
        },
        {
          heading: "Inquiry form and WhatsApp",
          paragraphs: [
            "The Contact form prepares a message in your browser and opens WhatsApp only when you choose to continue. You are responsible for the accuracy of the information and for having authority to share it.",
            "Do not send debtor personal data, account information, balances, identity documents, credentials, or confidential financial data through the public inquiry form. Sending a message depends on WhatsApp and your internet connection.",
          ],
        },
        {
          heading: "Content rights",
          paragraphs: [
            "PAP names, logos, text, design, and materials on this website are protected by applicable intellectual property laws. Third-party marks remain the property of their respective owners. Website use does not grant a license to reproduce or use those materials beyond what law or the owner permits.",
          ],
        },
        {
          heading: "Third-party services",
          paragraphs: [
            "The website may open WhatsApp to prepare your inquiry. WhatsApp operates under its own terms and privacy notice. PAP does not control the availability or changes of that third-party service.",
          ],
        },
        {
          heading: "Availability and responsibility",
          paragraphs: [
            "PAP aims to keep information relevant and the website available, but maintenance or interruptions may occur. Website material is for general information; service outcomes, capacity, and scope depend on the client’s needs and the specific agreement.",
          ],
        },
        {
          heading: "Governing law and updates",
          paragraphs: [
            "These terms are interpreted under the laws of the Republic of Indonesia. PAP may update them as the website or services change; the current version and effective date will be posted on this page.",
          ],
        },
      ],
    },
    "cookie-policy": {
      effectiveDate: "Effective 27 September 2026",
      summary: "PAP’s public website does not use advertising or analytics cookies. A session cookie is used only in the admin area if admin authentication is configured and used.",
      sections: [
        {
          heading: "Cookies on public pages",
          paragraphs: [
            "Public pages do not set advertising, analytics, or cross-site tracking cookies. The WhatsApp inquiry form runs in your browser and does not save its contents in PAP cookies or local storage.",
          ],
        },
        {
          heading: "Essential admin session cookie",
          paragraphs: [
            "If the admin area is used after authentication is configured, the website sets a session cookie needed to maintain sign-in and protect the account. It is HttpOnly, Secure in production, SameSite Strict, and expires with the session (up to 12 hours). The admin cookie is not used to track public website visitors.",
          ],
        },
        {
          heading: "WhatsApp and third-party services",
          paragraphs: [
            "If you open WhatsApp from the Contact form, WhatsApp/Meta may use its own cookies or technologies. That use follows the third party’s privacy notice and settings, not PAP’s website cookie settings.",
          ],
        },
        {
          heading: "Managing cookies",
          paragraphs: [
            "You can manage or delete cookies through your browser settings. Disabling essential cookies may prevent admin sign-in; it does not affect reading public pages.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: ["This policy will be updated if the website’s technology changes. The latest version and date will appear on this page."],
        },
      ],
    },
  },
};
