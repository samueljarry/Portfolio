if(window.innerWidth > 768){

// !!! HORIZONTAL INFINITE SCROLL !!! //

let sliderWrap = document.querySelector('#slider-ext');
let slider = document.querySelector('#slider');
let clonesWidth;
let sliderWidth;
let clones = [];
let disableScroll = false;
let scrollPos;

let items = [...document.querySelectorAll('.slider-section')];
let images = [...document.querySelectorAll('.section-img')];

//images.forEach((images, idx) => {
//    images.style.backgroundImage = `url(./images/${idx+1}.jpg)`
//})

items.forEach(item => {
    let clone = item.cloneNode(true);
    clone.classList.add('clone');
    slider.appendChild(clone);
    clones.push(clone);
})

function getClonesWidth(){
    let width = 1;
    clones.forEach(clone => {
        width += clone.offsetWidth;
    })
    return width;
}

function getScrollPos(){
    return window.scrollY;
}

function scrollUpdate(){

    // RETIRER LES COMMENTS POUR DESACTIVER LE PARALLAX SUR MOBILE
  //  if(window.innerWidth > 768){ //
  // sliderWrap.style.overflow = 'hidden'; //
    scrollPos = getScrollPos();
    if(clonesWidth + scrollPos >= sliderWidth){
        window.scrollTo({top: 1});
    }else if(scrollPos <= 0){
        window.scrollTo({top: sliderWidth - clonesWidth - 1})
    }

    slider.style.transform = `translateX(${-window.scrollY}px)`

    requestAnimationFrame(scrollUpdate)
  //  } //
  //      else { //
   //         sliderWrap.style.overflow = 'scroll'; //
   // }
}

window.addEventListener('resize', onLoad);

function onLoad(){
    calculateDimensions()
    document.body.style.height = `${sliderWidth}vh`
    window.scrollTo({top: 1});
    scrollUpdate();
}

function calculateDimensions(){

    sliderWidth = slider.getBoundingClientRect().width;
    clonesWidth = getClonesWidth();

}

onLoad()

}

function show() {
    document.getElementById('test').classList.toggle('active');
    }

    function showDiv() {
        document.getElementById('site1').classList.toggle('active');
        document.getElementById('site1').style.display = "block";
        document.getElementById("site1").animate([
            // étapes/keyframes
            { transform: 'translateY(-100vh)' },
            { transform: 'translateY(0vh)' }
          ], {
            // temporisation
            duration: 450,
            fill: "forwards",
            easing: "ease-in-out"
          });
          
     }

     function closeDiv() {
        document.getElementById('site1').classList.toggle('disabled');
        document.getElementById("site1").animate([
            // étapes/keyframes
            { transform: 'translateY(0vh)' },
            { transform: 'translateY(-100vh)' }
          ], {
            // temporisation
            duration: 450,
            fill: "forwards",
            easing: "ease-in-out"
          });

}

// NAVBAR COLOR

let Hauteur = window.innerHeight;
let Largeur = 0.97 * window.innerWidth;
let Largeur1 = 1.77 * window.innerWidth;

// console.log(viewportHeight, Largeur);

window.onscroll = function() {
    var nav = document.getElementById('sidebar');
    if ( window.pageYOffset > Largeur ) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    } if ( window.pageYOffset > Largeur1 ) {
        nav.classList.remove("scroll");
}
}

