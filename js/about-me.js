document.addEventListener("DOMContentLoaded", () => {
  const aboutMeCard = document.getElementById("aboutMe");
  const aboutMeContent = document.getElementById("aboutMeContent");
  const closeAboutMeBtn = document.getElementById("closeAboutMe");
  const aboutMeText = document.getElementById("aboutMeText");
  const aboutMeTitle = document.querySelector("#aboutMeContent .card-title");
  const backButtonAboutMe = document.getElementById("back-button-about-me");

  aboutMeCard.addEventListener("click", () => {
    document.querySelector("main").classList.add("hidden");
    aboutMeContent.classList.remove("hidden");

    const idioma = localStorage.getItem("idiomaSeleccionado") || "en";
    const filePath = `./../languages/${idioma}/about-me.json`;

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`No se pudo cargar ${filePath}`);
        }
        return response.json();
      })
      .then((data) => {
        const { title, paragraphs, back } = data.about_me;

        if (backButtonAboutMe) {
          backButtonAboutMe.textContent = back;
        }

        aboutMeTitle.textContent = title;
        aboutMeText.innerHTML = paragraphs.map((p) => `<p>${p}</p>`).join("");
      })
      .catch((error) => {
        aboutMeText.textContent = "Error loading content.";
        console.error("Error loading about-me.json:", error);
      });
  });

  if (backButtonAboutMe) {
    backButtonAboutMe.addEventListener("click", () => {
      aboutMeContent.classList.add("hidden");
      document.querySelector("main").classList.remove("hidden");
    });
  }
});
