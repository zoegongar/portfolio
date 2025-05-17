export function renderContactSection() {
    const mainContent = document.querySelector('.main-content'); // Ajusta según tu HTML
    if (!mainContent) return;
    mainContent.innerHTML = `
      <div class="contact-deck">
       <div class="upper-cards">
        <a href="https://www.linkedin.com/in/zoe-gonzalez-garcia/" target="_blank" class="playing-card interactive-card">
            <h2 class="text-playing-cards" data-i18n="contact.linkedIn">LinkedIn</h2>
        </a>

        <a href="https://github.com/zoegongar" target="_blank" class="playing-card interactive-card" >
          <h2 id="contact" class="text-playing-cards">GitHub</h2>
        </a>
        <a href='mailto:zoegonzalezgarcia@gmail.com' class="playing-card interactive-card" >
          <h2 id="cv" class="text-playing-cards">E-mail</h2>
        </a>
      </div>
      <div class="middle-cards">
        <div class="playing-card naipe-card" >
          <h2 id="playing-card-back" class="text-playing-cards">Contact</h2>
        </div>
        <div class="playing-card location-indicator">
          <h2 id="settings" class="text-playing-cards">Settings</h2>
        </div>
      </div>
      <div class="bottom-cards">
        <div class="playing-card naipe-card">
          <h2 id="backToMain" class="text-playing-cards">Back to main</h2>
        </div>
        <div class="playing-card naipe-card">
          <h2 id="exit" class="text-playing-cards">Exit</h2>
        </div>
      </div>
      </div>
    `;
  }
  