export const schemaData = [
  // ========================================================
  // WEBPAGE
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": "https://www.cahyanudien.site/stillness-that-walks/#webpage",

    url: "https://www.cahyanudien.site/stillness-that-walks/",

    name: "Stillness That Walks — Cahyanudien Aziz Saputra",

    headline: "Stillness That Walks — message within message",

    description:
      "Stillness That Walks is a contemplative poetry collection by Cahyanudien Aziz Saputra exploring silence, inward journeys, emotional residue, healing, identity, and unfinished movement within the self.",

    inLanguage: "en",

    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.cahyanudien.site/#website",
    },

    about: {
      "@id": "https://www.cahyanudien.site/stillness-that-walks/#book",
    },

    mainEntity: {
      "@id": "https://www.cahyanudien.site/stillness-that-walks/#book",
    },

    author: {
      "@id": "https://www.wikidata.org/wiki/Q138566666",
    },

    breadcrumb: {
      "@id": "https://www.cahyanudien.site/stillness-that-walks/#breadcrumb",
    },

    primaryImageOfPage: {
      "@id": "https://www.cahyanudien.site/stillness-that-walks/#primaryimage",
    },
  },

  // ========================================================
  // PRIMARY IMAGE
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "ImageObject",

    "@id": "https://www.cahyanudien.site/stillness-that-walks/#primaryimage",

    url: "https://books.google.com/books/content?id=PhHGEQAAQBAJ&printsec=frontcover&img=1&zoom=1",

    contentUrl:
      "https://books.google.com/books/content?id=PhHGEQAAQBAJ&printsec=frontcover&img=1&zoom=1",

    caption: "Stillness That Walks by Cahyanudien Aziz Saputra",
  },

  // ========================================================
  // BOOK
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "Book",

    "@id": "https://www.cahyanudien.site/stillness-that-walks/#book",

    name: "Stillness That Walks",

    alternateName: ["Stillness That Walks: message within message"],

    headline:
      "Stillness That Walks — contemplative poetry by Cahyanudien Aziz Saputra",

    url: "https://www.cahyanudien.site/stillness-that-walks/",

    image:
      "https://books.google.com/books/content?id=PhHGEQAAQBAJ&printsec=frontcover&img=1&zoom=1",

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
      "A message within a message — written in mist, for those who know that life cannot always be spoken. Stillness That Walks is a contemplative poetry collection born from silence, exploring emotional exhaustion, identity, healing, inward journeys, and the courage to continue walking even when the path is unclear.",

    abstract:
      "Structured into three movements — Root, Growing, and Sky — the book reflects on silence, loss, reflection, healing, and unfinished becoming.",

    genre: [
      "Philosophical Poetry",
      "Contemplative Poetry",
      "Reflective Literature",
      "Poetry",
    ],

    keywords: [
      "Stillness That Walks",
      "Stillness That Walks message within message",
      "Cahyanudien Aziz Saputra",
      "Cahyanudien",
      "Introversoul",
      "philosophical poetry",
      "contemplative poetry",
      "reflective poetry",
      "poetry collection",
      "healing poetry",
      "silence and identity",
      "Root Growing Sky",
      "modern poetry",
      "spiritual reflection",
      "inner journey",
    ],

    inLanguage: "en",

    numberOfPages: 64,

    copyrightYear: "2026",

    datePublished: "2026-03-04",

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

        url: "https://www.amazon.com/dp/B0GRCVR9PV",

        availability: "https://schema.org/InStock",

        seller: {
          "@type": "Organization",

          name: "Amazon Kindle",
        },
      },

      {
        "@type": "Offer",

        url: "https://play.google.com/store/books/details?id=PhHGEQAAQBAJ",

        availability: "https://schema.org/InStock",

        seller: {
          "@type": "Organization",

          name: "Google Play Books",
        },
      },

      {
        "@type": "Offer",

        url: "https://books.apple.com/us/book/stillness-that-walks/id6760230977",

        availability: "https://schema.org/InStock",

        seller: {
          "@type": "Organization",

          name: "Apple Books",
        },
      },
    ],

    sameAs: [
      "https://www.amazon.com/dp/B0GRCVR9PV",
      "https://play.google.com/store/books/details?id=PhHGEQAAQBAJ",
      "https://books.apple.com/us/book/stillness-that-walks/id6760230977",
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

    sameAs: ["https://github.com/flagodna"],
  },

  // ========================================================
  // BREADCRUMB
  // ========================================================
  {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    "@id": "https://www.cahyanudien.site/stillness-that-walks/#breadcrumb",

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

        name: "Stillness That Walks",

        item: "https://www.cahyanudien.site/stillness-that-walks/",
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

    inLanguage: ["en", "id"],
  },
];
