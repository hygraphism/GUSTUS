/* menu burger*/
const menu =  document.querySelector('.mainMenu')
const burgerButton = document.querySelector('.hamburger')

burgerButton.addEventListener('click', function(){
  menu.classList.toggle('isVisible')
  burgerButton.classList.toggle('is-active')
})

/* hero animation hover*/
/////spoon
let spoon_animation = document.querySelector('.hero_spoon_artifice_content');
let blockSpoon = document.getElementById('spoonHero'); 

let spoonPlay = lottie.loadAnimation({
    container: spoon_animation,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: "../dist/lotti/spoon_artifice.json"
});

blockSpoon.addEventListener('mouseenter', function() {
  spoonPlay.play();
});

blockSpoon.addEventListener('mouseleave', function() {
  spoonPlay.pause();
});


/*
/////tupp
let icon_spotify_div = document.querySelector('.icon_spotify_play');

let animationiconplay = lottie.loadAnimation({
    container: icon_spotify_div,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    prerender: true,
    path: "dist/images/button/bouton_musique/musique.json"
});

let clicked3 = false;

icon_spotify_div.addEventListener('mouseenter', function() {
    let curFrame = animationiconplay.currentFrame;
    if(clicked3 == false){
        animationiconplay.playSegments([0,curFrame],true);
    }
})*/