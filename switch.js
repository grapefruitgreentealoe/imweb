const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function switchTheme(e) {
  let postcards = document.querySelector(".postcards");
  let postcard = document.querySelectorAll(".postcards .postcard");
  let modal_content = document.querySelector(".modal-content");
  let navbar = document.querySelector(".navbar");
  let menu = document.querySelectorAll(".navbar .menu h3");

  postcards.classList.toggle("postcards-dark-mode");
  postcard.forEach((x) => x.classList.toggle("postcard-dark-mode"));
  modal_content.classList.toggle("postcard-dark-mode");
  navbar.classList.toggle("navbar-dark-mode");
  menu.forEach((x) => x.classList.toggle("navbar-dark-mode"));

}

toggleSwitch.addEventListener("change", switchTheme, false);
