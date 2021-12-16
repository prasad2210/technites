let nav = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if (window.pageYOffset > 130) {
      nav.classList.remove("navbar-dark");
      nav.classList.add("bg-color");
      $(".navContainer").removeClass("hr-line")
      $(".nav-title-div").css("font-size", "150%");
      $(".scrolling-navbar").css("padding", "15px 0")
    } else {
      nav.classList.remove("bg-color");
      nav.classList.add("navbar-dark");
      $(".nav-title-div").css("font-size", "200%");
      $(".scrolling-navbar").css("padding", "30px 0")
      $(".navContainer").addClass("hr-line")


      // $(".nav-title-div").css("visibility", "hidden");
    }
});
