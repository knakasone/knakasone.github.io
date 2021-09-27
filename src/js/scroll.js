const body = document.body;
const sections = document.getElementById("sections");

let sx = 0, // For scroll positions
  sy = 0;
let dx = sx, // For container positions
  dy = sy;

body.style.main = main.clientHeight + "px";

// main.style.position = "fixed";
// main.style.top = 0;
// main.style.left = 0;

// Bind a scroll function
window.addEventListener("scroll", easeScroll);

function easeScroll() {
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

// Then we start a `requestAnimationFrame` loop.
window.requestAnimationFrame(render);

function render() {
  //We calculate our container position by linear interpolation method
  dx = li(dx, sx, 0.05);
  dy = li(dy, sy, 0.05);

  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;

  // Finally we translate our container to its new positions.
  // Don't forget to add a minus sign because the container needs to move in
  // the opposite direction of the window scroll.
  main.style.transform = `translate(-${dx}px, -${dy}px)`;

  // And we loop again.
  window.requestAnimationFrame(render);
}

// This is our Linear Interpolation method.
function li(a, b, n) {
  return (1 - n) * a + n * b;
}
