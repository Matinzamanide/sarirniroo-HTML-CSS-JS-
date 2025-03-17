const hamburger = document.querySelector(".hamburger");
const closed = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const response_en = document.querySelector(".response-en");
const response = document.querySelector(".response");
const con_div=document.querySelectorAll('.con-div');
console.log(response)
hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("show");
    header.style.opacity = "0.2";
    container.style.opacity = "0.2";
});
closed.addEventListener("click", () => {
    sidebar.classList.toggle("show");
    header.style.opacity = "";
    container.style.opacity = "";
});
if (localStorage.getItem("language") == "English") {
  response_en.style.display = "inline";
  response.style.display = "none";
}
let colorSorted = localStorage.getItem('color');
if (localStorage.getItem('color') == '#292929') {
    document.body.style.color = 'white';
    sidebar.style.backgroundColor = "#222";
    for(let i=0;i<con_div.length;i++){
        con_div[i].style.backgroundColor=colorSorted;
    }
}
document.body.style.backgroundColor = colorSorted;
container.style.backgroundColor = colorSorted;

// let colorSorted = localStorage.getItem("color");
// if (localStorage.getItem("color") == "#292929") {
//   document.body.style.backgroundColor = "#292929";
//   document.body.style.color = "white";
//   sidebar.style.backgroundColor = "#292929";
// }
// document.body.style.backgroundColor = colorSorted;

