import "../style.css";
import { bookData } from "./data/book.js";
import { schemaData } from "./data/schema.js";

// Inject Schema.org JSON-LD
schemaData.forEach((schema) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
});

// Render book page
document.querySelector("#app").innerHTML = `
  <div class="container">

    <!-- top bar -->
    <div class="top-bar">
      <div class="back-home">
        <a href="../">← Cahyanudien</a>
      </div>
      <div class="lang-switch">
        <a href="./" class="active">EN</a>
        <a href="../ache-hidup-seperti-apa-ini/">ID</a>
      </div>
    </div>

    <!-- hero -->
    <div class="hero">
      <h1 class="book-title">${bookData.title}</h1>
      <div class="book-subtitle">${bookData.subtitle}</div>
      <div class="author-name">${bookData.author}</div>

      <div class="cover-block-ache-1-en" title="Book cover"></div>

      <div class="pull-quote">“${bookData.pullQuote}”</div>
    </div>

    <!-- info cards -->
    <div class="info-grid">
      ${bookData.stats
        .map(
          (stat) => `
        <div class="info-card">
          <div class="info-label">${stat.label}</div>
          <div class="info-value">${stat.value}</div>
        </div>
      `
        )
        .join("")}
    </div>

    <!-- author -->
    <div class="author-snippet">
      <div class="author-avatar"></div>
      <div>
        <p>
          <strong>${bookData.authorBio.name}</strong> ${
  bookData.authorBio.description
}
        </p>
        <p style="font-size:0.85rem;margin-top:0.3rem">
          <a href="${
            bookData.authorBio.githubUrl
          }" style="color:#1a1a1a" target="_blank" rel="noopener">
            ${bookData.authorBio.githubHandle}
          </a>
        </p>
      </div>
    </div>

    <!-- intro -->
    <div class="intro-card">
      <p>${bookData.intro}</p>
      <div class="attribution">— about the book</div>
    </div>

    <!-- video -->
    <div class="video-wrapper">
      <iframe
        src="${bookData.videoUrl}"
        title="${bookData.title}"
        loading="lazy"
        allowfullscreen
      ></iframe>
    </div>

    <!-- purchase -->
    <div class="section-title" id="purchase-books">Read & Buy</div>

    <div class="purchase-grid">
      ${bookData.purchaseLinks
        .map(
          (link) => `
        <a
          href="${link.url}"
          target="${link.disabled ? "_self" : "_blank"}"
          rel="${link.disabled ? "" : "noopener"}"
          class="purchase-card ${link.disabled ? "disabled-card" : ""}"
          ${link.disabled ? 'onclick="return false;"' : ""}
        >
          <span class="purchase-icon">${link.icon}</span>
          <span class="purchase-title">${link.title}</span>
          <span class="purchase-sub">${link.subtitle}</span>

          ${
            link.disabled
              ? '<span class="unavailable-badge">Not Available Yet</span>'
              : ""
          }
        </a>
      `
        )
        .join("")}
    </div>

    <!-- table of contents -->
    <div class="toc-full">

      <div style="font-size:1.2rem;font-weight:480;margin-bottom:0.5rem">
        Table of Contents
      </div>

      <div style="color:#6b6b6b;font-size:0.9rem;margin-bottom:1rem">
        32 fragments · 4 parts
      </div>

      <div class="toc-grid">
        ${bookData.parts
          .map(
            (part) => `
          <div class="toc-part">
            <h3>${part.part}</h3>
            <ul>
              ${part.poems.map((poem) => `<li>${poem}</li>`).join("")}
            </ul>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="toc-footer">
        <span>Closing · About the Author</span>
      </div>

    </div>

    <!-- outro -->
    <div class="outro-card">
      <p>“${bookData.outro}”</p>
      <div class="attribution">— closing</div>
    </div>

    <!-- action -->
    <div class="action-row" id="action-row">
      <a href="#purchase-books" class="btn-primary">Buy the Book →</a>

      <a href="https://www.goodreads.com/book/show/249524075-ache" class="btn-secondary" target="_blank" rel="noopener">
        ⭐ Goodreads
      </a>
    </div>

    <!-- footer -->
    <div class="footer">
      © 2026 ${bookData.author} · ${bookData.title}: ${bookData.subtitle} ·
      <a href="https://flagodna.com" target="_blank" rel="noopener">FlagoDNA</a>
    </div>

  </div>
`;
