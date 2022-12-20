// Get the button that will open the modal
const openModalButton = document.getElementById("openModalButton");

// Get the modal
const imageModal = document.getElementById("imageModal");

// Get the close button
const closeModalButton = document.getElementById("closeModalButton");

// When the user clicks the button, open the modal
openModalButton.addEventListener("click", function() {
  imageModal.style.display = "block";
});

// When the user clicks the close button, close the modal
closeModalButton.addEventListener("click", function() {
  imageModal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == imageModal) {
    imageModal.style.display = "none";
  }
});
