export function renderContactSection() {
    const mainContent = document.querySelector('.main-content'); // Ajusta según tu HTML
    if (!mainContent) return;
  console.log("estoy en contact");
    mainContent.innerHTML = `
      <div class="contact-deck">
        <div class="playing-card interactive-card">
          <h2 id="linkedIn" class="text-playing-cards" data-i18n="contact.linkedIn">LinkedIn</h2>
        </div>
        <div class="playing-card interactive-card" id="github">
          <h2 class="text-playing-cards" data-i18n="contact.github">GitHub</h2>
        </div>
        <div class="playing-card interactive-card" id="email">
          <h2 class="text-playing-cards" data-i18n="contact.email">Email</h2>
        </div>
        <div class="middle-cards">
        <div class="playing-card naipe-card" >
          <h2 id="playing-card-back" class="text-playing-cards">Contact</h2>
        </div>
        <div class="playing-card interactive-card" id="settings">
          <h2 class="text-playing-cards" data-i18n="contact.settings">Settings</h2>
        </div>
        <div class="playing-card interactive-card" id="backToMain">
          <h2 class="text-playing-cards" data-i18n="contact.backToMain">Back to Main</h2>
        </div>
        <div class="playing-card interactive-card" id="exit">
          <h2 class="text-playing-cards" data-i18n="contact.exit">Exit</h2>
        </div>
      </div>
    `;
  }
  