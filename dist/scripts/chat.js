/**** chat gustus ****/
/* chat gustus overview */
/* profil delete */
document.addEventListener('DOMContentLoaded', function () {
    const deleteIcons = document.querySelectorAll('.delete-icon-profil');
  
    deleteIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const container = this.closest('.other__container__left__profil__content__carteProfil');
            if (container) {
                container.remove();
            }
        });
    });
  });
  
  /* batch pop up */
  document.addEventListener('DOMContentLoaded', function() {
    const openOverlayIcon = document.querySelector('.open-overlay-batchCooking-icon');
    const batchCookingVignette = document.querySelector('.batchCooking__vignette');
  
    if (openOverlayIcon && batchCookingVignette) {
        openOverlayIcon.addEventListener('click', function() {
            batchCookingVignette.classList.toggle('show');
        });
    }
  });
  
  /* recepies slider and pop up */
  const sliderContainer = document.querySelector(".sliderContainer");
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let currentSlide = 0;
  
  prev.addEventListener('click', function(){
      currentSlide--;
      if (currentSlide < 0) {
          currentSlide = slides.length - 1;
      }
      sliderContainer.style.transform = `translateX(${-100 * currentSlide}%)`;
  });
  
  next.addEventListener('click', function(){
      currentSlide++;
      if (currentSlide === slides.length) {
          currentSlide = 0;
      }
      sliderContainer.style.transform = `translateX(${-100 * currentSlide}%)`;
  });
  