const modal = document.querySelector("#CVModal");
const button = document.querySelector("#CVpopup");
const toClose = document.querySelector(".close");

button.onclick = function () {
    modal.style.display = "block";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
toClose.onclick = function () {
    modal.style.display = "none";
}