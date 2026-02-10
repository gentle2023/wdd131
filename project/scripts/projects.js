const projects = [
  {
    title: "Responsive Landing Page",
    image: "images/web1.png",
    description: "A mobile-first landing page of my Journey in WDD 131 using HTML and CSS.",
    url: "https://gentle2023.github.io/wdd131/"
  },
  {
    title: "A responsive Country Page",
    image: "images/web3.png",
    description: "A responsive country information page showing information about Abuja and Weather Data.",
    url: "https://gentle2023.github.io/wdd131/place.html"
  },
  {
    title: "A page showing favourite Temples",
    image: "images/web2.png",
    description: "A dynamic Website showing favourite Temples of the Church of Jesus Christ of Latter-day Saints.",
    url: "https://gentle2023.github.io/wdd131/filtered-temples.html"
  },
  {
    title: "A Rafting Company Website",
    image: "images/web5.png",
    description: "A responsive website for a rafting company.",
    url: "https://gentle2023.github.io/wdd130/wwr/"
  },
  {
    title: "A page showing favourite Temples",
    image: "images/web6.png",
    description: "A dynamic portal using localStorage.",
    url: "https://example.com/temples-2"
  },
  {
    title: "A Product Review Page",
    image: "images/web4.png",
    description: "A dynamic Product Review page using localStorage.",
    url: "https://gentle2023.github.io/wdd131/form.html"
  }
];

// Load projects dynamically
function displayProjects() {
  const container = document.querySelector("#projects");
  if (!container) return;

  container.innerHTML = projects.map(project => `
    <article class="project-card">
      <a href="${project.url}" target="_blank" rel="noopener noreferrer">
        <img 
          src="${project.image}" 
          alt="${project.title}" 
          loading="lazy">

        <div class="project-content">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <span class="project-link">View Project →</span>
        </div>
      </a>
    </article>
  `).join("");
}

// Contact form handling with localStorage
function handleForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const feedback = document.querySelector("#formFeedback");

    if (name && email && message) {
      const submission = { name, email, message };
      localStorage.setItem("contactSubmission", JSON.stringify(submission));

      feedback.textContent = `Thank you, ${name}! Your message has been saved.`;
      form.reset();
    } else {
      feedback.textContent = "Please complete all fields before submitting.";
    }
  });
}

// Initialize page features
displayProjects();
handleForm();

  // Handle Footer Dates
  const yearElement = document.getElementById('currentyear');
  const lastModifiedElement = document.getElementById('lastModified');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
  }
