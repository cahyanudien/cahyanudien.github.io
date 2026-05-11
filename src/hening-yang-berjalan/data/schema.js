export const schemaData = [
  // ========================================================
  // WEBPAGE
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": "https://www.cahyanudien.site/hening-yang-berjalan/#webpage",

    url: "https://www.cahyanudien.site/hening-yang-berjalan/",

    name: "Hening yang Berjalan — Cahyanudien Aziz Saputra",

    headline: "Hening yang Berjalan — Pesan dalam Pesan",

    description:
      "Hening yang Berjalan adalah kumpulan puisi kontemplatif karya Cahyanudien Aziz Saputra tentang perjalanan jiwa, kehilangan, identitas, dan keberanian untuk tetap melangkah dalam sunyi.",

    inLanguage: "id",

    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.cahyanudien.site/#website",
    },

    about: {
      "@id": "https://www.cahyanudien.site/hening-yang-berjalan/#book",
    },

    mainEntity: {
      "@id": "https://www.cahyanudien.site/hening-yang-berjalan/#book",
    },

    author: {
      "@id": "https://www.wikidata.org/wiki/Q138566666",
    },

    breadcrumb: {
      "@id": "https://www.cahyanudien.site/hening-yang-berjalan/#breadcrumb",
    },

    primaryImageOfPage: {
      "@id": "https://www.cahyanudien.site/hening-yang-berjalan/#primaryimage",
    },
  },

  // ========================================================
  // PRIMARY IMAGE
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "ImageObject",

    "@id": "https://www.cahyanudien.site/hening-yang-berjalan/#primaryimage",

    url: "https://books.google.com/books/content?id=xOfFEQAAQBAJ&printsec=frontcover&img=1&zoom=1",

    contentUrl:
      "https://books.google.com/books/content?id=xOfFEQAAQBAJ&printsec=frontcover&img=1&zoom=1",

    caption: "Hening yang Berjalan by Cahyanudien Aziz Saputra",
  },

  // ========================================================
  // BOOK
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "Book",

    "@id": "https://www.cahyanudien.site/hening-yang-berjalan/#book",

    name: "Hening yang Berjalan",

    alternateName: ["Hening yang Berjalan: Pesan dalam Pesan"],

    headline:
      "Hening yang Berjalan — kumpulan puisi kontemplatif karya Cahyanudien Aziz Saputra",

    url: "https://www.cahyanudien.site/hening-yang-berjalan/",

    image:
      "https://books.google.com/books/content?id=xOfFEQAAQBAJ&printsec=frontcover&img=1&zoom=1",

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
      "Hening yang Berjalan adalah kumpulan puisi yang lahir dari ruang sunyi—tentang perjalanan jiwa yang tak pernah benar-benar selesai. Buku ini mengeksplorasi kehilangan, identitas, refleksi diri, dan keberanian untuk tetap berjalan dalam keheningan.",

    abstract:
      "Dibagi dalam tiga bagian — Akar, Tumbuh, dan Langit — buku ini merefleksikan perjalanan batin, perubahan diri, dan ruang sunyi yang sering tersembunyi di balik kehidupan sehari-hari.",

    genre: [
      "Puisi Kontemplatif",
      "Puisi Filosofis",
      "Literatur Reflektif",
      "Puisi",
    ],

    keywords: [
      "Hening yang Berjalan",
      "Hening yang Berjalan Pesan dalam Pesan",
      "Cahyanudien Aziz Saputra",
      "Cahyanudien",
      "Introversoul",
      "puisi kontemplatif",
      "puisi reflektif",
      "puisi filosofis",
      "perjalanan jiwa",
      "Akar Tumbuh Langit",
      "literatur Indonesia",
      "healing poetry",
      "keheningan",
      "identitas",
    ],

    inLanguage: "id",

    numberOfPages: 64,

    copyrightYear: "2026",

    datePublished: "2026-03-03",

    bookFormat: "https://schema.org/EBook",

    isAccessibleForFree: false,

    aggregateRating: {
      "@type": "AggregateRating",

      ratingValue: "5",

      reviewCount: "2",
    },

    offers: [
      {
        "@type": "Offer",

        url: "https://play.google.com/store/books/details?id=xOfFEQAAQBAJ",

        availability: "https://schema.org/InStock",

        category: "EBook",

        seller: {
          "@type": "Organization",
          name: "Google Play Books",
        },
      },

      {
        "@type": "Offer",

        url: "https://books.apple.com/us/book/hening-yang-berjalan/id6760232604",

        availability: "https://schema.org/InStock",

        category: "EBook",

        seller: {
          "@type": "Organization",
          name: "Apple Books",
        },
      },
    ],

    sameAs: [
      "https://play.google.com/store/books/details?id=xOfFEQAAQBAJ",
      "https://books.apple.com/us/book/hening-yang-berjalan/id6760232604",
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

    jobTitle: ["Full-Stack Developer", "Author", "Founder", "Music Creator"],

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
      "https://open.spotify.com/artist/4BN5wcsLXapCKgy4CzMjzf",
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
      "Privacy-first digital ecosystem focused on meaningful software, reflective digital experiences, and creator-owned products.",
  },

  // ========================================================
  // BREADCRUMB
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    "@id": "https://www.cahyanudien.site/hening-yang-berjalan/#breadcrumb",

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

        name: "Hening yang Berjalan",

        item: "https://www.cahyanudien.site/hening-yang-berjalan/",
      },
    ],
  },

  // ========================================================
  // WEBSITE
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "WebSite",

    "@id": "https://www.cahyanudien.site/#website",

    name: "Cahyanudien Aziz Saputra",

    url: "https://www.cahyanudien.site",

    publisher: {
      "@id": "https://flagodna.com/#organization",
    },

    inLanguage: ["id", "en"],
  },
];
