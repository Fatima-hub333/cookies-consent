const zoomElement = document.querySelector('.workspace');
let zoom = 1;

document.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    zoomElement.style.transform = `scale(${(zoom += 0.06)})`;
  } else {
    zoomElement.style.transform = `scale(${(zoom -= 0.06)})`;
  }
});