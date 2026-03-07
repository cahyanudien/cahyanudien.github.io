import "./style.css";
import { schemaData } from "./data/schema.js";
import { projects, games, books, profiles } from "./data/cards.js";
import { profile } from "./data/profile.js";

// Inject Schema.org JSON-LD
schemaData.forEach((schema) => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
});

// Render app
document.querySelector("#app").innerHTML = `
  <div class="container">
    <!-- Profile -->
    <div class="profile-row">
      <img
        class="avatar"
        src="https://avatars.githubusercontent.com/cas8398"
        alt="Cahyanudien GitHub avatar"
        onerror="this.onerror=null; this.src='https://github.com/identicons/cas8398.png';"
      />
      <div class="identity">
        <h1>${profile.name}</h1>
        <div class="tagline">${profile.tagline}</div>
      </div>
    </div>
    <div class="divider-light"></div>

    <!-- Bio -->
    <div class="bio">
      <p>${profile.bio}</p>
      <p class="small-note">
        ${profile.skills} →
        <a href="${profile.githubUrl}">${profile.githubHandle}</a>
      </p>
    </div>

    <!-- PROJECTS SECTION -->
    <section>
      <h2 class="section-label">📱 PROJECTS</h2>
      <div class="card-grid" id="projects-grid"></div>
    </section>

    <section>
      <h2 class="section-label" style="margin-top: 1.8rem">🎮 GAMES</h2>
      <div class="card-grid" id="games-grid"></div>
    </section>

    <section>
      <h2 class="section-label" style="margin-top: 1.8rem">📚 BOOKS</h2>
      <div class="card-grid" id="books-grid"></div>
    </section>

    <section>
      <h2 class="section-label" style="margin-top: 1.8rem">🆔 PROFILES</h2>
      <div class="card-grid" id="profiles-grid"></div>
    </section>

    <!-- Quote -->
    <div class="quote-block">“${profile.quote}”</div>

    <!-- Footer -->
    <div class="footer-note">
      <span class="linkedin-meta">
        <span>↗</span>
        <a href="${profile.linkedinUrl}" target="_blank" rel="noopener">${profile.linkedinHandle}</a>
      </span>
      <span>© 2026 ${profile.name}</span>
    </div>
  </div>
`;

// Render cards from JSON data
function renderCards(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items
    .map(
      (item) => `
    <a
      href="${item.url}"
      class="card ${item.status === "live" ? "" : "disabled"} ${
        item.target === "same" ? "same-tab" : ""
      }"
      ${
        item.status === "live"
          ? item.target === "same"
            ? 'rel="noopener"'
            : 'target="_blank" rel="noopener"'
          : 'onclick="return false;"'
      }
    >
      <span class="card-title">${item.emoji} ${item.title}</span>
      <span class="card-desc">${item.description}</span>
      <span class="card-link">${item.linkText} →</span>
    </a>
  `
    )
    .join("");
}

// Load all cards
renderCards("projects-grid", projects);
renderCards("games-grid", games);
renderCards("books-grid", books);
renderCards("profiles-grid", profiles);
