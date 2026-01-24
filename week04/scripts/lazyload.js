// Set last modified date

document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").innerHTML =
    "Last Modified: " + document.lastModified;


// Optional JS enhancement for fade-in when the image actually enters viewport
const images = document.querySelectorAll('.fade-img');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; 
      img.style.opacity = 1; 
      observer.unobserve(img); 
    }
  });
}, {
  rootMargin: '0px 0px 50px 0px',
  threshold: 0.1
});

images.forEach(img => {
  observer.observe(img);
});
