// Set last modified date

document.getElementById("currentyear").textContent =
    new Date().getFullYear();

document.getElementById("lastModified").innerHTML =
    "Last Modified: " + document.lastModified;



// Select all images with the data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");


const imgOptions = {
    threshold: 0.1, 
    rootMargin: "0px 0px 200px 0px" 
};

const loadImages = (image) => {
    const src = image.getAttribute("data-src");
    if (!src) return;

    image.src = src;
    image.onload = () => {
        image.classList.add("loaded"); 
    };
};


if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}