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
