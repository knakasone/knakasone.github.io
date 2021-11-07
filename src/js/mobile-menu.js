//when you click the mobile menu toggle, this function will run and reveal the navbar
const toggle = document.querySelector(".hamburger-toggle");
const leftDropDown = document.querySelector("div.left-nav-container");
const rightDropDown = document.querySelector(".right-nav-container");
const toggleTop = document.querySelector(".top");
const toggleMiddle = document.querySelector(".middle");
const toggleBottom = document.querySelector(".bottom");

toggle.addEventListener("click", function () {
  console.log(leftDropDown.currentStyle);
  if (leftDropDown.style.display != "none") {
    closeMobileMenu();
  } else {
    leftDropDown.style.display = "flex";
    rightDropDown.style.display = "flex";
    toggleTop.style.transform = "translateY(9px) rotateZ(45deg)";
    toggleMiddle.style.opacity = "0";
    toggleBottom.style.transform = "translateY(-9px) rotateZ(-45deg)";
  }
});

//Smooth scrolls to the selected section when user selects from Navbar
//also when user select "scroll down" on landing page
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    //If the user is selecting a link from the drop down mobile menu, close it
    if (leftDropDown.style.display == "flex") {
      closeMobileMenu();
    }
  });
});

function closeMobileMenu() {
  leftDropDown.style.display = "none";
  rightDropDown.style.display = "none";
  toggleTop.style.transform = "none";
  toggleMiddle.style.opacity = "1";
  toggleBottom.style.transform = "none";
}
