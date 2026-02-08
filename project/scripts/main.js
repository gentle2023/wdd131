// =========================
// DOM CONTENT LOADED
// =========================
document.addEventListener('DOMContentLoaded', () => {

  // -------------------------
  // Mobile Navigation
  // -------------------------
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const body = document.body;

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when a link is clicked
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = 'auto';
      });
    });
  }

  // -------------------------
  // Footer Dates
  // -------------------------
  const yearElement = document.getElementById('currentyear');
  const lastModifiedElement = document.getElementById('lastModified');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
  }

  // -------------------------
  // Initialize Dynamic Pages
  // -------------------------
  displayResources();
  displayReferences();
});


// =========================
// DATA ARRAYS
// =========================

const resourceGrid = [
  {
    title: "MDN Web Docs",
    description: "Comprehensive documentation for HTML, CSS, JavaScript, and web APIs.",
    url: "https://developer.mozilla.org"
  },
  {
    title: "W3Schools",
    description: "Interactive tutorials and references for web development beginners.",
    url: "https://www.w3schools.com"
  },
  {
    title: "freeCodeCamp",
    description: "Free lessons and hands-on coding challenges for web developers.",
    url: "https://www.freecodecamp.org"
  },
  {
    title: "CSS-Tricks",
    description: "Helpful articles and guides on modern CSS techniques.",
    url: "https://css-tricks.com"
  },
    {
    title: "Frontend Mentor",
    description: "Real-world frontend challenges to improve coding skills.",
    url: "https://www.frontendmentor.io"
  },
    {
    title: "CodePen",
    description: "A platform for front-end developers to create, share, and collaborate on web projects.",
    url: "https://codepen.io"
  },
    {
    title: "Grid by Example",
    description: "Helpful articles and guides on modern CSS techniques.",
    url: "https://gridbyexample.com"
  },
    {
    title: "Codecademy",
    description: "Interactive coding lessons and tutorials for web development.",
    url: "https://www.codecademy.com"
  },
    {
    title: "JavaScript 30",
    description: "30 days of JavaScript challenges to improve coding skills.",
    url: "https://javascript30.com"
  }
];

const referenceGrid = [
  {
    title: "HTML & CSS: Design and Build Websites",
    author: "Jon Duckett",
    description: "A beginner-friendly guide to HTML and CSS fundamentals."
  },
  {
    title: "JavaScript & jQuery",
    author: "Jon Duckett",
    description: "Explains JavaScript concepts with practical examples."
  },
  {
    title: "MDN Web Docs",
    author: "Mozilla",
    description: "Official reference for web standards and best practices."
  },
  {
    title: "W3Schools",
    author: "W3Schools",
    description: "Interactive tutorials and references for web development beginners."
  },
   {
    title: "JavaScript For Beginners",
    author: "Stephen Blumenthal",
    description: " Learn JavaScript Programming with ease in HALF THE TIME."
  },
   {
    title: "HTML, CSS, & JavaScript All-in-One For Dummies",
    author: "Paul McFedries",
    description: "A thorough and helpful reference for aspiring website builders Looking to start an exciting new career in front-end web building and design."
  }
];


// =========================
// DISPLAY FUNCTIONS
// =========================

function displayResources() {
  const container = document.getElementById('resourceGrid');
  if (!container) return;

  container.innerHTML = resourceGrid
    .map(resource => `
      <article class="resource-card">
        <a href="${resource.url}" target="_blank" rel="noopener noreferrer">
          <h2>${resource.title}</h2>
          <p>${resource.description}</p>
        </a>
      </article>
    `)
    .join('');
}

function displayReferences() {
  const container = document.getElementById('referenceGrid');
  if (!container) return;

  container.innerHTML = referenceGrid
    .map(reference => `
      <article class="reference-card">
        <h2>${reference.title}</h2>
        <p><strong>Author:</strong> ${reference.author}</p>
        <p>${reference.description}</p>
      </article>
    `)
    .join('');
}
