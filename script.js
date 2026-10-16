const slider= document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const tabsBtn = document.querySelectorAll(".tabBtn");
const cards = document.querySelectorAll(".destination-card")
const tabContainer = document.querySelector(".destinationTab")
const leftBtn =document.querySelector(".slider__btn--left");

const rightBtn =document.querySelector(".slider__btn--right");




let curSlide = 0;
let maxSlide = slides.length;

slides.forEach((slide,i)=>{
 slide.style.transform= `translateX(${100*i}%)`

});

const moveSlide= function(){

  slides.forEach((slide,i)=>{
   slide.style.transform =`translateX(${100*(i-curSlide)}%)`
  });

};

const moveRight = function(){
   curSlide++

   if(curSlide >= maxSlide){

  curSlide=0;
 }

  moveSlide();
};


//creating left slider click button

let moveLeft =function(){
    curSlide--;

    if(curSlide < 0){
    curSlide= maxSlide -1;
  }
    moveSlide();
};

rightBtn.addEventListener("click",moveRight);
leftBtn.addEventListener("click",moveLeft);

const ReviewSlider = document.querySelector(".Review_slider")
const innerSlider = document.querySelectorAll(".innerDiv")



innerSlider.forEach((img,i)=>{

 img.addEventListener("mouseover",()=>{

     img.style.flex ="5";

 });

 img.addEventListener("mouseout",()=>{

    img.style.flex ="1"
        img.style.backgroundColor ="pink"
    });
 });

 //TabComponent


 tabContainer.addEventListener ("click" , (e) =>{
    tabsBtn.forEach(tab=> tab.classList.remove("btnActive"))
cards.forEach(tab=> tab.classList.remove("operations__content--active"))
 let clicked =   e.target.closest(".tabBtn")

if (!clicked) return

clicked.classList.add("btnActive")


let meows=   document
    .querySelectorAll(`.operations__content--${clicked.dataset.tab}`)
    meows.forEach( meow => meow.classList.add('operations__content--active'))


 })

