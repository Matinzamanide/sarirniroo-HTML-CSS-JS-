const a = document.querySelectorAll("a");

if(localStorage.getItem('language')=='English'){
    document.body.style.fontFamily='sans-serif';
    document.body.style.direction='ltr'
    document.querySelector(".sideul").style.marginLeft = "30px";
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
    
  }