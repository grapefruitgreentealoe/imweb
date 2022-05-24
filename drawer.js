const closebtn = document.querySelector(".sidenav .closebtn");
const openbtn = document.querySelector(".hamburger");
const background = document.querySelector(".sidenav_background");
closebtn.addEventListener("click", closeNav);
openbtn.addEventListener("click", openNav);

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  background.style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  background.style.display = "none";
}
