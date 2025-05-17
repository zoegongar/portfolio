import { clearCardContent } from './../../js/components.js';
import { renderContactSection } from './contact.js';



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

