//when you click the mobile menu toggle, this function will run and reveal the navbar
const toggle = document.querySelector(".hamburger-toggle");
const leftDropDown = document.querySelector(".left-nav-container");
const rightDropDown = document.querySelector(".right-nav-container");
const toggleTop = document.querySelector(".top");
const toggleMiddle = document.querySelector(".middle");
const toggleBottom = document.querySelector(".bottom");

toggle.addEventListener("click", function () {
  if (leftDropDown.style.display == "none") {
    leftDropDown.style.display = "flex";
    rightDropDown.style.display = "flex";
    toggleTop.style.transform = "translateY(10px) rotateZ(45deg)";
    toggleMiddle.style.opacity = "0";
    toggleBottom.style.transform = "translateY(-10px) rotateZ(-45deg)";
  } else {
    leftDropDown.style.display = "none";
    rightDropDown.style.display = "none";
    toggleTop.style.transform = "none";
    toggleMiddle.style.opacity = "1";
    toggleBottom.style.transform = "none";
  }
});
