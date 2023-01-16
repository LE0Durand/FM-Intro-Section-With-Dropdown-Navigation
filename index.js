let dropdownMenuArrow = document.querySelectorAll(".dropdown__arrow");
let dropdownMenuHover = document.querySelectorAll(".dropdown");

dropdownMenuHover[0].addEventListener("mouseover", function () {
  dropdownMenuArrow[0].style.transform = "rotate(180deg)";
});

dropdownMenuHover[0].addEventListener("mouseout", function () {
  dropdownMenuArrow[0].style.transform = "rotate(0deg)";
});

dropdownMenuHover[1].addEventListener("mouseover", function () {
  dropdownMenuArrow[1].style.transform = "rotate(180deg)";
});

dropdownMenuHover[1].addEventListener("mouseout", function () {
  dropdownMenuArrow[1].style.transform = "rotate(0deg)";
});

/*                      */
/* MOBILE DROPDOWN MENU */
/*                      */

let isMobileFeaturesMenuOpen = false;
let isMobileCompanyMenuOpen = false;
let mobileDropdownMenuActivator = document.querySelectorAll(
  ".mobile__menu--dropdown"
);
let mobileDropdownMenu = document.querySelectorAll(
  ".mobile__menu--dropdown--menu"
);
let mobileDropdownMenuArrow = document.querySelectorAll(
  ".mobile__menu--dropdown--arrow"
);

mobileDropdownMenuActivator[0].addEventListener("click", function () {
  if (isMobileFeaturesMenuOpen == false) {
    mobileDropdownMenuArrow[0].style.transform = "rotate(180deg)";
    mobileDropdownMenu[0].style.display = "block";
    isMobileFeaturesMenuOpen = true;
  } else {
    mobileDropdownMenuArrow[0].style.transform = "rotate(0deg)";

    mobileDropdownMenu[0].style.display = "none";
    isMobileFeaturesMenuOpen = false;
  }
});

mobileDropdownMenuActivator[1].addEventListener("click", function () {
  if (isMobileCompanyMenuOpen == false) {
    mobileDropdownMenuArrow[1].style.transform = "rotate(180deg)";
    mobileDropdownMenu[1].style.display = "block";
    isMobileCompanyMenuOpen = true;
  } else {
    mobileDropdownMenuArrow[1].style.transform = "rotate(0deg)";
    mobileDropdownMenu[1].style.display = "none";
    isMobileCompanyMenuOpen = false;
  }
});

/*                     */
/* MOBILE MENU OPENING */
/*                     */

let openIcon = document.querySelector(".navigation__burger--icon");
let closeIcon = document.querySelector(".mobile__menu--close");
let mobileMenu = document.querySelector(".navigation__mobile--menu");

openIcon.addEventListener("click", function () {
  mobileMenu.style.visibility = "visible";
  document.body.style.overflow = "hidden";
});

closeIcon.addEventListener("click", function () {
  mobileMenu.style.visibility = "hidden";
  document.body.style.overflow = "auto";
});
