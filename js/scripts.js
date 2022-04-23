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
if(window.innerWidth < 1000){ // SCROLL TO VERSION MOBILE
  
  function scrollD1() {
    window.scrollTo({
      top: 3.6 * window.innerHeight,
      right: 0
    });
  }
  
  function scrollC1() {
    window.scrollTo({
      top: 5.6 * window.innerHeight,
      right: 0
    });
  }

}

if(window.innerWidth > 1227){ // SCROLL TO VERSION DESKTOP
function scrollA() {
  window.scrollTo({
    top: 0,
    right: 0,
    behavior: "smooth",
    easing : "ease-in"
  });
}

function scrollD() {
  window.scrollTo({
    top: 1.78 * window.innerWidth,
    right: 0,
    behavior: "smooth",
    easing : "ease-in"
  });
}

function scrollD1() {
  window.scrollTo({
    top: 1.78 * window.innerWidth,
    right: 0
  });
}

function scrollC() {
  window.scrollTo({
    top: 2.79 * window.innerWidth,
    right: 0,
    behavior: "smooth",
    easing : "ease-in-out"
  });
}

function scrollC1() {
  window.scrollTo({
    top: 2.79 * window.innerWidth,
    right: 0
  });
}
}


    function showSource() {
        document.getElementById('lasource').classList.toggle('active');
        document.getElementById('lasource').style.display = "block";
        document.getElementById("lasource").animate([
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

     function closeSource() {
        document.getElementById('lasource').classList.toggle('disabled');
        document.getElementById("lasource").animate([
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

function showEclo() {
    document.getElementById('eclothing').classList.toggle('active');
    document.getElementById('eclothing').style.display = "block";
    document.getElementById("eclothing").animate([
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

 function closeEclo() {
    document.getElementById('eclothing').classList.toggle('disabled');
    document.getElementById("eclothing").animate([
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

function showPort() {
  document.getElementById('portfolio').classList.toggle('active');
  document.getElementById('portfolio').style.display = "block";
  document.getElementById("portfolio").animate([
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

function closePort() {
  document.getElementById('portfolio').classList.toggle('disabled');
  document.getElementById("portfolio").animate([
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

function showThm() {
  document.getElementById('thm').classList.toggle('active');
  document.getElementById('thm').style.display = "block";
  document.getElementById("thm").animate([
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

function closeThm() {
  document.getElementById('thm').classList.toggle('disabled');
  document.getElementById("thm").animate([
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

function showCrypto() {
  document.getElementById('crypto').classList.toggle('active');
  document.getElementById('crypto').style.display = "block";
  document.getElementById("crypto").animate([
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

function closeCrypto() {
  document.getElementById('crypto').classList.toggle('disabled');
  document.getElementById("crypto").animate([
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

function showKey() {
  document.getElementById('keylogger').classList.toggle('active');
  document.getElementById('keylogger').style.display = "block";
  document.getElementById("keylogger").animate([
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

function closeKey() {
  document.getElementById('keylogger').classList.toggle('disabled');
  document.getElementById("keylogger").animate([
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
let Largeur2 = 2.77 * window.innerWidth;
let Largeur3 = 3.77 * window.innerWidth;

// console.log(viewportHeight, Largeur);

window.onscroll = function() {
    var nav = document.getElementById('sidebar');
    if ( window.pageYOffset > Largeur) {
        nav.classList.add("scroll");
    } else {
        nav.classList.remove("scroll");
    } if ( window.pageYOffset > Largeur1 ) {
        nav.classList.remove("scroll");
} if ( window.pageYOffset > Largeur2) {
  nav.classList.add("scroll1");
} else {
  nav.classList.remove('scroll1');
} if ( window.pageYOffset > Largeur3) {
  nav.classList.remove('scroll1')
}
}