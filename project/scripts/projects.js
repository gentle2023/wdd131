const projects = [
  {
    title: "Responsive Landing Page",
    image: "images/project1.webp",
    description: "A mobile-first landing page using HTML and CSS."
  },
  {
    title: "A responsive Country Page",
    image: "images/project2.webp",
    description: "A responsive country information page."
  },
  {
    title: "A page showing favourite Temples",
    image: "images/project3.webp",
    description: "A dynamic portal using localStorage."
  },
  {
    title: "A Rafting Company Website",
    image: "images/project4.webp",
    description: "A responsive website for a rafting company."
  },
  {
    title: "A page showing favourite Temples",
    image: "images/project5.webp",
    description: "A dynamic portal using localStorage."
  },
  {
    title: "A Product Review Page",
    image: "images/project6.webp",
    description: "A dynamic portal using localStorage."
  }
];

// Load projects dynamically
function displayProjects() {
  const container = document.querySelector("#projects");
  if (!container) return;

  container.innerHTML = projects.map(project => `
    <article class="project-card">
      <img 
        src="${project.image}" 
        alt="${project.title}" 
        loading="lazy">
      <div>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
      </div>
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
