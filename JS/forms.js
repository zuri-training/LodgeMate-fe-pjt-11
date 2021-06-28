
let tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");
 
for (let i = 0; i < tabPanes.length; i++) {
  tabPanes[i].addEventListener("click", () => {
    document.getElementsByClassName("tab-header")[0].getElementsByClassName("active-form")[0].classList.remove("active-form");
    tabPanes[i].classList.add("active-form");
    
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("active-form")[0].classList.remove("active-form");
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[i].classList.add("active-form");
  });
}