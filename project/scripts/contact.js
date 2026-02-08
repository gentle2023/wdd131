const form = document.querySelector("#contactForm");
const contactPage = document.querySelector("#contactPage");
const thankYouPage = document.querySelector("#thankYouPage");
const backBtn = document.querySelector("#backBtn");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  contactPage.classList.add("hidden");
  thankYouPage.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  thankYouPage.classList.add("hidden");
  contactPage.classList.remove("hidden");
});


 // Handle Footer Dates
  const yearElement = document.getElementById('currentyear');
  const lastModifiedElement = document.getElementById('lastModified');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
  }