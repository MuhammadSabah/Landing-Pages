"use strict";
const nav = document.querySelector(".main-nav");
const navName = document.querySelector(".nav-name");
const header = document.querySelector(".header");
const headerContainer = document.querySelector(".header-container");

const handleNavHover = function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    const link = e.target;
    const siblings = link
      .closest(".main-nav")
      .querySelectorAll(".main-nav-link");

    siblings.forEach((el) => {
      if (el != link) {
        el.style.opacity = this;
      }
    });
    navName.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleNavHover.bind(0.5));
nav.addEventListener("mouseout", handleNavHover.bind(1));

// Sticky Nav:
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry.isIntersecting);
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
