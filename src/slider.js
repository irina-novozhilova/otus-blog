export function slider(sliderContainer) {
  function goNext() {
    const slides = sliderContainer.querySelectorAll("li");

    const activeSlide = sliderContainer.querySelector(".active");

    const nextSlide = sliderContainer.querySelector(".next-active");

    let thirdSlide = nextSlide.nextElementSibling;
    if (!thirdSlide) {
      thirdSlide = slides[0];
    }

    slides.forEach((element) => {
      const slide = element;
      slide.classList.remove("active", "prev-active", "next-active");
      slide.style.opacity = 1;
    });

    activeSlide.classList.remove("active");
    activeSlide.classList.add("prev-active");

    nextSlide.classList.add("active");
    nextSlide.classList.remove("next-active");

    thirdSlide.style.opacity = 0;
    thirdSlide.classList.add("next-active");
  }

  function goPrev() {
    const slides = sliderContainer.querySelectorAll("li");

    const activeSlide = sliderContainer.querySelector(".active");
    const prevActive = sliderContainer.querySelector(".prev-active");

    let prevSlide = prevActive.previousElementSibling;
    if (!prevSlide) {
      prevSlide = slides[slides.length - 1];
    }

    slides.forEach((element) => {
      const slide = element;
      slide.classList.remove("active", "prev-active", "next-active");
      slide.style.opacity = 1;
    });

    activeSlide.classList.remove("active");
    activeSlide.classList.add("next-active");

    prevActive.classList.add("active");
    prevActive.classList.remove("next-active");

    prevSlide.classList.add("prev-active");
  }

  function showSlides() {
    let slides = sliderContainer.querySelectorAll("li");
    if (slides.length === 2) {
      const clone1 = slides[0].cloneNode(true);
      const clone2 = slides[1].cloneNode(true);
      sliderContainer.querySelector("ul").append(clone1);
      sliderContainer.querySelector("ul").append(clone2);
    }
    slides = sliderContainer.querySelectorAll("li");
    slides[0].classList.add("active");
    slides[1].classList.add("next-active");
    slides[slides.length - 1].classList.add("prev-active");
  }

  let touchstartX = 0;
  let touchendX = 0;

  function checkDirection() {
    if (touchendX < touchstartX) {
      goNext();
    }
    if (touchendX > touchstartX) {
      goPrev();
    }
  }

  document.addEventListener("touchstart", (e) => {
    touchstartX = e.changedTouches[0].screenX;
  });

  document.addEventListener("touchend", (e) => {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
  });

  function addControls() {
    const prev = sliderContainer.querySelector(".prev");
    prev.addEventListener("click", () => {
      goPrev();
    });
    const next = sliderContainer.querySelector(".next");
    next.addEventListener("click", () => {
      goNext();
    });
  }

  function initSlider() {
    showSlides();
    addControls();
  }

  // window.addEventListener("load", initSlider);
  initSlider();
}
