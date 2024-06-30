/* menu burger*/
const menu =  document.querySelector('.mainMenu')
const burgerButton = document.querySelector('.hamburger')

burgerButton.addEventListener('click', function(){
  menu.classList.toggle('isVisible')
  burgerButton.classList.toggle('is-active')
})

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

/* batch cooking scroll and pop up */
/* recepies slider and pop up */
const sliderContainer = document.querySelector(".sliderContainer")
const slides = document.querySelectorAll('.slide')
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const paginationContainer = document.querySelector(".pagination")
let currentSlide = 0
let dots = []
let sliderInterval = setInterval (
    function() {
        currentSlide++
        if (currentSlide === slides.length) {
           currentSlide = 0 
        }
        sliderContainer.style.transform = `translateX(${-960*currentSlide}px)`
        updatePagination()
    },
3000
)

prev.addEventListener('click', function(){
    currentSlide--
    if (currentSlide < 0) {
        currentSlide = slides.length - 1
    }
    sliderContainer.style.transform = `translateX(${-960*currentSlide}px)`
    updatePagination()
})

next.addEventListener('click', function(){
    currentSlide++
    if (currentSlide === slides.length) {
       currentSlide = 0 
    }
    sliderContainer.style.transform = `translateX(${-960*currentSlide}px)`
    updatePagination()
})

sliderContainer.addEventListener('mouseover', function(){
    clearInterval(sliderInterval)
})

sliderContainer.addEventListener('mouseout', function(){
    sliderInterval = setInterval (
        function() {
            currentSlide++
            if (currentSlide === slides.length) {
               currentSlide = 0 
            }
            sliderContainer.style.transform = `translateX(${-960*currentSlide}px)` 
        },
    3000
    )
})

for (let i = 0; i < slides.length; i++){
    let dot = document.createElement('span')
    dot.classList.add('dot')
   // dots.setAttribute('data-slide', i)
    paginationContainer.appendChild(dot)
    dots.push(dot)

    dot.addEventListener('click', function(){
        currentSlide = i
        sliderContainer.style.transform = `translateX(${-960*currentSlide}px)`
        updatePagination()
    })
}

function updatePagination() {
    for(let j = 0; j < dots.length; j++) {
        if (j === currentSlide) {
            dots[j].classList.add('active')
        } else {
            dots[j].classList.remove('active')
        }
    }
}

updatePagination()

/**** landing page ****/
/* hero animation hover*/
/////spoon
let spoon__animation = document.querySelector('.hero__spoon__artifice__content');
let blockSpoon = document.getElementById('spoonHero'); 

let spoonPlay = lottie.loadAnimation({
    container: spoon__animation,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "../dist/lotti/spoon_artifice.json"
});

blockSpoon.addEventListener('mouseenter', function() {
  spoonPlay.playSegments([0,121],true);
});

blockSpoon.addEventListener('mouseleave', function() {
  spoonPlay.playSegments([120,121],true);
});

/////tupp
let tupp__animation = document.querySelector('.hero__tupp__content');
let blockTupp = document.getElementById('tuppHero'); 

let tuppPlay = lottie.loadAnimation({
    container: tupp__animation,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "../dist/lotti/tupp.json"
});

/*
blockTupp.addEventListener('mouseenter', function() {
  tuppPlay.playSegments([0,74],true);
});

blockTupp.addEventListener('mouseleave', function(){
  tuppPlay.playSegments([73,74],true);
})*/

tuppPlay.addEventListener('DOMLoaded', function() {

  tuppPlay.playSegments([73,74],true);

  blockTupp.addEventListener('mouseenter', function(){
    tuppPlay.playSegments([0,74],true);
  })

  blockTupp.addEventListener('mouseleave', function(){
    tuppPlay.playSegments([73,74],true);
  })

});

/* categories animations */
/////step 1
let step1__animation = document.querySelector('.step1');
let blockStep1 = document.getElementById('step1__container'); 

let step1Play = lottie.loadAnimation({
    container: step1__animation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    prerender: true,
    path: "../dist/lotti/step1_chat_image.json"
});

blockStep1.addEventListener('mouseenter', function(){
  step1Play.setDirection(1);
  step1Play.goToAndStop(0, true);
  step1Play.play();
});

blockStep1.addEventListener('mouseleave', function(){
  step1Play.setDirection(-1);
  step1Play.play();
});

/////step 2
let step2__animation = document.querySelector('.step2');
let blockStep2 = document.getElementById('step2__container'); 

let step2Play = lottie.loadAnimation({
    container: step2__animation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    prerender: true,
    path: "../dist/lotti/step2_documents_image.json"
});

blockStep2.addEventListener('mouseenter', function(){
  step2Play.setDirection(1);
  step2Play.goToAndStop(0, true);
  step2Play.play();
});

blockStep2.addEventListener('mouseleave', function(){
  step2Play.setDirection(-1);
  step2Play.play();
});

/////step 3
let step3__animation = document.querySelector('.step3');
let blockStep3 = document.getElementById('step3__container'); 

let step3Play = lottie.loadAnimation({
    container: step3__animation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    prerender: true,
    path: "../dist/lotti/step_3_clickSave_image.json"
})

