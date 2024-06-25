/* menu burger*/
const menu =  document.querySelector('.mainMenu')
const burgerButton = document.querySelector('.hamburger')

burgerButton.addEventListener('click', function(){
  menu.classList.toggle('isVisible')
  burgerButton.classList.toggle('is-active')
})

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