var scrollOpacity = function () {
  var landingOpacity = function () {
    var position = window.scrollY;
    var landingMainText = document.getElementById("landing-main-text");
    var landingScrollText = document.getElementById("landing-scroll-text");
    var height = landingMainText.clientHeight;
    var calcOpacity = (height - position) / height;

    console.log(position);
    if (position >= 600) {
      landingMainText.style.opacity = calcOpacity;
      landingScrollText.style.opacity = calcOpacity;
    } else {
      landingMainText.style.opacity = calcOpacity;
      landingScrollText.style.opacity = calcOpacity;
    }
  };

  window.addEventListener("scroll", landingOpacity);
};
scrollOpacity();
