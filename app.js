const slider = document.querySelector(".container");
let isPress = false;
let startX;
let sliderScrollerToLeft;

slider.addEventListener("mousedown", function (e) {
  isPress = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  sliderScrollerToLeft = slider.scrollLeft; // = 0
  // console.log(sliderScrollerToLeft);
});

slider.addEventListener("mouseup", function () {
  isPress = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseleave", function () {
  isPress = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", function (e) {
  if (!isPress) return;
  e.preventDefault();
  endX = e.pageX - slider.offsetLeft;
  let transferDistance = endX - startX;
  slider.scrollLeft = sliderScrollerToLeft - transferDistance; // = 0 - (doi dau)
});
