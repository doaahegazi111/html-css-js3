let search=document.getElementById("search");
let searchHere=document.querySelector(".searchHere");
let close=document.getElementById("close");
let bars=document.getElementById("bars");
let links=document.querySelector(".links");
search.addEventListener("click",()=>{
    searchHere.classList.add("active");
    links.classList.remove("active")
});
close.addEventListener("click",()=>{
    searchHere.classList.remove("active");
});
bars.addEventListener("click",()=>{
    bars.classList.toggle("fa-times");
    links.classList.toggle("active");
    searchHere.classList.remove("active");
});
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .links a');
window.onscroll = () =>{
    section.forEach(sec =>{
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header .links a[href*='+id+']').classList.add('active');
        });
    };
});
}
function loder(){
    document.querySelector('.loder').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loder, 3000);
}
window.onload = fadeOut;