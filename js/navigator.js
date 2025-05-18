const cardToSection = {

    contact: '../sections/contact-fragment.html',
 
    // añade más si quieres
  };
  
  function hideAllSections() {
    document.getElementById('dynamic-content').classList.add('hidden');
    document.getElementById('dynamic-content').innerHTML = '';
    document.getElementById('aboutMeContent').classList.add('hidden');
    document.getElementById('work-in-progress').classList.add('hidden');
    // oculta otras secciones que tengas abiertas si es necesario
  }
  
  function addBackEvent(section) {
    // Busca el botón "Back" dentro de dynamic-content y le añade listener para ocultar
    const backBtn = document.querySelector('#dynamic-content .button, #dynamic-content #back-button-contact, #dynamic-content #back-button-about-me');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        hideAllSections();
      });
    }
  }
  
  document.querySelectorAll('.interactive-card').forEach(card => {
    card.addEventListener('click', () => {
      const filePath = cardToSection[card.id];
      if (filePath) {
        fetch(filePath)
          .then(res => {
            if (!res.ok) throw new Error('Error cargando el fragmento');
            return res.text();
          })
          .then(html => {
            hideAllSections();
            const dynamicContent = document.getElementById('dynamic-content');
            dynamicContent.innerHTML = html;
            dynamicContent.classList.remove('hidden');
            addBackEvent();
          })
          .catch(err => {
            console.error(err);
            alert('Error cargando la sección.');
          });
      } 
    });
  });
  