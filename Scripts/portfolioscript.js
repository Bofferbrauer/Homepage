const navBar = document.querySelector("#navbar");
const hamburgerMenu = document.querySelector(".fa-solid")
const closeMenu = document.querySelector(".closeMenu")

hamburgerMenu.onclick = function () {
    navBar.style.width = "250px"
}

closeMenu.onclick = function () {
    navBar.style.width = "0px"
}