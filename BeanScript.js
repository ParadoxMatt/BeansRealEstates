const contactbtn = document.getElementById("contactbutton");
const popup = document.getElementById("contactus");
const closepopup = document.getElementById("closepopup");
const bodybg = document.body

contactbtn.addEventListener('click', () => {
     popup.classList.toggle("active");
     bodybg.classList.toggle("popupbg");

});


closepopup.addEventListener('click', () => {

    popup.classList.remove("active");
    bodybg.classList.remove("popupbg");

});