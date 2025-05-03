document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('idiomaSeleccionado') || 'en'; // Obtener idioma seleccionado (por defecto 'en')
  
    const wipCards = ['projects', 'tutorials', 'contact', 'cv']; // Las cartas a las que se les asignará el evento de clic
    const workInProgressSection = document.getElementById('work-in-progress');
    const backBtn = document.getElementById('back-btn-progress');
  
    // Agregar evento a las cartas
    wipCards.forEach(id => {
        const card = document.getElementById(id);
        if (card) {
            card.addEventListener('click', async () => {
                // Ocultamos las cartas principales
                document.querySelector('main').classList.add('hidden'); 
                workInProgressSection.classList.remove('hidden'); // Mostrar sección "Work in Progress"
                
                // Cargar el contenido del JSON para "Work in Progress"
                await loadWorkingProgressContent(lang); // Cargar el contenido del JSON
            });
        }
    });
  
    // Evento para el botón "Back"
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            // Ocultamos la sección "Work in Progress" y volvemos a mostrar las cartas principales
            workInProgressSection.classList.add('hidden');
            document.querySelector('main').classList.remove('hidden');
        });
    }
});

// Función para cargar el contenido del JSON
async function loadWorkingProgressContent(lang) {
    try {
        // Cargar el archivo JSON basado en el idioma seleccionado
        const response = await fetch(`./../languages/${lang}/work-in-progress.json`);
        const data = await response.json();
        
        // Mostrar contenido de la sección "Work in Progress"
        const wipContent = document.getElementById('wip-content');
        wipContent.innerHTML = `
            
            <h2>${data.work_in_progress}</h2>
            <p>${data.contact_note}</p>
        `;
        
        // Cambiar el texto del botón "Back"
        const backBtn = document.getElementById('back-btn-progress');
        if (backBtn) {
            backBtn.textContent = data.back;  // Cambiar el texto del botón "Back"
        }
    } catch (error) {
        console.error('Error cargando el contenido de Work in Progress:', error);
    }
}
