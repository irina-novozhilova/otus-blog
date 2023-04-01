/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/slider.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function slider() {
  function initSlider() {
    showSlides();
    addControls();
  }
  function addControls() {
    var prev = document.querySelector(".slider .prev");
    prev.addEventListener("click", function (event) {
      previousSlide();
    });
    var next = document.querySelector(".slider .next");
    next.addEventListener("click", function (event) {
      nextSlide();
    });
  }
  function nextSlide() {
    var slides = document.querySelectorAll(".slider li");
    var activeSlide = document.querySelector(".active");
    var nextSlide = document.querySelector(".next-active");
    var thirdSlide = nextSlide.nextElementSibling;
    if (!thirdSlide) {
      thirdSlide = slides[0];
    }
    var _iterator = _createForOfIteratorHelper(slides),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var slide = _step.value;
        slide.classList.remove("active", "prev-active", "next-active");
        slide.style.opacity = 1;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    activeSlide.classList.remove("active");
    activeSlide.classList.add("prev-active");
    nextSlide.classList.add("active");
    nextSlide.classList.remove("next-active");
    thirdSlide.style.opacity = 0;
    thirdSlide.classList.add("next-active");
  }
  function previousSlide() {
    var slides = document.querySelectorAll(".slider li");
    var activeSlide = document.querySelector(".active");
    var prevActive = document.querySelector(".prev-active");
    var prevSlide = prevActive.previousElementSibling;
    if (!prevSlide) {
      prevSlide = slides[slides.length - 1];
    }
    var _iterator2 = _createForOfIteratorHelper(slides),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var slide = _step2.value;
        slide.classList.remove("active", "prev-active", "next-active");
        slide.style.opacity = 1;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    activeSlide.classList.remove("active");
    activeSlide.classList.add("next-active");
    prevActive.classList.add("active");
    prevActive.classList.remove("next-active");
    prevSlide.classList.add("prev-active");
  }
  function showSlides() {
    var slides = document.querySelectorAll(".slider li");
    if (slides.length === 2) {
      var clone1 = slides[0].cloneNode(true);
      var clone2 = slides[1].cloneNode(true);
      document.querySelector(".slider ul").append(clone1);
      document.querySelector(".slider ul").append(clone2);
    }
    slides[0].classList.add("active");
    slides[1].classList.add("next-active");
    slides[slides.length - 1].classList.add("prev-active");
  }
  window.addEventListener("load", initSlider);
  var touchstartX = 0;
  var touchendX = 0;
  function checkDirection() {
    if (touchendX < touchstartX) {
      nextSlide();
    }
    if (touchendX > touchstartX) {
      previousSlide();
    }
  }
  document.addEventListener("touchstart", function (e) {
    touchstartX = e.changedTouches[0].screenX;
  });
  document.addEventListener("touchend", function (e) {
    touchendX = e.changedTouches[0].screenX;
    checkDirection();
  });
}
;// CONCATENATED MODULE: ./src/index.js


slider();
/******/ })()
;
//# sourceMappingURL=index-e9fd9278b9ee85f9db58.js.map