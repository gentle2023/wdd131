// Product array 
const products = [
  {id: "fc-1888", name: "flux capacitor", averagerating: 4.5},
  {id: "fc-2050", name: "power laces", averagerating: 4.7},
  {id: "fs-1987", name: "time circuits", averagerating: 3.5},
  {id: "ac-2000", name: "low voltage reactor", averagerating: 3.9},
  {id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product-name");

  // Dynamically populate the select element
  if (productSelect) {
    products.forEach((product) => {
      const option = document.createElement("option");
      // Requirements: value attribute must be the product name
      option.value = product.name; 
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  // Handle Footer Year
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  
  // Handle Last Modified Date
  const modSpan = document.getElementById("lastModified");
  if (modSpan) {
    modSpan.textContent = document.lastModified;
  }
});
