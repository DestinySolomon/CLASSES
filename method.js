// Grab the buttons from the HTML
const addBtn = document.getElementById("addItem");
const removeBtn = document.getElementById("removeItem");

// Grab the container div
const box = document.getElementById("box");

// This will hold the element we create
let message;

// Event listener for add button
addBtn.addEventListener("click", () => {

  // Create a new paragraph element
  message = document.createElement("p");

  // Add text inside the paragraph
  message.textContent = "Hello 👋 I was created with JavaScript";

  // Add the paragraph into the div
  box.appendChild(message);
});

// Event listener for remove button

removeBtn.addEventListener("click", () => {
  if (box.lastElementChild) {
    box.lastElementChild.remove();
  }
});

