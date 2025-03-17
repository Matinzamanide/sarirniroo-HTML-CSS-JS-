// const goals=document.querySelectorAll('.goals');

// for(let i=0;i<goals.length;i++){
//     goals[i].style.display='none';
// }
const hamburger = document.querySelector(".hamburger");
const closed = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const img=document.querySelector('.about-image img');
const policy = document.querySelector(".policy");
const policies = document.querySelector(".policies");
const rules = document.querySelectorAll(".rules");
const goals = document.querySelectorAll(".goals");
const engoals = document.querySelectorAll(".engoals");
const intro = document.querySelector(".intro");
const en_intro = document.querySelector(".en-intro");

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
let colorSorted=localStorage.getItem('color');
if(localStorage.getItem('color')=='#292929'){
  document.body.style.color='white';
  sidebar.style.backgroundColor="#292929";
}
if(localStorage.getItem('language')=='English'){
    for(let i=0;i<engoals.length;i++){
        engoals[i].style.display='inline';
        goals[i].style.display='none';
    }
    intro.style.display='none';
    en_intro.style.display='block';
    policies.innerHTML='Company goals and policies'
}
document.body.style.backgroundColor=colorSorted;
// policy.style.backgroundColor=colorSorted;
// policy.style.backgroundColor=colorSorted;
container.style.backgroundColor=colorSorted;
for(let i=0;i<rules.length;i++){
    rules[i].style.backgroundColor=colorSorted;
    
}
