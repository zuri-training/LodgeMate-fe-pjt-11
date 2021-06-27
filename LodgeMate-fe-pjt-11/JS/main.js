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


const darkmode = () =>{
  const darkBtn = document.querySelector(".fa-moon-o");
  const element = document.body;
  darkBtn.addEventListener("click", () => {
    element.classList.toggle("dark-mode-bg");
  })
}; darkmode();