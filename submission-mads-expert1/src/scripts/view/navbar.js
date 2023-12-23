/* show nav-link */
const DURATION_TRANSITION = 350;
const humButton = document.querySelector(".hum-button");
const navListMobile = document.querySelector(".nav-list.mobile");

humButton.addEventListener("click", function () {
  const buttonIcon = document.querySelector(".button-icon");

  if (buttonIcon.classList.contains("fa-bars")) {
    // change icon
    buttonIcon.classList.replace("fade", "not-fade");
    setTimeout(function () {
      buttonIcon.classList.replace("not-fade", "fade");
      buttonIcon.classList.replace("fa-bars", "fa-xmark");
    }, DURATION_TRANSITION);

    //show nav-link
    navListMobile.classList.replace("hide", "show");
    setTimeout(function () {
      navListMobile.classList.toggle("open");
    }, DURATION_TRANSITION);
  } else {
    // change icon
    buttonIcon.classList.replace("fade", "not-fade");
    setTimeout(function () {
      buttonIcon.classList.replace("not-fade", "fade");
      buttonIcon.classList.replace("fa-xmark", "fa-bars");
    }, DURATION_TRANSITION);

    //show nav-link
    navListMobile.classList.toggle("open");
    setTimeout(function () {
      navListMobile.classList.replace("show", "hide");
    }, DURATION_TRANSITION);
  }
});

const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (header.offsetHeight - 8 < this.window.scrollY) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});
