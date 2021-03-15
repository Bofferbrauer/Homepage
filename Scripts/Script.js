const modal = document.querySelector("#CVModal");
const button = document.querySelector("#CVpopup");
const toClose = document.querySelector(".close")[0];

button.onclick = function () {
    modal.style.display = "block";
}

// toClose.onclick = function () {
//     modal.style.display = "none";
// }

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}