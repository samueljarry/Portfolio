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

// SCROLL REVEAL

