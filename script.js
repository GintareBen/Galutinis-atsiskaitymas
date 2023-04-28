const tabs = document.getElementsByClassName("tab");
const h1 = document.querySelector("h2");
const buttons = document.getElementsByTagName("button");

function showTab(event, id) {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("selected");
    buttons[i].classList.remove("selected");
  }
  document.getElementById(id).classList.add("selected");
  event.currentTarget.classList.add("selected");
  console.log(event.currentTarget);
}