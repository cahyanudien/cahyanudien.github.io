export const schemaData = [
  // ========================================================
  // WEBSITE
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": "https://www.cahyanudien.site/#website",

    name: "Cahyanudien Aziz Saputra",

    url: "https://www.cahyanudien.site",

    inLanguage: ["id", "en"],

    publisher: {
      "@id": "https://flagodna.com/#organization",
    },
  },

  // ========================================================
  // WEBPAGE
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": "https://www.cahyanudien.site/ache-hidup-seperti-apa-ini/#webpage",

    url: "https://www.cahyanudien.site/ache-hidup-seperti-apa-ini/",

    name: "ACHE: Hidup Seperti Apa Ini? — Cahyanudien Aziz Saputra",

    headline: "ACHE: Hidup Seperti Apa Ini? — 32 Fragmen Kehidupan Rei",

    description:
      "ACHE adalah karya prosa fragmentaris karya Cahyanudien Aziz Saputra tentang Rei, kota yang nyaris tidak mengenalnya, dan hidup yang sedikit meleset dari rencana.",

    inLanguage: "id",

    isPartOf: {
      "@id": "https://www.cahyanudien.site/#website",
    },

    about: {
      "@id": "https://www.cahyanudien.site/ache-hidup-seperti-apa-ini/#book",
    },

    mainEntity: {
      "@id": "https://www.cahyanudien.site/ache-hidup-seperti-apa-ini/#book",
    },

    author: {
      "@id": "https://www.wikidata.org/wiki/Q138566666",
    },

    breadcrumb: {
      "@id":
        "https://www.cahyanudien.site/ache-hidup-seperti-apa-ini/#breadcrumb",
    },

    primaryImageOfPage: {
      "@id":
        "https://www.cahyanudien.site/ache-hidup-seperti-apa-ini/#primaryimage",
    },
  },

  // ========================================================
  // PRIMARY IMAGE
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "ImageObject",

    "@id":
      "https://www.cahyanudien.site/ache-hidup-seperti-apa-ini/#primaryimage",

    url: "https://books.google.com/books/content?id=orPHEQAAQBAJ&printsec=frontcover&img=1&zoom=1",

    contentUrl:
      "https://books.google.com/books/content?id=orPHEQAAQBAJ&printsec=frontcover&img=1&zoom=1",

    caption: "ACHE: Hidup Seperti Apa Ini? by Cahyanudien Aziz Saputra",
  },

  // ========================================================
  // BOOK
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "Book",

    "@id": "https://www.cahyanudien.site/ache-hidup-seperti-apa-ini/#book",

    name: "ACHE: Hidup Seperti Apa Ini?",

    alternateName: [
      "ACHE",
      "ACHE: Hidup Seperti Apa Ini? — 32 Fragmen Kehidupan Rei",
    ],

    headline:
      "ACHE: Hidup Seperti Apa Ini? — Prosa Fragmentaris karya Cahyanudien Aziz Saputra",

    url: "https://www.cahyanudien.site/ache-hidup-seperti-apa-ini/",

    image:
      "https://books.google.com/books/content?id=orPHEQAAQBAJ&printsec=frontcover&img=1&zoom=1",

    author: {
      "@type": "Person",

      "@id": "https://www.wikidata.org/wiki/Q138566666",

      name: "Cahyanudien Aziz Saputra",

      alternateName: ["Cahyanudien", "Cahyanudin", "Introversoul"],

      url: "https://www.cahyanudien.site",

      sameAs: [
        "https://flagodna.com",
        "https://github.com/cahyanudien",
        "https://github.com/cas8398",
        "https://linkedin.com/in/cahyanudien",
        "https://www.wikidata.org/wiki/Q138566666",
        "https://orcid.org/0009-0007-5983-9221",
      ],
    },

    publisher: {
      "@type": "Organization",

      "@id": "https://flagodna.com/#organization",

      name: "FlagoDNA",

      url: "https://flagodna.com",
    },

    description:
      "ACHE adalah buku berisi 32 fragmen pendek dari kehidupan Rei — seseorang yang bergerak di sebuah kota yang jarang menyadari bahwa ia ada. Prosa fragmentaris tentang kesalahan kecil, kebetulan yang sunyi, dan hari-hari yang tetap berjalan meskipun sedikit meleset dari rencana.",

    abstract:
      "32 fragmen pendek tentang Rei, kota yang nyaris tidak mengenalnya, dan hidup yang tidak runtuh secara dramatis — hanya sedikit meleset dari rencana.",

    genre: [
      "Literary Fiction",
      "Prosa Fragmentaris",
      "Contemporary Fiction",
      "Psychological Fiction",
    ],

    keywords: [
      "ACHE",
      "ACHE Hidup Seperti Apa Ini",
      "Cahyanudien Aziz Saputra",
      "Cahyanudien",
      "Rei",
      "prosa fragmentaris",
      "literary fiction Indonesia",
      "novel reflektif",
      "fragmented prose",
      "kesepian urban",
      "kehidupan yang meleset",
      "fiction Indonesia",
      "Introversoul",
    ],

    inLanguage: "id",

    numberOfPages: 133,

    copyrightYear: "2026",

    datePublished: "2026-03-10",

    bookFormat: "https://schema.org/EBook",

    isAccessibleForFree: false,

    character: [
      {
        "@type": "Person",
        name: "Rei",
      },
    ],

    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: "ACHE",
    },

    offers: [
      {
        "@type": "Offer",

        url: "https://play.google.com/store/books/details?id=orPHEQAAQBAJ",

        availability: "https://schema.org/InStock",

        seller: {
          "@type": "Organization",
          name: "Google Play Books",
        },
      },

      {
        "@type": "Offer",

        url: "https://books.apple.com/us/book/ache-hidup-seperti-apa-ini/id6760401307",

        availability: "https://schema.org/InStock",

        seller: {
          "@type": "Organization",
          name: "Apple Books",
        },
      },
    ],

    sameAs: [
      "https://play.google.com/store/books/details?id=orPHEQAAQBAJ",
      "https://books.apple.com/us/book/ache-hidup-seperti-apa-ini/id6760401307",
      "https://books.google.com/books?id=orPHEQAAQBAJ",
    ],
  },

  // ========================================================
  // PERSON
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "Person",

    "@id": "https://www.wikidata.org/wiki/Q138566666",

    name: "Cahyanudien Aziz Saputra",

    alternateName: ["Cahyanudien", "Cahyanudin", "Introversoul", "cas8398"],

    url: "https://www.cahyanudien.site",

    image: "https://avatars.githubusercontent.com/cas8398",

    nationality: {
      "@type": "Country",
      name: "Indonesia",
    },

    jobTitle: ["Full-Stack Developer", "Author", "Founder"],

    worksFor: {
      "@id": "https://flagodna.com/#organization",
    },

    founder: {
      "@id": "https://flagodna.com/#organization",
    },

    sameAs: [
      "https://flagodna.com",
      "https://github.com/cahyanudien",
      "https://github.com/cas8398",
      "https://linkedin.com/in/cahyanudien",
      "https://x.com/cas8398",
      "https://www.wikidata.org/wiki/Q138566666",
      "https://orcid.org/0009-0007-5983-9221",
    ],
  },

  // ========================================================
  // ORGANIZATION
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "Organization",

    "@id": "https://flagodna.com/#organization",

    name: "FlagoDNA",

    url: "https://flagodna.com",

    founder: {
      "@id": "https://www.wikidata.org/wiki/Q138566666",
    },

    description:
      "Privacy-first digital ecosystem focused on meaningful software and creator-owned digital products.",
  },

  // ========================================================
  // BREADCRUMB
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    "@id":
      "https://www.cahyanudien.site/ache-hidup-seperti-apa-ini/#breadcrumb",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://www.cahyanudien.site",
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "ACHE: Hidup Seperti Apa Ini?",

        item: "https://www.cahyanudien.site/ache-hidup-seperti-apa-ini/",
      },
    ],
  },
];
