//Highlights the section in the nav bar as the user scrolls down the page
const sections = document.querySelectorAll("section");
const selectedSection = document.querySelector(".selected-section");
const colors = ["red", "blue", "white"];

//set to 70%
const options = {
  threshold: 0.7,
};

//looking for sections when they enter the frame
let observer = new IntersectionObserver(navCheck, options);

//checks when section comes in to view on the page
function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const coords = activeAnchor.getBoundingClientRect();
    console.log(coords);
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      selectedSection.style.setProperty("left", `${directions.left}px`);
      selectedSection.style.setProperty("top", `${directions.top}px`);
      selectedSection.style.setProperty("width", `${directions.width}px`);
      selectedSection.style.setProperty("height", `${directions.height}px`);
      console.log(className);
      // document.getElementsById(className).scrollIntoView({
      //   behavior: "smooth",
      // });
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

//Smooth scrolls to the selected section when user selects from Navbar
//also when user select "scroll down" on landing page
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// $(window).scroll(example);

// function example() {
//   var tempScrollTop = $(window).scrollTop();
//   console.log("Scroll from Top: " + tempScrollTop.toString());

//   mainSection = document.getElementById("main");
//   if (tempScrollTop > 1000 && tempScrollTop < 1050) {
//     console.log("transition");
//     scrollTo(document.documentElement, mainSection.offsetTop, 800);
//   }
// }

// function scrollTo(element, to, duration) {
//   if (duration <= 0) return;
//   var difference = to - element.scrollTop;
//   var perTick = (difference / duration) * 10;

//   setTimeout(function () {
//     element.scrollTop = element.scrollTop + perTick;
//     if (element.scrollTop === to) return;
//     scrollTo(element, to, duration - 10);
//   }, 10);
// }
