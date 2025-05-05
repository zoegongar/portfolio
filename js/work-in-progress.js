document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("idiomaSeleccionado") || "en";

  const wipCards = ["projects", "tutorials", "contact", "cv"];
  const workInProgressSection = document.getElementById("work-in-progress");
  const backBtn = document.getElementById("back-btn-progress");

  wipCards.forEach((id) => {
    const card = document.getElementById(id);
    if (card) {
      card.addEventListener("click", async () => {
        document.querySelector("main").classList.add("hidden");
        workInProgressSection.classList.remove("hidden");

        await loadWorkingProgressContent(lang);
      });
    }
  });

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      workInProgressSection.classList.add("hidden");
      document.querySelector("main").classList.remove("hidden");
    });
  }
});

async function loadWorkingProgressContent(lang) {
  try {
    const response = await fetch(
      `./../languages/${lang}/work-in-progress.json`
    );
    const data = await response.json();

    const wipContent = document.getElementById("wip-content");
    wipContent.innerHTML = `
            <h2>${data.work_in_progress}</h2>
            <p>${data.contact_note}</p> <!-- Aquí se inserta el correo con HTML -->
        `;

    const backBtn = document.getElementById("back-btn-progress");
    if (backBtn) {
      backBtn.textContent = data.back;
    }
  } catch (error) {
    console.error("Error cargando el contenido de Work in Progress:", error);
  }
}
