const hamburger = document.querySelector(".hamburger");
const closed = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  header.style.opacity = "0.2";
  document.querySelector(".container").style.opacity = "0.2";
  document.querySelector(".image").style.opacity = "0.2";
});
closed.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  header.style.opacity = "";
  document.querySelector(".container").style.opacity = "";
  document.querySelector(".image").style.opacity = "";
});


window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    const load = document.querySelector(".spinner");
    load.remove();
  }, 2000);
});
const logo = document.querySelector(".logo");
const language = document.querySelector(".language");
const header = document.querySelector(".header");
const header_right = document.querySelector(".right");
const father = document.querySelector(".father");
const son = document.querySelector(".son");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

father.addEventListener("click", () => {
  son.classList.toggle("active");
  father.classList.toggle("activee");

  if (son.classList.contains("active")) {
    document.body.style.backgroundColor = "#222";
    language.style.backgroundColor = "#222";
    language.style.color = "#fff";
    header.style.backgroundColor = "#222";
    header_right.style.backgroundColor = "#222";
    sidebar.style.backgroundColor = "#222";
    sun.style.display = "none";
    moon.style.display = "inline";
    hamburger.style.color = "white";
    localStorage.setItem("color", "#292929");
  } else {
    document.body.style.backgroundColor = "";
    header.style.backgroundColor = "";
    language.style.backgroundColor = "";
    language.style.color = "";
    header_right.style.backgroundColor = "";
    sidebar.style.backgroundColor = "";
    sun.style.display = "";
    moon.style.display = "";
    hamburger.style.color = "black";
    localStorage.setItem("color", "#fff");
  }
});
document.body.style.backgroundColor = `${localStorage.getItem("color")}`;

if (localStorage.getItem("color") == "#292929") {
  header.style.backgroundColor = "#222";
  header_right.style.backgroundColor = "#222";
  language.style.backgroundColor = "#222";
  language.style.color = "#fff";
  sidebar.style.backgrolundColor = "#222";
  son.classList.toggle("active");
  father.classList.toggle("activee");
  sun.style.display = "none";
  moon.style.display = "inline";
  hamburger.style.color = "white";
}

// Language.............................................................

const a = document.querySelectorAll("a");
const Persian = document.querySelector(".Persian");
const English = document.querySelector(".English");
const li_header = document.querySelectorAll("li");
const h3 = document.querySelectorAll("h3");
const h2 = document.querySelectorAll("h2");
const card_title = document.querySelectorAll(".card-hover__title");
const card_title_text = document.querySelectorAll(".card-hover__text");
const extra = document.querySelectorAll(".card-hover__extra");
const more = document.querySelectorAll(".more");
const more_information = document.querySelectorAll(".more_information");

function Language1() {
  document.body.style.direction = "rtl";
  document.body.style.fontFamily = "fa";
  a[0].innerHTML = "خانه";
  a[1].innerHTML = "نمونه کار";
  a[2].innerHTML = "درباره";
  a[3].innerHTML = "سیاست";
  a[4].innerHTML = "تماس";
  a[5].innerHTML = "خانه";
  a[6].innerHTML = "نمونه کار";
  a[7].innerHTML = "درباره";
  a[8].innerHTML = "سیاست";
  a[9].innerHTML = "تماس";
  li_header[10].innerHTML = "نواع مختلف تابلو های برق و الکترونیک صنعتی";
  li_header[11].innerHTML = "تجهیرات سامانه های هوشمند حمل و نقل";
  li_header[12].innerHTML = "سیستم های هوشمند مدیریت انرژی";
  li_header[13].innerHTML = "تابلو برق و تجهیزات آموزشی";
  li_header[14].innerHTML = "اتوماسیون خطوط تولید";
  h2[1].innerHTML = "سال هاست که همسفر صنعتیم ...";
  h3[0].innerHTML = "طراحی و تولید :";
  document.querySelector(".Years").style.marginLeft = "";
  card_title[0].innerHTML = "تجهیزات سامانه حمل و نقل";
  card_title[1].innerHTML = "تابلو های برق و الکترونیک صنعتی";
  card_title[2].innerHTML = "اتوماسیون خطوط تولید";
  card_title[3].innerHTML = "تابلو های برق و الکترونیک صنعتی";
  for (let i = 0; i < card_title_text.length; i++) {
    card_title_text[i].innerHTML =
      " تواید وطراحی انواع مختلفی از تابلو های برق و الکترونیک از تخصص های ما است";
  }
  for (let j = 0; j < more.length; j++) {
    more[j].innerHTML = "بیشتر ...";
  }
  for (let m = 0; m < more_information.length; m++) {
    more_information[m].innerHTML = "برای اطلاعات بیشتر روی بیشتر کلیک کنید";
  }
  document.querySelector(".add_title").innerHTML = "آدرس :";
  document.querySelector(".address").innerHTML =
    "ایران  استان اصفهان <br> شهر اصفهان  خیابان آل محمد  <br> ابتدای بلوار ایمان پلاک 6 طبقه 1 <br>شرکت سریر نیروی سپاهان";
  document.querySelector(".bridge").innerHTML = "پل های ارتباطی";
  document.querySelector(".telephone").innerHTML = "تلفن : 34507155-031";
  document.querySelector(".mobile-tel").innerHTML = "همراه : 09133650445";
  document.querySelector(".email_title").innerHTML = "ایمیل ";
  document.querySelector(".copy_right").innerHTML =
    "تمامی حقوق مادی و معنوی این وبسایت متعلق به شرکت سریر نیروی سپاهان میباشد";
}

