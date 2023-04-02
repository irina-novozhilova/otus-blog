/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/slider.js
function slider(sliderContainer) {
  function goNext() {
    var slides = sliderContainer.querySelectorAll("li");
    var activeSlide = sliderContainer.querySelector(".active");
    var nextSlide = sliderContainer.querySelector(".next-active");
    var thirdSlide = nextSlide.nextElementSibling;
    if (!thirdSlide) {
      thirdSlide = slides[0];
    }
    slides.forEach(function (element) {
      var slide = element;
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
    var slides = sliderContainer.querySelectorAll("li");
    var activeSlide = sliderContainer.querySelector(".active");
    var prevActive = sliderContainer.querySelector(".prev-active");
    var prevSlide = prevActive.previousElementSibling;
    if (!prevSlide) {
      prevSlide = slides[slides.length - 1];
    }
    slides.forEach(function (element) {
      var slide = element;
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
    var slides = sliderContainer.querySelectorAll("li");
    if (slides.length === 2) {
      var clone1 = slides[0].cloneNode(true);
      var clone2 = slides[1].cloneNode(true);
      sliderContainer.querySelector("ul").append(clone1);
      sliderContainer.querySelector("ul").append(clone2);
    }
    slides = sliderContainer.querySelectorAll("li");
    slides[0].classList.add("active");
    slides[1].classList.add("next-active");
    slides[slides.length - 1].classList.add("prev-active");
  }
  var touchstartX = 0;
  var touchendX = 0;
  function checkDirection() {
    if (touchendX < touchstartX) {
      goNext();
    }
    if (touchendX > touchstartX) {
      goPrev();
    }
  }
  document.addEventListener("touchstart", function (e) {
    touchstartX = e.changedTouches[0].screenX;
  });
  document.addEventListener("touchend", function (e) {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
  });
  function addControls() {
    var prev = sliderContainer.querySelector(".prev");
    prev.addEventListener("click", function () {
      goPrev();
    });
    var next = sliderContainer.querySelector(".next");
    next.addEventListener("click", function () {
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
;// CONCATENATED MODULE: ./src/index.js


slider(document.querySelector(".slider"));
/******/ })()
;
//# sourceMappingURL=index-076a21c89cd3d7c8cbbb.js.map