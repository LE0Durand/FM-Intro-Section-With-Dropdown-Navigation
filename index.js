let imgElements = document.querySelectorAll(".dropdown__arrow");
let hoverElements = document.querySelectorAll(".dropdown");

hoverElements[0].addEventListener("mouseover", function () {
  imgElements[0].style.transform = "rotate(180deg)";
});

hoverElements[0].addEventListener("mouseout", function () {
  imgElements[0].style.transform = "rotate(0deg)";
});

hoverElements[1].addEventListener("mouseover", function () {
  imgElements[1].style.transform = "rotate(180deg)";
});

hoverElements[1].addEventListener("mouseout", function () {
  imgElements[1].style.transform = "rotate(0deg)";
});
