// Footer: current year and last modified date
const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

lastModifiedSpan.textContent = document.lastModified;