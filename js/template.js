// Navmenu
const NavMenu = () => {
  const Bar = document.querySelector("nav .bar");
  const NavMenu = document.querySelector("nav .navmenu");
  const Close = document.querySelector(".navmenu .close");

  // Events
  Bar.addEventListener("click", openMenu);
  Close.addEventListener("click", closeMenu);

  function openMenu() {
    NavMenu.classList.add("navmenu-active");
  }

  function closeMenu() {
    NavMenu.classList.remove("navmenu-active");
  }
};

NavMenu();

// Hero
const SlideCarousel = () => {
  let Slide = document.querySelectorAll(".slide");
  // let next = document.querySelector("");

  let counter = 0;
  let dots = document.querySelectorAll(".slide-navigation .dot");

  function slideNext() {
    Slide[counter].style.animation = "next1 0.5s ease-in forwards";
    if (counter >= Slide.length - 1) {
      counter = 0;
    } else {
      counter++;
    }
    Slide[counter].style.animation = "next2 0.5s ease-in forwards";
    indicators();
  }

  function slidePrev() {
    Slide[counter].style.animation = "prev1 0.5s ease-in forwards";
    if (counter == 0) {
      counter = Slide.length - 1;
    } else {
      counter--;
    }
    Slide[counter].style.animation = "prev2 0.5s ease-in forwards";
    indicators();
  }

  function slidePrev() {
    Slide[counter].style.animation = "prev1 0.5s ease-in forwards"; //the will start rotating going right by triggered
    if (counter == 0) {
      counter = Slide.length - 1;
    } else {
      counter--;
    }
    Slide[counter].style.animation = "prev2 0.5s ease-in forwards"; // the will start rotating going right followed 'prev1' by triggered
  }

  function autoSliding() {
    deleteInterval = setInterval(timer, 3000);
    function timer() {
      slideNext();
      indicators();
    }
  }

  autoSliding();

  // Stop auto sliding when mouse is over
  const Hero = document.querySelector(".hero");
  Hero.addEventListener("mouseover", function () {
    clearInterval(deleteInterval);
  });

  // Resume sliding when mouse is out
  Hero.addEventListener("mouseout", autoSliding);

  // indicator
  function indicators() {
    // display list of dots with no class active on first load
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dotActive", "");
    }
    dots[counter].className += " dotActive"; // put class 'active' on dot[counter start to 0] updated thru setinterval animation
  }

  // Switch slide
  function switchSlide(currentImage) {
    currentImage.classList.add("dotActive");
    var Attr = currentImage.getAttribute("attr");

    // if you click 1,2,3,4
    if (Attr > counter) {
      Slide[counter].style.animation = "next1 0.5s ease-in forwards";
      counter = Attr;
      Slide[counter].style.animation = "next2 0.5s ease-in forwards";
    }
    // if click where the dot active no rotation happen
    else if (Attr == counter) {
      return;
    } else {
      Slide[counter].style.animation = "prev1 0.5s ease-in forwards";
      counter = Attr;
      Slide[counter].style.animation = "prev2 0.5s ease-in forwards";
    }
    indicators(); // indicator updates everytime triggered
  }
};

SlideCarousel();