blockStep3.addEventListener('mouseenter', function(){
  step3Play.setDirection(1);
  step3Play.goToAndStop(0, true);
  step3Play.play();
});

blockStep3.addEventListener('mouseleave', function(){
  step3Play.setDirection(-1);
  step3Play.play();
});

/////step 4
let step4__animation = document.querySelector('.step4');
let blockStep4 = document.getElementById('step4__container'); 

let step4Play = lottie.loadAnimation({
    container: step4__animation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    prerender: true,
    path: "../dist/lotti/step4_sac_image.json"
})

blockStep4.addEventListener('mouseenter', function(){
  step4Play.setDirection(1);
  step4Play.goToAndStop(0, true);
  step4Play.play();
});

blockStep4.addEventListener('mouseleave', function(){
  step4Play.setDirection(-1);
  step4Play.play();
});

/////step 5
let step5__animation = document.querySelector('.step5');
let blockStep5 = document.getElementById('step5__container'); 

let step5Play = lottie.loadAnimation({
    container: step5__animation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    prerender: true,
    path: "../dist/lotti/step5_tupp_image.json"
})

blockStep5.addEventListener('mouseenter', function(){
  step5Play.setDirection(1);
  step5Play.goToAndStop(0, true);
  step5Play.play();
});

blockStep5.addEventListener('mouseleave', function(){
  step5Play.setDirection(-1);
  step5Play.play();
});

/////step 6
let step6__animation = document.querySelector('.step6');
let blockStep6 = document.getElementById('step6__container'); 

let step6Play = lottie.loadAnimation({
    container: step6__animation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    prerender: true,
    path: "../dist/lotti/step6_spoon_image.json"
})

blockStep6.addEventListener('mouseenter', function(){
  step6Play.setDirection(1);
  step6Play.goToAndStop(0, true);
  step6Play.play();
});

blockStep6.addEventListener('mouseleave', function(){
  step6Play.setDirection(-1);
  step6Play.play();
});

/* about animations */
let fouet__animation = document.querySelector('.fouet_chargement_creme');
/*let blockFouet = document.getElementById('fouetAbout'); */

let fouetPlay = lottie.loadAnimation({
    container: fouet__animation,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    prerender: true,
    path: "../dist/lotti/chargement_icon_creme.json"
});

/*
blockFouet.addEventListener('mouseenter', function() {
  fouetPlay.playSegments([0,74],true);
});

blockFouet.addEventListener('mouseleave', function(){
  fouetPlay.playSegments([73,74],true);
})*/



/* FAQ */
const faqItems = document.querySelectorAll('.faq__item')
const responses = document.querySelectorAll('.answer')

responses.forEach(element => {
  element.setAttribute('data-height', element.offsetHeight);
  element.style.height = 0
})

faqItems.forEach((element, index) => {
element.addEventListener('click', function () {
  if (element.classList.contains('active')) {
    element.classList.remove('active')
    responses[index].style.height= 0
  } else {
    element.classList.add('active')
    responses[index].style.height= `${responses[index].getAttribute('data-height')}px`
  }

  faqItems.forEach((el, index2) => {
    if (element != el) {
      el.classList.remove('active')
      responses[index2].style.height= 0
    }
  })
})
})

/* before footer cta */
///// fiche
let fiche__animation = document.querySelector('.footer__cta__fiche');
let blockFiche = document.getElementById('cta__footer');
let blockFicheBtn = document.getElementById('cta__footer__btn');

let fichePlay = lottie.loadAnimation({
    container: fiche__animation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    prerender: true,
    path: "../dist/lotti/fiche_recette_button.json"
})

blockFiche.addEventListener('mouseenter', function(){
  fichePlay.setDirection(1);
  fichePlay.goToAndStop(0, true);
  fichePlay.play();
});

blockFiche.addEventListener('mouseleave', function(){
  fichePlay.setDirection(-1);
  fichePlay.play();
});

blockFicheBtn.addEventListener('mouseenter', function(){
  fichePlay.setDirection(1);
  fichePlay.goToAndStop(0, true);
  fichePlay.play();
});

blockFicheBtn.addEventListener('mouseleave', function(){
  fichePlay.setDirection(-1);
  fichePlay.play();
});

///// spoon
let spooncta__animation = document.querySelector('.footer__cta__spoon');
let blockSpooncta = document.getElementById('cta__footer');
let blockSpoonBtn = document.getElementById('cta__footer__btn');

let spoonctaPlay = lottie.loadAnimation({
    container: spooncta__animation,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    prerender: true,
    path: "../dist/lotti/spoon_articfice_button.json"
})

blockSpooncta.addEventListener('mouseenter', function(){
  spoonctaPlay.setDirection(1);
  spoonctaPlay.goToAndStop(0, true);
  spoonctaPlay.play();
});

blockSpooncta.addEventListener('mouseleave', function(){
  spoonctaPlay.setDirection(-1);
  spoonctaPlay.play();
});

blockSpoonBtn.addEventListener('mouseenter', function(){
  spoonctaPlay.setDirection(1);
  spoonctaPlay.goToAndStop(0, true);
  spoonctaPlay.play();
});

blockSpoonBtn.addEventListener('mouseleave', function(){
  spoonctaPlay.setDirection(-1);
  spoonctaPlay.play();
});
