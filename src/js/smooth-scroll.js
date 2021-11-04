//Highlights the section in the nav bar as the user scrolls down the page
const sections = document.querySelectorAll("section");
const selectedSection = document.querySelector(".selected-section");
const socialMenu = document.querySelector(".social-menu");

//set to 70%
const options = {
  threshold: 0.8,
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

      if (className == "contact") {
        socialMenu.style.setProperty("right", `-45px`);
        console.log("hidden");
      } else {
        socialMenu.style.setProperty("right", 0);
      }
    } else {
      socialMenu.style.setProperty("right", `-45px`);
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

window.addEventListener(
  "scroll",
  (event) => {
    var location = window.pageYOffset;
    const main = document.getElementById("main");
    const contact = document.getElementById("contact");
    const y = main.offsetTop;
    const contactY = contact.offsetTop;

    // var landingBool = false;

    // if (location > 15 && location < y - 15) {
    //   landingBool = true;
    // }

    // if (location > 15 && location < 100) {
    //   // landingBool = true;
    //   window.scroll({
    //     top: y,
    //     behavior: "smooth",
    //   });

    // } else if (location < y && location > y - 100) {
    //   // landingBool = true;
    //   window.scroll({
    //     top: y,
    //     behavior: "smooth",
    //   });
    // }

    //Hide the social menu when the user is scrolled to the landing page or the contact page
    if (location > y - 100 && location < contactY - 50) {
      socialMenu.style.setProperty("right", 0);
    } else {
      socialMenu.style.setProperty("right", `-45px`);
    }
  },
  false
);

// if (landingBool) {
//   window.scroll({
//     top: y,
//     behavior: "smooth",
//   });
//   landingBool = false;
// }

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
