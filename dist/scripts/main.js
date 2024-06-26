/* menu burger*/
const menu =  document.querySelector('.mainMenu')
const burgerButton = document.querySelector('.hamburger')

burgerButton.addEventListener('click', function(){
  menu.classList.toggle('isVisible')
  burgerButton.classList.toggle('is-active')
})

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


/* before footer cta */



/**** chat gustus ****/
/* chat gustus overview */
/* calendar overview */
/* shopping list scroll */
/* profil scroll and delete */
/* batch cooking scroll and pop up */
/* recepies slider and pop up */