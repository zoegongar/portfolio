export function renderContactSection() {
    const mainContent = document.querySelector('.main-content'); // Ajusta según tu HTML
    if (!mainContent) return;
  console.log("estoy en contact");
    mainContent.innerHTML = `
      <div class="contact-deck">
       <div class="upper-cards">
        <div class="playing-card interactive-card" >
          <div id="aboutMe" class="text-playing-cards">LinkedIn</div>
        </div>
        <div class="playing-card interactive-card" >
          <h2 id="contact" class="text-playing-cards">GitHub</h2>
        </div>
        <div class="playing-card interactive-card" >
          <h2 id="cv" class="text-playing-cards">E-mail</h2>
        </div>
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
          <h2 id="tutorials" class="text-playing-cards">Back to main</h2>
        </div>
        <div class="playing-card naipe-card">
          <h2 id="projects" class="text-playing-cards">Exit</h2>
        </div>
      </div>
      </div>
    `;
  }
  