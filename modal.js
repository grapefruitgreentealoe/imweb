// Get the modal

// Get the <span> element that closes the modal
const span = document.querySelector(".modal-content .close");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  content.innerHTML = "";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    content.innerHTML = "";
  }
};
