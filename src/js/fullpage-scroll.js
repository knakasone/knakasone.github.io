// //show and hide topbtn
// function yScroll() {
//   var yPos = window.pageYOffset;

//   if (yPos >= window.innerHeight - 10) {
//     document.getElementById("topbtn").style.opacity = 1;
//   } else {
//     document.getElementById("topbtn").style.opacity = 0;
//   }
// }

// //scroll to top
// function goTop() {
//   let topbtn = document.getElementById("topbtn");
//   let top = window.pageYOffset;

//   var intervalTimer = setInterval(function () {
//     if (top > 0) {
//       top -= 15;
//       window.scrollTo(0, top);
//     } else {
//       topbtn.style.opacity = 0;
//       clearInterval(intervalTimer);
//     }
//   }, 0.5);
// }

function showAnimate(arrivePoint) {
  let flag = true;
  let timer = setInterval(function () {
    let icur = window.pageYOffset;

    //Buffer movement, speed change at any time
    let speed = (arrivePoint - icur) / 12;

    // console.log("speed: " + speed);

    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //Take integer speed

    var scrollToPos;
    // console.log("arrive point: " + arrivePoint);
    console.log("icur: " + icur);
    console.log("speedAfter: " + speed);
    console.log("scrollTo: " + (icur + speed));

    if (icur || icur == 0) {
      window.scrollTo(0, icur + speed);
      var scrollToPos = icur + speed;
    }
    if (arrivePoint !== icur) {
      flag = false;
    } else {
      flag = true;
    }

    if (flag) {
      clearInterval(timer);
      isComplete = true;
    }
  }, 15);
}

var isComplete = true;

function wheel(e) {
  if (isComplete == true) {
    //Prevent multiple repeat function

    isComplete = false;
    console.log(e.wheelDelta);
    if (e.wheelDelta) {
      //IE,Chrome MouseScroll
      console.log("SCROLLED");
      stopScroll();
      if (e.wheelDelta > 0) {
        //When the pulley rolls up

        let arrivePoint = window.pageYOffset - window.innerHeight;
        //arrivePoint cannot be negative
        arrivePoint = arrivePoint < 0 ? 0 : arrivePoint;
        showAnimate(arrivePoint);
      }

      if (e.wheelDelta < 0) {
        //When the pulley rolls down
        let arrivePoint = window.pageYOffset + window.innerHeight;
        //maximum rolling point
        let maxBottom = document.body.offsetHeight - window.innerHeight;
        //If arrivePoint exceeds the maximum rolling point, then arrivePoint equals the maximum rolling point
        arrivePoint = arrivePoint > maxBottom ? maxBottom : arrivePoint;
        showAnimate(arrivePoint);
        pageShow();
      }
    } else if (e.detail) {
      //Firefox MouseScroll
      if (e.detail < 0) {
        //When the pulley rolls up
        let arrivePoint =
          document.documentElement.scrollTop - window.innerHeight;
        //arrivePoint cannot be negative
        arrivePoint = arrivePoint < 0 ? 0 : arrivePoint;
        showAnimate(arrivePoint);
      }
      if (e.detail > 0) {
        //When the pulley rolls down
        let arrivePoint =
          document.documentElement.scrollTop + window.innerHeight;
        let maxBottom = document.body.offsetHeight - window.innerHeight;
        //If arrivePoint exceeds the maximum rolling point, then arrivePoint equals the maximum rolling point
        arrivePoint = arrivePoint > maxBottom ? maxBottom : arrivePoint;
        showAnimate(arrivePoint);
        pageShow();
      }
    }
  }
}

function pageShow() {
  // let Ospan = document.getElementsByTagName("span");
  // let p = window.pageYOffset + window.innerHeight;
  // let q = window.pageYOffset + window.innerHeight * 2;
  // for (let i = 0; i < Ospan.length; i++) {
  //   if (p < Ospan[i].offsetTop && Ospan[i].offsetTop < q) {
  //     Ospan[i].style.opacity = 1;
  //   }
  // }
  console.log("Opacity change");
  document.getElementById("main").style.opacity = 1;
}

//Bubble prevention
function stopScroll() {
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }
  var oldonwheel,
    oldonmousewheel1,
    oldonmousewheel2,
    oldontouchmove,
    oldonkeydown,
    isDisabled;
  (function disableScroll() {
    if (window.addEventListener)
      // older FF
      window.addEventListener("DOMMouseScroll", preventDefault, false);
    oldonwheel = window.onwheel;
    window.onwheel = preventDefault; // modern standard

    oldonmousewheel1 = window.onmousewheel;
    window.onmousewheel = preventDefault; // older browsers, IE
    oldonmousewheel2 = document.onmousewheel;
    document.onmousewheel = preventDefault; // older browsers, IE

    oldontouchmove = window.ontouchmove;
    window.ontouchmove = preventDefault; // mobile

    oldonkeydown = document.onkeydown;
    document.onkeydown = preventDefaultForScrollKeys;
    isDisabled = true;
  })();
}

// document.addEventListener("scroll", yScroll); //control topbtn'opacity
document.addEventListener("DOMMouseScroll", wheel, false); //firefox
document.addEventListener("mousewheel", wheel, {
  passive: false,
});
// document.addEventListener("mousewheel", wheel, false); //chrome, IE
