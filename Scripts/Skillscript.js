const navBar = document.querySelector("#navbar");
const hamburgerMenu = document.querySelector(".fa-solid");
const closeMenu = document.querySelector(".closeMenu");

hamburgerMenu.onclick = function () {
    navBar.style.width = "250px";
}

closeMenu.onclick = function () {
    navBar.style.width = "0px";
}

const outOfTen = document.querySelectorAll(".outoften");
const skill = outOfTen.parentElement
console.log(skill)
const SkillNumber = outOfTen.textconent
// console.log(SkillNumber.text)
const skillBar = document.querySelectorAll(".skills");

for(value of outOfTen) {
    const theValue = value.innerHTML
    console.log(value.innerHTML)  
    
    console.log(skill)
    {
        if (theValue == '9') {
            skillChart.style.width = "90%"
            console.log("great!")
        } else if (theValue == 8) {
            skillChart.style.width = "80%"
            console.log("good")
        } else if (theValue == 7) {
            skillChart.style.width = "70%"
        } else if (theValue == 6) {
            skillChart.style.width = "60%"
        } else if (theValue == 5) {
            skillChart.style.width = "50%"
        } else if (theValue == 4) {
            skillChart.style.width = "40%"
        } else if (theValue == 3) {
            skillChart.style.width = "30%"
        } else if (theValue == 2) {
            skillChart.style.width = "20%"
        } else if (theValue == 1) {
            skillChart.style.width = "10%"
        } else {
            console.log(theValue)
            console.log(skillChart)
            outOfTen.innerHTML = "Skill not found"
            skillBar.style.width = "100%"
            skillBar.style.background = "red"
            console.log("Boo!")
        }
    }
    
};
