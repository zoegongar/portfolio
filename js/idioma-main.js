document.addEventListener("DOMContentLoaded", () => {
    const idioma = localStorage.getItem('idiomaSeleccionado') || 'es';
    
  
    const textos = {
      es: {
        aboutMe: "Sobre<br/>mí",
        contact: "Contacto",
        cv: "CV",
        main: "Principal",
        settings: "Ajustes",
        tutorials: "Tutoriales",
        projects: "Proyectos"
      },
      en: {
        aboutMe: "About<br/>Me",
        contact: "Contact",
        cv: "CV",
        main: "Main",
        settings: "Settings",
        tutorials: "Tutorials",
        projects: "Projects"
      }
    };
  
    const t = textos[idioma];
  
    document.getElementById('aboutMe').innerHTML = t.aboutMe;
    document.getElementById('contact').textContent = t.contact;
    document.getElementById('cv').textContent = t.cv;
    document.getElementById('playing-card-back').textContent = t.main;
    document.getElementById('settings').textContent = t.settings;
    document.getElementById('tutorials').textContent = t.tutorials;
    document.getElementById('projects').textContent = t.projects;
  });
  