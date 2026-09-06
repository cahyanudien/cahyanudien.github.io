export const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    // PERSON
    {
      "@type": "Person",
      "@id": "https://www.cahyanudien.site/#person",

      identifier: {
        "@type": "PropertyValue",
        propertyID: "Wikidata",
        value: "Q138566666",
      },

      name: "Cahyanudien Aziz Saputra",

      givenName: "Cahyanudien",
      familyName: "Saputra",

      alternateName: [
        "Cahyanudien",
        "Cahyanudin",
        "Cahyanudien Aziz Saputra",
        "Cahyanudin Aziz Saputra",
        "Cahyanudien AS",
        "Cahyanudin AS",
        "Cahya Nudien",
        "Cahya Nudin",
        "Introversoul",
        "Wayang",
        "cas8398",
      ],

      url: "https://www.cahyanudien.site",

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.cahyanudien.site/cahyanudien-aziz-saputra/",
      },

      image: "https://www.cahyanudien.site/images/cahyanudien-2026.jpg",

      nationality: {
        "@type": "Country",
        name: "Indonesia",
      },

      homeLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressCountry: "ID",
        },
      },

      description:
        "Cahyanudien Aziz Saputra is an Indonesian software engineer, founder of FlagoDNA, and author. He is known for building privacy-first software, cross-platform applications, and writing books on philosophy, technology, and the inner life.",

      knowsLanguage: ["en", "id"],

      knowsAbout: [
        "Flutter",
        "Dart",
        "Kotlin",
        "Node.js",
        "React",
        "Full-Stack Development",
        "Mobile Application Development",
        "Privacy-First Design",
        "Islamic Mobile Applications",
        "Open Source Software",
        "Creative Technology",
        "Structured Data",
        "Knowledge Graph",
      ],

      jobTitle: ["Full-Stack Developer", "Author", "Founder"],

      worksFor: {
        "@id": "https://flagodna.com/#organization",
      },

      founder: {
        "@id": "https://flagodna.com/#organization",
      },

      brand: {
        "@type": "Brand",
        name: "FlagoDNA",
      },

      sameAs: [
        "https://www.wikidata.org/wiki/Q138566666",
        "https://github.com/cas8398",
        "https://github.com/cahyanudien",
        "https://linkedin.com/in/cahyanudien",
        "https://x.com/cas8398",
        "https://instagram.com/cas8398",
        "https://blog.cahyanudien.site",
        "https://flagodna.com",
        "https://www.amazon.com/author/cahyanudien",
        "https://www.goodreads.com/author/show/69229893.Cahyanudien_Aziz_Saputra",
        "https://www.smashwords.com/profile/view/Cahyanudien_Aziz_Saputra/",
        "https://orcid.org/0009-0007-5983-9221",
        "https://www.researchgate.net/profile/Cahyanudien-Saputra-2",
        "https://dev.to/cas8398",
        "https://medium.com/@cas8398",
      ],

      subjectOf: [
        {
          "@id":
            "https://books.apple.com/us/book/stillness-that-walks/id6760230977",
        },
        {
          "@id": "https://www.amazon.com/dp/B0GS224DVW",
        },
      ],
    },

    // ORGANIZATION
    {
      "@type": "Organization",
      "@id": "https://flagodna.com/#organization",

      name: "FlagoDNA",

      url: "https://flagodna.com",

      logo: {
        "@type": "ImageObject",
        url: "https://flagodna.com/logo.png",
      },

      foundingDate: "2020",

      founder: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      description:
        "FlagoDNA is an Indonesian privacy-first digital ecosystem focused on meaningful software, Islamic applications, and offline-first experiences.",

      sameAs: [
        "https://github.com/flagodna",
        "https://play.google.com/store/apps/dev?id=FlagoDNA",
      ],
    },

    // BOOKS

    {
      "@type": "Book",
      "@id": "https://www.cahyanudien.site/stillness-that-walks/#book",
      name: "Stillness that Walks",
      isbn: "9798233323478",
      url: "https://www.cahyanudien.site/stillness-that-walks/",
      sameAs: [
        "https://search.worldcat.org/title/1579545871",
        "https://books.google.com/books?id=PhHGEQAAQBAJ",
        "https://play.google.com/store/books/details?id=PhHGEQAAQBAJ",
        "https://www.amazon.com/dp/B0GRCVR9PV",
        "https://books.apple.com/us/book/stillness-that-walks/id6760230977",
        "https://www.goodreads.com/book/show/249343144-stillness-that-walks",
        "https://www.goodreads.com/book/show/249471367-stillness-that-walks",
      ],
      author: {
        "@id": "https://www.cahyanudien.site/#person",
      },
      publisher: {
        "@id": "https://flagodna.com/#organization",
      },
      inLanguage: "en",
      genre: "Philosophical Poetry",
      workExample: [
        {
          "@type": "Book",
          bookFormat: "https://schema.org/EBook",
          potentialAction: [
            {
              "@type": "ReadAction",
              target: "https://books.google.com/books?id=PhHGEQAAQBAJ",
            },
            {
              "@type": "ReadAction",
              target: "https://www.amazon.com/dp/B0GRCVR9PV",
            },
          ],
        },
      ],
    },

    {
      "@type": "Book",
      "@id": "https://www.cahyanudien.site/hening-yang-berjalan/#book",
      name: "Hening yang Berjalan",
      isbn: "9798233376382",
      url: "https://www.cahyanudien.site/hening-yang-berjalan/",
      sameAs: [
        "https://search.worldcat.org/title/1579137946",
        "https://books.google.com/books?id=xOfFEQAAQBAJ",
        "https://play.google.com/store/books/details?id=xOfFEQAAQBAJ",
        "https://books.apple.com/us/book/hening-yang-berjalan/id6760232604",
        "https://www.kobo.com/au/en/ebook/hening-yang-berjalan",
        "https://www.goodreads.com/book/show/251506987-hening-yang-berjalan",
      ],
      author: {
        "@id": "https://www.cahyanudien.site/#person",
      },
      publisher: {
        "@id": "https://flagodna.com/#organization",
      },
      inLanguage: "id",
      genre: "Puisi Filosofis",
      workExample: [
        {
          "@type": "Book",
          bookFormat: "https://schema.org/EBook",
          potentialAction: [
            {
              "@type": "ReadAction",
              target: "https://books.google.com/books?id=xOfFEQAAQBAJ",
            },
          ],
        },
      ],
    },

    {
      "@type": "Book",
      "@id":
        "https://www.cahyanudien.site/ache-what-kind-of-life-is-this/#book",
      name: "ACHE: What Kind of Life Is This?",
      isbn: "9798233622281",
      url: "https://www.cahyanudien.site/ache-what-kind-of-life-is-this/",
      sameAs: [
        "https://search.worldcat.org/title/1579547571",
        "https://books.google.com/books?id=9dTHEQAAQBAJ",
        "https://play.google.com/store/books/details?id=9dTHEQAAQBAJ",
        "https://books.apple.com/us/book/ache-what-kind-of-life-is-this/id6760345441",
        "https://www.amazon.com/dp/B0GS224DVW",
        "https://www.kobo.com/au/en/ebook/ache-what-kind-of-life-is-this",
        "https://www.goodreads.com/book/show/249524075-ache",
      ],
      author: {
        "@id": "https://www.cahyanudien.site/#person",
      },
      publisher: {
        "@id": "https://flagodna.com/#organization",
      },
      inLanguage: "en",
      genre: "Literary Fiction",
      workExample: [
        {
          "@type": "Book",
          bookFormat: "https://schema.org/EBook",
          potentialAction: [
            {
              "@type": "ReadAction",
              target: "https://books.google.com/books?id=9dTHEQAAQBAJ",
            },
          ],
        },
      ],
    },

    {
      "@type": "Book",
      "@id": "https://www.cahyanudien.site/ache-hidup-seperti-apa-ini/#book",
      name: "ACHE: Hidup Seperti Apa Ini?",
      isbn: "9798233600487",
      url: "https://www.cahyanudien.site/ache-hidup-seperti-apa-ini/",
      sameAs: [
        "https://search.worldcat.org/title/1579543081",
        "https://books.google.com/books?id=orPHEQAAQBAJ",
        "https://play.google.com/store/books/details?id=orPHEQAAQBAJ",
        "https://books.apple.com/us/book/ache-hidup-seperti-apa-ini/id6760401307",
        "https://www.kobo.com/au/en/ebook/ache-hidup-seperti-apa-ini",
        "https://www.goodreads.com/book/show/251507054-ache",
      ],
      author: {
        "@id": "https://www.cahyanudien.site/#person",
      },
      publisher: {
        "@id": "https://flagodna.com/#organization",
      },
      inLanguage: "id",
      genre: "Fiksi Literer",
      workExample: [
        {
          "@type": "Book",
          bookFormat: "https://schema.org/EBook",
          potentialAction: [
            {
              "@type": "ReadAction",
              target: "https://books.google.com/books?id=orPHEQAAQBAJ",
            },
          ],
        },
      ],
    },

    // APPS

    {
      "@type": "SoftwareApplication",
      "@id": "https://flagodna.com/hadisku/#app",

      name: "Hadis Ku",

      applicationCategory: "ReligiousApplication",

      operatingSystem: "Android",

      author: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      creator: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      publisher: {
        "@id": "https://flagodna.com/#organization",
      },

      description:
        "Complete 14 Imams Hadith application with offline access and sanad support.",

      url: "https://flagodna.com/hadisku/",

      installUrl:
        "https://play.google.com/store/apps/details?id=com.flagodna.hadisku",

      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },

    {
      "@type": "SoftwareApplication",
      "@id": "https://amalanku.github.io/#app",

      name: "AmalanKu",

      applicationCategory: "LifestyleApplication",

      operatingSystem: "Android",

      author: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      creator: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      publisher: {
        "@id": "https://flagodna.com/#organization",
      },

      description: "Daily deeds tracker for reflection and consistency.",

      url: "https://amalanku.github.io/",

      installUrl:
        "https://play.google.com/store/apps/details?id=com.flagodna.amalanku",

      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },

    {
      "@type": "SoftwareApplication",
      "@id": "https://flagodna.com/lens-browser/#app",

      name: "Lens Browser",

      applicationCategory: "BrowserApplication",

      operatingSystem: "Android",

      author: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      creator: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      publisher: {
        "@id": "https://flagodna.com/#organization",
      },

      description: "Privacy-focused Android browser with built-in ad blocking.",

      url: "https://flagodna.com/lens-browser/",

      installUrl:
        "https://play.google.com/store/apps/details?id=com.flagodna.lensbrowser",

      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },

    {
      "@type": "SoftwareApplication",
      "@id": "https://flagodna.com/hijri-today/#app",

      name: "Hijri Today",

      applicationCategory: "UtilityApplication",

      operatingSystem: "Android",

      author: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      creator: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      publisher: {
        "@id": "https://flagodna.com/#organization",
      },

      description: "Lightweight Hijri date widget for Android home screens.",

      url: "https://flagodna.com/hijri-today/",

      installUrl:
        "https://play.google.com/store/apps/details?id=com.flagodna.hijridate",

      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};
