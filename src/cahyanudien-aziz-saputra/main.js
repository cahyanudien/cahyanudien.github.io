import "../style.css";
import { schemaData } from "./data/schema.js";
import { profile } from "./data/profile.js";

/* ----------------- Inject JSON-LD for SEO ----------------- */
if (Array.isArray(schemaData)) {
  schemaData.forEach((schema) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

/* ----------------- Render TOC ----------------- */
const renderTOC = (sections) => {
  if (!sections) return "";

  const tocItems = sections.map((section, index) => {
    return `<li><a href="#section-${index}">${section.title}</a></li>`;
  });

  return `
    <nav class="toc" aria-label="Table of Contents">
      <h2>Contents</h2>
      <ul>
        ${tocItems.join("")}
      </ul>
    </nav>
  `;
};

/* ----------------- Render Sections & Subsections ----------------- */
const renderSections = (sections) => {
  if (!sections) return "";

  return sections
    .map((section, index) => {
      const sectionId = `section-${index}`;
      const paragraphs = section.paragraphs
        ? section.paragraphs.map((p) => `<p>${p}</p>`).join("")
        : "";

      const subSections = section.subSections
        ? section.subSections
            .map(
              (sub, subIndex) => `
          <section id="${sectionId}-sub-${subIndex}">
            <h3>${sub.title}</h3>
            ${
              sub.paragraphs
                ? sub.paragraphs.map((p) => `<p>${p}</p>`).join("")
                : ""
            }
          </section>
        `
            )
            .join("")
        : "";

      return `
      <section id="${sectionId}" class="profile-section">
        <h2>${section.title}</h2>
        ${paragraphs}
        ${subSections}
      </section>
      <div class="divider-light"></div>
    `;
    })
    .join("");
};

/* ----------------- Lazy load avatar ----------------- */
const createAvatar = (src, fallback, alt) => {
  const img = document.createElement("img");
  img.className = "avatar";
  img.setAttribute("alt", alt);
  img.setAttribute("loading", "lazy");
  img.src = src;
  img.onerror = () => (img.src = fallback);
  return img;
};

/* ----------------- FAB Button ----------------- */
const createFAB = () => {
  const fab = document.createElement("button");
  fab.className = "fab-scroll-toc";
  fab.innerHTML = "▲"; // icon for TOC
  fab.title = "Scroll to Table of Contents";
  fab.addEventListener("click", () => {
    const toc = document.querySelector(".toc");
    if (toc) toc.scrollIntoView({ behavior: "smooth" });
  });
  document.body.appendChild(fab);
};

/* ----------------- Highlight active section in TOC ----------------- */
const initTOCHighlight = () => {
  const tocLinks = document.querySelectorAll(".toc a");
  const sections = Array.from(tocLinks).map((link) => {
    const id = link.getAttribute("href").replace("#", "");
    return document.getElementById(id);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = sections.indexOf(entry.target);
        if (index >= 0) {
          tocLinks[index].classList.toggle("active", entry.isIntersecting);
        }
      });
    },
    { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => {
    if (section) observer.observe(section);
  });
};

/* ----------------- Main DOMContentLoaded ----------------- */
document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");
  if (!app) return console.error("#app element not found!");

  app.innerHTML = `
    <div class="container">
      <!-- Top Bar -->
      <div class="top-bar">
        <div class="back-home">
          <a href="../">← Cahyanudien</a>
        </div>
      </div>

      <!-- Table of Contents -->
      ${renderTOC(profile.sections)}

      <!-- Profile Article -->
      <article class="seo-article">
        <header class="profile-row">
          <div class="avatar-wrapper"></div>
          <div class="identity">
            <h1>${profile.name}</h1>
            <div class="tagline">${profile.tagline}</div>
          </div>
        </header>

        <div class="divider-light"></div>

        <!-- Render all sections -->
        ${renderSections(profile.sections)}

        <footer class="seo-footer">
          <p>© ${profile.copyrightYear} ${profile.name}</p>
        </footer>
      </article>
    </div>
  `;

  // Add avatar dynamically
  const avatarContainer = document.querySelector(".avatar-wrapper");
  if (avatarContainer) {
    avatarContainer.appendChild(
      createAvatar(profile.avatar, profile.avatarFallback, profile.name)
    );
  }

  // Initialize FAB
  createFAB();

  // Init TOC highlight
  initTOCHighlight();
});
