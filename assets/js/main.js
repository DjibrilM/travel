const navMenu = document.querySelector('#nav_menu');
const navToggle = document.querySelector('#nav_toggle');
const navClose = document.querySelector('#nav_close');

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })

}

const navlink = document.querySelectorAll('.nav_link');

function linkAction (){
    navMenu.classList.remove('show-menu')
}

navlink.forEach(element => {
    element.addEventListener('click', linkAction);
});



// hedaerScroll

function scrollheader (){

    const header = document.getElementById('header');

if(this.scrollY >= 100)
{
    header.classList.add('scroll-header')
    console.log('it run')
}else{
    header.classList.remove('scroll-header') 
}

}

window.addEventListener('scroll',scrollheader)

//CREATION OF THE SWIPPER_AREA

let swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 22,
    coverflowEffect: {
        rotate: 0,
    },
})


//======VIEDEO_PLAYER=============

const videoFile = document.querySelector('#video-file'), 
videButton = document.querySelector('.video_button'),
videoIcon = document.querySelector('#video_icon');


function playPause () {
    if(videoFile.paused){
        //play video
videoFile.play();
        //we change the icon
        videoIcon.src = 'assets/img/pause.svg';
    }else
    {
        videoIcon.src = 'assets/img/play.svg';
        videoFile.pause();
    }
}



videButton.addEventListener('click',playPause );

//==== END OF THE VIDEO ====

function finalVideo ()
{
    videoIcon.src = 'assets/img/play.svg';
}
videoFile.addEventListener('ended',finalVideo)


// ============== SHOW THE SCEOLL TOP ===========

function scroll(){
  const scrollUp =   document.querySelector('#scrollup');
if(this.scrollY >= 200 ){
    scrollUp.classList.add('show-scroll')
}else{
    scrollUp.classList.remove('show-scroll')
}
}

window.addEventListener('scroll', scroll);



// ====================== CONSTRUCTION OF THE LINK =====================


  const link = document.querySelectorAll('.nav_link');
const navLInk1 = link[0];
const navLInk2 = link[1];
const navLInk3 = link[2];
const navLInk4 = link[3];
const topButton = document.querySelector('#scrollup')

navLInk1.classList.add('link_actived')

const scrollTohome = ()=>{
    const Homesection = document.getElementById('home-templete')
    Homesection.scrollIntoView({behavior:'smooth'})


    if(navLInk2.className.includes('link_actived') ||navLInk3.className.includes('link_actived') || navLInk4.className.includes('link_actived')){
        navLInk1.classList.add('link_actived');

        navLInk2.classList.remove('link_actived');
        navLInk3.classList.remove('link_actived');
        navLInk4.classList.remove('link_actived');
    }
    

}
// =================================================
const scrollToAbout = ()=>{
    const aboutsection = document.getElementById('about')
    aboutsection.scrollIntoView({behavior:'smooth'});


    if(navLInk1.className.includes('link_actived') ||navLInk3.className.includes('link_actived') || navLInk4.className.includes('link_actived')){
        navLInk2.classList.add('link_actived');

        navLInk1.classList.remove('link_actived');
        navLInk3.classList.remove('link_actived');
        navLInk4.classList.remove('link_actived');
    }
    
}
// =================================================
const scrollToDiscover = ()=>{
    const Discoversection = document.getElementById('discover')
    Discoversection.scrollIntoView({behavior:'smooth'})

    if(navLInk1.className.includes('link_actived') ||navLInk2.className.includes('link_actived') || navLInk4.className.includes('link_actived')){
        
        navLInk3.classList.add('link_actived');

        navLInk1.classList.remove('link_actived');
        navLInk2.classList.remove('link_actived');
        navLInk4.classList.remove('link_actived');
    }
}
// =================================================

const scrollToPlace = ()=>{
    const placesection = document.getElementById('place')
    placesection.scrollIntoView({behavior:'smooth'})

    if(navLInk1.className.includes('link_actived') ||navLInk2.className.includes('link_actived') || navLInk3.className.includes('link_actived')){
        
        navLInk4.classList.add('link_actived');

        navLInk1.classList.remove('link_actived');
        navLInk2.classList.remove('link_actived');
        navLInk3.classList.remove('link_actived');
    }
}
navLInk1.addEventListener('click',scrollTohome);
navLInk2.addEventListener('click',scrollToAbout);
navLInk3.addEventListener('click',scrollToDiscover);
navLInk4.addEventListener('click',scrollToPlace);
topButton.addEventListener('click',scrollTohome)


// ==================== END OF THESCROLLING =====================


//- ===== SRCOLL REVEAL ANIMATION ==========

const sr = ScrollReveal({
    distance:'70px',
    duration: 2600,
    reset:true,
})

sr.reveal(`.home_data , .home_info ,  .discover_container ,.experience_container , .place_container ,.sponsor_container , .footer_right, footer, .footer_content`   ,{
    origin:'top',
    interval:3000
})



sr.reveal(`.home_social-link , .video_description`,{
    origin:'top',
    interval:3000
})

sr.reveal(`.about_data , .subscribe_description`,{
    origin:'left',
})


sr.reveal(`.about_img_overlay, .video_content , .subscribe_form`,{
    origin:'right',
    interval:'100'

})




