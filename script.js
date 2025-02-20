const aboutMeBtn = document.querySelector(".about-me-btn")
const popUpContainer = document.querySelector(".popup-container")
const closeIconContainer = document.querySelector(".close-icon-container")
aboutMeBtn.addEventListener("click",()=>{
    popUpContainer.classList.toggle("active");
})
closeIconContainer.addEventListener("click",()=>{
    popUpContainer.classList.remove("active");
})
const sunLightIcon = document.getElementById("sun-light");
const moonLightIcon = document.getElementById("moon-light");
const body = document.body;

sunLightIcon.addEventListener("click", (e) => {
  e.preventDefault()
  body.classList.toggle("light-mode");
  sunLightIcon.style.display="none"
  moonLightIcon.style.display="block"
});

document.getElementById('latestWorkBtn').addEventListener('click', function() {
  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth'
  });
});



document.getElementById('toTopButton').addEventListener('click',()=> {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
window.addEventListener("click", (e) => {
    if (
      !popUpContainer.contains(e.target) &&
      e.target !== aboutMeBtn
    ) {
      popUpContainer.classList.remove("active");
    }
  });


    // Initialize Swiper 
    
    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    });