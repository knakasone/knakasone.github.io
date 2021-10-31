//Highlights the section in the nav bar as the user scrolls down the page
const sections = document.querySelectorAll("section");
const selectedSection = document.querySelector(".selected-section");
const socialMenu = document.querySelector(".social-menu");

//set to 70%
const options = {
  threshold: 0.65,
};

//looking for sections when they enter the frame
let observer = new IntersectionObserver(navCheck, options);

//checks when section comes in to view on the page
function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const coords = activeAnchor.getBoundingClientRect();
    // console.log(activeAnchor);
    // console.log(coords);
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      selectedSection.style.setProperty("left", `${directions.left}px`);
      selectedSection.style.setProperty("top", `30px`);
      selectedSection.style.setProperty("width", `${directions.width}px`);
      selectedSection.style.setProperty("height", `${directions.height}px`);
      // console.log(className);

      // if (className !== "contact") {
      //   socialMenu.style.setProperty("right", 0);
      // } else {
      //   socialMenu.style.setProperty("right", `-45px`);
      // }
    }
    // else {
    //   socialMenu.style.setProperty("right", `-45px`);
    // }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

//Smooth scrolls to the selected section when user selects from Navbar
//also when user select "scroll down" on landing page

console.log(document.querySelectorAll('a[href^="#"]'));
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(this.getAttribute("href"));
    // console.log(document.querySelector(this.getAttribute("href")));
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener(
  "scroll",
  (event) => {
    var location = window.pageYOffset;
    const main = document.getElementById("main");
    const contact = document.getElementById("contact");
    const y = main.offsetTop;
    const contactY = contact.offsetTop;

    console.log("windwow: " + window.pageYOffset);

    //

    if (location > 15 && location < 100) {
      window.scroll({
        top: y,
        behavior: "smooth",
      });

      // document.getElementById("landing").style.height = 0;
      // document.getElementById("landing").style.visibility = "hidden";
    } else if (location < y && location > y - 100) {
      console.log("y: " + y);
      console.log("y-50: " + (y - 50));
      window.scroll({
        top: y,
        behavior: "smooth",
      });
    }

    if (location > y - 100 && location < contactY - 50) {
      socialMenu.style.setProperty("right", 0);
    } else {
      socialMenu.style.setProperty("right", `-45px`);
    }
  },
  false
);

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
