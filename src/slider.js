export function slider() {
  function initSlider() {
    showSlides();
    addControls();
  }

  function addControls() {
    const prev = document.querySelector(".slider .prev");
    prev.addEventListener("click", function (event) {
      previousSlide();
    });
    const next = document.querySelector(".slider .next");
    next.addEventListener("click", function (event) {
      nextSlide();
    });
  }

  function nextSlide() {
    const slides = document.querySelectorAll(".slider li");

    let activeSlide = document.querySelector(".active");

    let nextSlide = document.querySelector(".next-active");

    let thirdSlide = nextSlide.nextElementSibling;
    if (!thirdSlide) {
      thirdSlide = slides[0];
    }

    for (let slide of slides) {
      slide.classList.remove("active", "prev-active", "next-active");
      slide.style.opacity = 1;
    }

    activeSlide.classList.remove("active");
    activeSlide.classList.add("prev-active");

    nextSlide.classList.add("active");
    nextSlide.classList.remove("next-active");

    thirdSlide.style.opacity = 0;
    thirdSlide.classList.add("next-active");
  }

  function previousSlide() {
    const slides = document.querySelectorAll(".slider li");

    let activeSlide = document.querySelector(".active");
    let prevActive = document.querySelector(".prev-active");

    let prevSlide = prevActive.previousElementSibling;
    if (!prevSlide) {
      prevSlide = slides[slides.length - 1];
    }

    for (let slide of slides) {
      slide.classList.remove("active", "prev-active", "next-active");
      slide.style.opacity = 1;
    }

    activeSlide.classList.remove("active");
    activeSlide.classList.add("next-active");

    prevActive.classList.add("active");
    prevActive.classList.remove("next-active");

    prevSlide.classList.add("prev-active");
  }

  function showSlides() {
    let slides = document.querySelectorAll(".slider li");
    if (slides.length === 2) {
      let clone1 = slides[0].cloneNode(true);
      let clone2 = slides[1].cloneNode(true);
      document.querySelector(".slider ul").append(clone1);
      document.querySelector(".slider ul").append(clone2);
    }
    slides[0].classList.add("active");
    slides[1].classList.add("next-active");
    slides[slides.length - 1].classList.add("prev-active");
  }

  window.addEventListener("load", initSlider);

  let touchstartX = 0;
  let touchendX = 0;

  function checkDirection() {
    if (touchendX < touchstartX) {
      nextSlide();
    }
    if (touchendX > touchstartX) {
      previousSlide();
    }
  }

  document.addEventListener("touchstart", (e) => {
    touchstartX = e.changedTouches[0].screenX;
  });

  document.addEventListener("touchend", (e) => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
  });
}
