const tabs = document.getElementsByClassName("tab");
const h1 = document.querySelector("h2");
const buttons = document.getElementsByTagName("button");
const menuLinks = document.querySelectorAll("header nav li")
console.log(menuLinks)
const sections = document.querySelectorAll("section")

function showTab(event, id) {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("selected");
    buttons[i].classList.remove("selected");
  }
  document.getElementById(id).classList.add("selected");
  event.currentTarget.classList.add("selected");
  console.log(event.currentTarget);
}

// Swiper
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  speed: 1000,

  breakpoints: {
    890: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    650: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

window.addEventListener("scroll", function(){
  let current

  for(let section of sections){
  if(window.pageYOffset >= section.offsetTop - 50){
      current = section.getAttribute("id")
      }
  }

  for(let menuLink of menuLinks){
      menuLink.classList.remove("active")
      if(menuLink.querySelector('a').getAttribute("href") == "#" + current){
          menuLink.classList.add("active")
      }
  }
})