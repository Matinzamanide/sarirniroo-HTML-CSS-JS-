const hamburger = document.querySelector(".hamburger");
const closed = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const header = document.querySelector(".header");
const header_right = document.querySelector(".right");
const logo = document.querySelector(".logo");
const front = document.querySelectorAll(".front");
const back = document.querySelectorAll(".back");
const container_bottom = document.querySelector(".bottom-container");
const container_top = document.querySelector(".top-container");
const container = document.querySelector(".container");
const sample_title = document.querySelector(".sample-title");
const switchboard = document.querySelector(".switchboard");
const cctv = document.querySelector(".cctv");
const dakal = document.querySelector(".dakal");
const automation = document.querySelector(".automation");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  header.style.opacity = "0.2";
  document.querySelector(".container").style.opacity = "0.2";
});
closed.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  header.style.opacity = "";
  document.querySelector(".container").style.opacity = "";
});

let colorStored = localStorage.getItem("color");

if (localStorage.getItem("color") == "#292929") {
  document.body.style.backgroundColor = "#1e1e1e";
  header.style.backgroundColor = "#1e1e1e";
  header_right.style.backgroundColor = "#1e1e1e";
  container.style.backgroundColor = "#333";
  container_top.style.backgroundColor = "#333";
  sidebar.style.backgroundColor = "#222";
  sample_title.style.color = "#fff";
}

const btns = document.querySelectorAll(".btns button");

function xhr(url) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    if (this.status === 200) {
      container_bottom.innerHTML = this.responseText;
    }
  };
  xhr.send();
}

btns[1].addEventListener("click", () => {
  xhr("../../pages/sample-work/ajax/cctv.html");
});
btns[2].addEventListener("click", () => {
  xhr("../../pages/sample-work/ajax/switchboard.html");
});
btns[3].addEventListener("click", () => {
  xhr("../../pages/sample-work/ajax/dakal.html");
});
btns[4].addEventListener("click", () => {
  xhr("../../pages/sample-work/ajax/automasion.html");
});

const acc = document.querySelector(".accordion");
const choosed = document.querySelector(".choosed");
const panel_btns = document.querySelectorAll(".acc .panel button");
const panel = document.querySelector(".panel");
const chevron = document.querySelector(".chevron");

acc.addEventListener("click", () => {
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    chevron.style = "";
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    chevron.style = "transform: rotate(180deg)";
  }
});

panel_btns[0].addEventListener("click", () => {});
panel_btns[1].addEventListener("click", () => {
  xhr("../../pages/sample-work/ajax/cctv.html");
  choosed.innerHTML = "دوربین";
  if (localStorage.getItem("language") == "English") choosed.innerHTML = "cctv";
});
panel_btns[2].addEventListener("click", () => {
  xhr("../../pages/sample-work/ajax/switchboard.html");
  choosed.innerHTML = "تابلو برق";
  if (localStorage.getItem("language") == "English")
    choosed.innerHTML = "Switchboard";
});
panel_btns[3].addEventListener("click", () => {
  xhr("../../pages/sample-work/ajax/dakal.html");
  choosed.innerHTML = "دکل";
  if (localStorage.getItem("language") == "English")
    choosed.innerHTML = "Tower Power";
});
panel_btns[4].addEventListener("click", () => {
  xhr("../../pages/sample-work/ajax/automasion.html");
  choosed.innerHTML = "اتوماسیون";
  if (localStorage.getItem("language") == "English")
    choosed.innerHTML = "automation";
});
for (let i = 0; i < panel_btns.length; i++) {
  panel_btns[i].addEventListener("click", () => {
    panel.style.maxHeight = null;
  });
}
if (localStorage.getItem("language") == "English") {
  sample_title.innerHTML = "Sample work of : ";
  panel_btns[0].innerHTML = "all";
  panel_btns[1].innerHTML = "cctv";
  panel_btns[2].innerHTML = "switchboard";
  panel_btns[3].innerHTML = "Power tower";
  panel_btns[4].innerHTML = "automation";
  btns[0].innerHTML = "all";
  btns[1].innerHTML = "cctv";
  btns[2].innerHTML = "switchboard";
  btns[3].innerHTML = "Power tower";
  btns[4].innerHTML = "automation";
  choosed.innerHTML = "all";
}

function xhr1(url, place) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    if (this.status === 200) {
      place.innerHTML = this.responseText;
    }
  };
  xhr.send();
}

xhr1("../../pages/sample-work/ajax/cctv.html",cctv);
xhr1("../../pages/sample-work/ajax/automasion.html",automation);
xhr1("../../pages/sample-work/ajax/switchboard.html",switchboard);
xhr1("../../pages/sample-work/ajax/dakal.html",dakal);
