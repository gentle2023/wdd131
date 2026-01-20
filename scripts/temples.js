// Footer: current year and last modified date
const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

lastModifiedSpan.textContent = document.lastModified;

// Hamburger menu
const hamburgerBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector("nav");

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    if (hamburgerBtn.textContent === "☰") {
        hamburgerBtn.textContent = "✖";
    } else {
        hamburgerBtn.textContent = "☰";
    }
});
