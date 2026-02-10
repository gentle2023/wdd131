document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize or increment the review counter
    let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;
    
      reviewCount++;
    
    // 2. Store the updated count back to localStorage
    window.localStorage.setItem("reviewCount-ls", reviewCount);

    // 3. Display the count in the HTML
    const countDisplay = document.querySelector("#review-count");
    if (countDisplay) {
        countDisplay.textContent = reviewCount;
    }

    // 4. Handle Footer Dates (Consistency across site)
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    
    const modSpan = document.getElementById("lastModified");
    if (modSpan) modSpan.textContent = document.lastModified;
});
