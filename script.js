document.getElementById("offer-close").addEventListener("click", function () {
  let offercontainer = document.querySelector(".offer-bar");
  offercontainer.style.display = "none";
});

// SideNavBar Functionality
document
  .getElementById("side-navbar-activate")
  .addEventListener("click", function () {
    let sideNavbar = document.querySelector(".side-navbar");
    sideNavbar.style.marginRight = "0";
  });
document
  .getElementById("side-navbar-close")
  .addEventListener("click", function () {
    let sideNavbar = document.querySelector(".side-navbar");
    sideNavbar.style.marginRight = "-50%";
  });

// slider functionality

let sliderLeftButton = document.getElementById("slider-left-activate");
let sliderRightButton = document.getElementById("slider-right-activate");
let sliderImageContainer = document.querySelector(".slider-image-container");
let sliderImages = document.querySelectorAll(".slider-image");
let currentIndex = 0; // Track the current image index

sliderRightButton.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= sliderImages.length) {
    currentIndex = 0; // Loop back to the first image
  }
  sliderImageContainer.style.marginLeft = `-${currentIndex * 100}vw`;
});

sliderLeftButton.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliderImages.length - 1; // Loop back to the last image
  }
  sliderImageContainer.style.marginLeft = `-${currentIndex * 100}vw`;
});


// scrollAnimate Functionality

window.addEventListener("scroll",function(){
  let elements = this.document.querySelectorAll(".initial-scroll-animate")
  elements.forEach((el)=>{
      windowHeight = window.innerHeight
   let elbound = el.getBoundingClientRect()
 

   console.log(windowHeight)
   console.log(elbound.top)
   if(windowHeight>elbound.top-100){
  el.classList.remove("reveal-scroll-animate")

  }
  
})
  
})