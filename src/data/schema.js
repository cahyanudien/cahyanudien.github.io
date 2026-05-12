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
        "Cahyanudien Aziz Saputra is an Indonesian full-stack developer, author, musician, and founder of FlagoDNA. Known for privacy-first software, Islamic applications, contemplative literature, and the Introversoul music project.",

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

      jobTitle: ["Full-Stack Developer", "Author", "Musician", "Founder"],

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
        "https://open.spotify.com/artist/4BN5wcsLXapCKgy4CzMjzf",
        "https://music.apple.com/us/artist/introversoul/1877195012",
        "https://music.youtube.com/channel/UCM_5i_cjiW96AvvGWY8PNgg",
        "https://soundcloud.com/introversoul",
        "https://instagram.com/introversoul.music",
        "https://x.com/introversoul",
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

    // MUSIC PROJECT
    {
      "@type": "MusicGroup",
      "@id": "https://www.wikidata.org/wiki/Q138609374",

      name: "Introversoul",

      alternateName: ["IntroverSoul", "introversoul music"],

      founder: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      genre: ["Ambient", "Experimental", "Atmospheric music"],

      description:
        "Introversoul is an introspective music project created by Cahyanudien Aziz Saputra.",

      url: "https://open.spotify.com/artist/4BN5wcsLXapCKgy4CzMjzf",

      sameAs: [
        "https://open.spotify.com/artist/4BN5wcsLXapCKgy4CzMjzf",
        "https://music.apple.com/us/artist/introversoul/1877195012",
        "https://music.youtube.com/channel/UCM_5i_cjiW96AvvGWY8PNgg",
        "https://soundcloud.com/introversoul",
        "https://instagram.com/introversoul.music",
        "https://x.com/introversoul",
      ],
    },

    // BOOKS

    {
      "@type": "Book",
      "@id":
        "https://books.apple.com/us/book/stillness-that-walks/id6760230977",

      name: "Stillness that Walks",

      author: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      publisher: {
        "@id": "https://flagodna.com/#organization",
      },

      inLanguage: "en",

      genre: "Philosophical Poetry",

      url: "https://books.apple.com/us/book/stillness-that-walks/id6760230977",

      workExample: [
        {
          "@type": "Book",
          bookFormat: "https://schema.org/EBook",

          potentialAction: {
            "@type": "ReadAction",
            target: "https://www.amazon.com/dp/B0GRCVR9PV",
          },
        },
      ],
    },

    {
      "@type": "Book",

      "@id": "https://play.google.com/store/books/details?id=xOfFEQAAQBAJ",

      name: "Hening yang Berjalan",

      author: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      publisher: {
        "@id": "https://flagodna.com/#organization",
      },

      inLanguage: "id",

      genre: "Puisi Filosofis",

      url: "https://play.google.com/store/books/details?id=xOfFEQAAQBAJ",
    },

    {
      "@type": "Book",

      "@id": "https://www.amazon.com/dp/B0GS224DVW",

      name: "ACHE: What Kind of Life Is This?",

      author: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      publisher: {
        "@id": "https://flagodna.com/#organization",
      },

      inLanguage: "en",

      genre: "Literary Fiction",

      url: "https://www.amazon.com/dp/B0GS224DVW",

      workExample: [
        {
          "@type": "Book",

          bookFormat: "https://schema.org/EBook",

          potentialAction: {
            "@type": "ReadAction",

            target:
              "https://books.apple.com/us/book/ache-what-kind-of-life-is-this/id6760345441",
          },
        },
      ],
    },

    {
      "@type": "Book",

      "@id": "https://play.google.com/store/books/details?id=orPHEQAAQBAJ",

      name: "ACHE: Hidup Seperti Apa Ini?",

      author: {
        "@id": "https://www.cahyanudien.site/#person",
      },

      publisher: {
        "@id": "https://flagodna.com/#organization",
      },

      inLanguage: "id",

      genre: "Fiksi Literer",

      url: "https://play.google.com/store/books/details?id=orPHEQAAQBAJ",
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
