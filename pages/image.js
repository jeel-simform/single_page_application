let slides = document.getElementsByClassName("slide");
let navlinks = document.getElementsByClassName("dot");
let currentSlide = 0;

document.getElementById("button-next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

console.log(document.getElementById("button-next"));
document.getElementById("button-prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(moveTo) { 
  console.log("c",currentSlide);
  if (moveTo >= slides.length) {
    moveTo = 0;
  }
  if (moveTo < 0) {
    moveTo = slides.length - 1;
  }

  slides[currentSlide].classList.toggle("active");

  slides[moveTo].classList.toggle("active");

  currentSlide = moveTo; 
}
