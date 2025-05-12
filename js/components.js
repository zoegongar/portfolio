// components.js

// Función para cambiar el contenido de las cartas
function changeCardContent(cardId, newContent) {
    const card = document.getElementById(cardId);
    if (card) {
      card.querySelector('.text-playing-cards').innerHTML = newContent; // Cambia el texto dentro de la carta
    }
  }
  
  // Función para cargar el contenido desde un JSON
  function loadCardContent(language) {
    const jsonPath = `./languages/${language}/content.json`; // Ruta del JSON del idioma
    fetch(jsonPath)
      .then(response => response.json())
      .then(data => {
        // Actualiza cada carta con el contenido del JSON
        for (const [cardId, content] of Object.entries(data.cards)) {
          changeCardContent(cardId, content);
        }
      })
      .catch(error => console.error("Error loading JSON:", error));
  }
  
// components.js

// Función para borrar el contenido de las cartas
function clearCardContent() {
  console.log('Borrando contenido de las cartas'); // Verifica que se llame
  const cards = document.querySelectorAll('.text-playing-cards');
  cards.forEach(card => {
    card.innerHTML = '';  // Borra el contenido de las cartas
  });
}

// Función para inicializar los event listeners
function init() {
  console.log('Inicializando event listeners');
  const contactButton = document.getElementById('contact');  // Actualizado al nuevo ID
  if (contactButton) {
    console.log('Botón "Contact Me" encontrado');
    contactButton.addEventListener('click', function() {
      console.log('Clic en "Contact Me" detectado');
      clearCardContent();  // Borra el contenido de las cartas
    });
  } else {
    console.log('Botón "Contact Me" no encontrado');
  }
}

// Exportar la función init() para que pueda ser llamada en otros archivos
export { init };
