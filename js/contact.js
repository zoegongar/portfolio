document.getElementById('contact').addEventListener('click', () => {
    // 1. Vacía el texto de todas las cartas (las que tengan .text-playing-cards)
    document.querySelectorAll('.text-playing-cards').forEach(el => {
      el.textContent = '';
    });
  
    // 2. Rellena solo la carta 'Contact' con los datos
    const contactCard = document.getElementById('contact');
    contactCard.innerHTML = `
      <div class="text-playing-cards">
        <ul class="contact-info-list">
          <li><a href="mailto:zoe@example.com">Email</a></li>
          <li><a href="https://linkedin.com/in/zoegongar" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/zoegongar" target="_blank">GitHub</a></li>
        </ul>
      </div>
    `;
  });
  