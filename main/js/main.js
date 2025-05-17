// Mapea el id de la carta con la ruta correcta (desde index.html)

  
  function hideDynamicContent() {
    const dynamicSection = document.getElementById('dynamic-content');
    dynamicSection.classList.add('hidden');
    dynamicSection.innerHTML = '';
  }
  
  function addBackEvent() {
    const backBtn = document.getElementById('back-button-contact');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        hideDynamicContent();
      });
    }
  }
  
  document.querySelectorAll('.interactive-card').forEach(card => {
    card.addEventListener('click', () => {
      const sectionFile = cardToSection[card.id];
      if (sectionFile) {
        fetch(sectionFile)
          .then(res => {
            if (!res.ok) throw new Error(`Error ${res.status}`);
            return res.text();
          })
          .then(html => {
            const dynamicSection = document.getElementById('dynamic-content');
            dynamicSection.innerHTML = html;
            dynamicSection.classList.remove('hidden');
            addBackEvent();
          })
          .catch(err => {
            console.error('Error loading section:', err);
            alert('Sorry, there was a problem loading the section.');
          });
      }
    });
  });
  