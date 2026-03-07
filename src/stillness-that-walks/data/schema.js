export const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Stillness That Walks: message within message",
    author: {
      "@type": "Person",
      name: "Cahyanudien Aziz Saputra",
      sameAs: [
        "https://flagodna.com",
        "https://github.com/cahyanudien",
        "https://linkedin.com/in/cahyanudien",
      ],
    },
    description:
      "A philosophical poetry collection exploring silence, logic, and the unseen.",
    genre: ["Poetry", "Philosophy"],
    inLanguage: "en",
    url: "https://github.com/cahyanudien/stillness-that-walks",
    numberOfPages: 64,
    datePublished: "2026",
    publisher: "Independently published",
    offers: [
      {
        "@type": "Offer",
        url: "https://www.amazon.com/dp/B0GRCVR9PV",
        seller: { "@type": "Organization", name: "Amazon Kindle" },
      },
      {
        "@type": "Offer",
        url: "https://play.google.com/store/books/details?id=PhHGEQAAQBAJ",
        seller: { "@type": "Organization", name: "Google Play Books" },
      },
    ],
  },
];
