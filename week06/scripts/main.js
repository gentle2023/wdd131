// main.js

// Set current year in footer
const yearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Set last modified date in footer
const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Example: Dynamic greeting based on time of day
function displayGreeting() {
    const h1 = document.querySelector('main h1');
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning, welcome to my portfolio!";
    } else if (hour < 18) {
        greeting = "Good afternoon, welcome to my portfolio!";
    } else {
        greeting = "Good evening, welcome to my portfolio!";
    }

    h1.textContent = greeting;
}


displayGreeting();
