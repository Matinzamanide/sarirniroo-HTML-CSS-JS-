const text = document.querySelector(".text p");
const policy=document.querySelector('.policy');
const hamburger = document.querySelector(".hamburger");
const closed = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const img=document.querySelector('.about-image img');
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

if(localStorage.getItem('language')=='English'){
    text.innerHTML="SarirNiroo Sepahan Engineering Private Limited Company, registered in Isfahan, relying on expertise and experience, has completed more than 200 successful projects in the fields of industrial electricity, telecommunications and mechatronics. This company has the sales representative of big companies such as Germany's Siemens and is ready to cooperate with other private and public organizations."
    text.style.fontFamily='sans-serif';
}
let colorSorted=localStorage.getItem('color');
if(localStorage.getItem('color')=='#292929'){
    document.body.style.backgroundColor='#292929'
  document.body.style.color='white';
  sidebar.style.backgroundColor="#292929";
}
policy.style.backgroundColor=colorSorted;

console.log('ali')