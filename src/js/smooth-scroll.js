// document.getElementById("landing-scroll-button").onclick = function () {
//   var mainSection = document.getElementById("main");
//   var topPos = mainSection.offsetTop;
//   window.scrollTo({ top: topPos, behavior: "smooth" });
// };

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// function smoothScrollTo(buttonID, sectionID) {
//   document.getElementById(buttonID).onclick = function () {
//     var sectionElem = document.getElementById(sectionID);
//     var topPos = sectionElem.offsetTop + 6;
//     window.scrollTo({ top: topPos, behavior: "smooth" });
//   };
// }
