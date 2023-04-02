import { slider } from "./slider";

let sliderHtml;

function initHtml(numSlides) {
  sliderHtml = document.createElement("div");
  sliderHtml.classList.add("slider");
  const ul = document.createElement("ul");
  for (let i = 1; i <= numSlides; i += 1) {
    ul.append(document.createElement("li"));
  }
  sliderHtml.append(ul);

  const prevButton = document.createElement("a");
  prevButton.classList.add("prev");
  const nextButton = document.createElement("a");
  nextButton.classList.add("next");
  sliderHtml.append(prevButton);
  sliderHtml.append(nextButton);
}

function click(type, num) {
  for (let i = 1; i <= num; i += 1) {
    sliderHtml.querySelector(`.${type}`).click();
  }
}

function check(rules) {
  const slides = sliderHtml.querySelectorAll("li");
  for (let i = 0; i <= rules.length - 1; i += 1) {
    const rule = rules[i];
    expect(slides[rule[0]].classList.contains(rule[1])).toBeTruthy();
  }
}

describe("slider", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("is a function", () => {
    expect(slider).toBeInstanceOf(Function);
  });

  it("init", () => {
    initHtml(3);
    slider(sliderHtml);
    check([
      [0, "active"],
      [1, "next-active"],
      [2, "prev-active"],
    ]);
  });

  it("next one click", () => {
    initHtml(3);
    slider(sliderHtml);
    click("next", 1);
    check([
      [0, "prev-active"],
      [1, "active"],
      [2, "next-active"],
    ]);
  });

  it("next two clicks", () => {
    initHtml(3);
    slider(sliderHtml);
    click("next", 2);
    check([
      [0, "next-active"],
      [1, "prev-active"],
      [2, "active"],
    ]);
  });

  it("prev one click", () => {
    initHtml(3);
    slider(sliderHtml);
    click("prev", 1);
    check([
      [0, "next-active"],
      [1, "prev-active"],
      [2, "active"],
    ]);
  });

  it("prev two clicks", () => {
    initHtml(3);
    slider(sliderHtml);
    click("prev", 2);
    check([
      [0, "prev-active"],
      [1, "active"],
      [2, "next-active"],
    ]);
  });

  it("prev four clicks", () => {
    initHtml(3);
    slider(sliderHtml);
    click("prev", 4);
    check([
      [0, "next-active"],
      [1, "prev-active"],
      [2, "active"],
    ]);
  });

  it("check two elements", () => {
    initHtml(2);
    slider(sliderHtml);
    check([
      [0, "active"],
      [1, "next-active"],
      [3, "prev-active"],
    ]);
  });
});