function Language() {
  document.body.style.fontFamily = "sans-serif";
  document.body.style.direction = "ltr";
  localStorage.setItem("language", "English");
  a[0].innerHTML = "Home";
  a[1].innerHTML = "Work Sample";
  a[2].innerHTML = "About";
  a[3].innerHTML = "Policy";
  a[4].innerHTML = "Contact";
  a[5].innerHTML = "Home";
  a[6].innerHTML = "Sample Work";
  a[7].innerHTML = "About";
  a[8].innerHTML = "Policy";
  a[9].innerHTML = "Contact";
  hamburger.style.marginLeft='20px';
  li_header[10].innerHTML =
    "Different types of electrical panels and industrial electronics";
  li_header[11].innerHTML = "Intelligent transportation system equipment";
  li_header[12].innerHTML = "Intelligent energy management systems";
  li_header[13].innerHTML = "Electrical panel and educational equipment";
  li_header[14].style.fontSize = "15px";
  li_header[14].innerHTML = "Automation of production lines";
  h2[0].innerHTML = '<span style="color:#009899">sarir </span>niroo';
  h2[1].innerHTML = "We have been with the industry for years";
  h3[0].innerHTML = "Design and production:";
  document.querySelector(".Years").style.marginLeft = "2rem";
  card_title[0].innerHTML = "Transportation system ";
  card_title[1].innerHTML = "Electrical panels";
  card_title[2].innerHTML = "Automation of production lines";
  card_title[3].innerHTML = "Electrical panels";
  for (let i = 0; i < card_title_text.length; i++) {
    card_title_text[i].innerHTML =
      "Fabrication and design of various types of electrical and electronic panels are our specialties";
  }
  for (let j = 0; j < more.length; j++) {
    more[j].innerHTML = "more ...";
  }
  for (let m = 0; m < more_information.length; m++) {
    more_information[m].innerHTML = "Click on more for more information";
  }
  document.querySelector(".add_title").innerHTML = "Address :";
  document.querySelector(".address").innerHTML =
    "Iran, Isfahan provinceIsfahan City <br/>, Al Mohammad StThe beginning<br/> of Iman Boulevard, No. 6, Unit 1<br/> Sarirniroo Sepahan Company";
  document.querySelector(".bridge").innerHTML = "Communication bridges";
  document.querySelector(".telephone").innerHTML = "Phone : 031_34507155";
  document.querySelector(".mobile-tel").innerHTML =
    "Mobile_Number : 09133650445";
  document.querySelector(".email_title").innerHTML = "Email ";
  document.querySelector(".copy_right").innerHTML =
    "All material and intellectual rights of this website belong to SarirNiroo Sepahan Company";
  document.querySelector(".sideul").style.marginLeft = "30px";
  
}
Persian.addEventListener("click", () => {
  localStorage.setItem("language", "persian");
  Language1();
});
English.addEventListener("click", () => {
  Language();
});
if (localStorage.getItem("language") == "English") {
  Language();
}
if (localStorage.getItem("language") == "persian") {
  Language1();
}
