const navBar = document.querySelector("#navbar");
const hamburgerMenu = document.querySelector(".fa-solid");
const closeMenu = document.querySelector(".closeMenu");

hamburgerMenu.onclick = function () {
    navBar.style.width = "250px";
    hamburgerMenu.style.display = "none"
}

closeMenu.onclick = function () {
    navBar.style.width = "0px";
    hamburgerMenu.style.display = "block"
}


// ? I can't get this to work correctly right now to automate the skilcharts, so they'll be coded manually in the interim
// const outOfTen = document.querySelectorAll(".outoften");
// console.log(outOfTen.values())
// console.log(outOfTen)

// for(const SkillNode of outOfTen) {
//     console.log(SkillNode)
//     const SkillNumber = SkillNode.firstChild.data
//     console.log(SkillNumber)

//     const skillBars = document.querySelectorAll(".skills");
//     console.log(skillBars)
//     for(const skillBar in skillBars.values()) {
//         console.log(skillBar)
//         function Skill(skillBar, SkillNumber) {
//              if (SkillNumber == '9') {
//                 skillBar.style.width = "90%"
//                 console.log(SkillNumber)
//                 console.log("great!")
//             } else if (SkillNumber == 8) {
//                 outOfTen.style.width = "80%"
//                 console.log(SkillNumber)
//                 console.log("good")
//             } else if (SkillNumber == 7) {
//                 outOfTen.style.width = "70%"
//                 console.log(SkillNumber)
//             } else if (SkillNumber == 6) {
//                 outOfTen.style.width = "60%"
//             } else if (SkillNumber == 5) {
//                 outOfTen.style.width = "50%"
//             } else if (SkillNumber == 4) {
//                 outOfTen.style.width = "40%"
//             } else if (SkillNumber == 3) {
//                 outOfTen.style.width = "30%"
//             } else if (SkillNumber == 2) {
//                 outOfTen.style.width = "20%"
//             } else if (SkillNumber == 1) {
//                 outOfTent.style.width = "10%"
//             } else {
//                 console.log(SkillNumber)
//                 console.log(outOfTen)
//                 outOfTen.innerHTML = "Skill not found"
//                 outOfTen.style.width = "100%"
//                 outOfTen.style.background = "red"
//                 console.log("Boo!")
//             };
//         }
//     }
// }

// console.log(SkillNumber.text)
// const skillBar = document.querySelectorAll(".skills");

// if (SkillNumber == '9') {
//     outOfTen.style.width = "90%"
//     console.log(SkillNumber)
//     console.log("great!")
// } else if (SkillNumber == 8) {
//     outOfTen.style.width = "80%"
//     console.log(SkillNumber)
//     console.log("good")
// } else if (SkillNumber == 7) {
//     outOfTen.style.width = "70%"
//     console.log(SkillNumber)
// } else if (SkillNumber == 6) {
//     outOfTen.style.width = "60%"
// } else if (SkillNumber == 5) {
//     outOfTen.style.width = "50%"
// } else if (SkillNumber == 4) {
//     outOfTen.style.width = "40%"
// } else if (SkillNumber == 3) {
//     outOfTen.style.width = "30%"
// } else if (SkillNumber == 2) {
//     outOfTen.style.width = "20%"
// } else if (SkillNumber == 1) {
//     outOfTent.style.width = "10%"
// } else {
//     console.log(SkillNumber)
//     console.log(outOfTen)
//     outOfTen.innerHTML = "Skill not found"
//     outOfTen.style.width = "100%"
//     outOfTen.style.background = "red"
//     console.log("Boo!")
// };
