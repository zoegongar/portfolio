import { clearCardContent } from './../../js/components.js';
import { renderContactSection } from './contact.js';
import { setupGlobalNavigation } from './../../js/components.js';


document.addEventListener('DOMContentLoaded', () => {
  const contactCard = document.getElementById('contact');
  if (contactCard) {
    contactCard.addEventListener('click', () => {
      clearCardContent();
      console.log('Contenido de las cartas borrado desde Contact');
      renderContactSection();
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('.main-content');
    const originalMainHTML = mainContent.innerHTML;
  
    // Configura navegación global
    setupGlobalNavigation(originalMainHTML);
  
    // Listener para cargar sección Contact
    const contactCard = document.getElementById('contact');
    if (contactCard) {
      contactCard.addEventListener('click', () => {
        renderContactSection();
      });
    }
  });

  // En main.js
const mainContent = document.querySelector('.main-content');
export const originalMainClone = mainContent.cloneNode(true);

