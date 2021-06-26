$(".carousel").carousel({
  interval: 3000,
});

const toggle = () => {
  const burger = document.querySelector("#ham");
  const nav = document.querySelector(".nav-links");
  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
};
toggle();

const darkmode = () => {
  const darkBtn = document.querySelector(".fa-moon-o");
  const element = document.body;
  darkBtn.addEventListener("click", () => {
    element.classList.toggle("dark-mode-bg");
  });
};
darkmode();

const pageBtns = () => {
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const firstPage = document.querySelector("#page1");
  const secondPage = document.querySelector("#page2");

  nextBtn.addEventListener("click", () => {
     firstPage.style.display = "none" ;
     secondPage.style.display = "block";
     
  });
  prevBtn.addEventListener("click", () => {
      firstPage.style.display = "block";
      secondPage.style.display = "none"
  });
};
pageBtns();
