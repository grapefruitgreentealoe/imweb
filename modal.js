const span = document.querySelector(".modal-content .close");

span.onclick = function () {
  modal.style.display = "none";
  content.innerHTML = "";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    content.innerHTML = "";
  }
};
