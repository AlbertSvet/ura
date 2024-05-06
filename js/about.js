// new Swiper('.philosophy__slider',{

//     direction: 'horizontal',
//     navigation: {
//         // nextEl: '.slider__right',
//         // prevEl: '.slider__left',
//     },
//      slidesPerView:3,
//      loop:true,
//      spaceBetween:23,
//      speed:300,
//      centeredSlides: true,
    
     
   
//     pagination: {
//         el: '.philosophy__pagin',
//         type: 'bullets',
//         clickable: true,
//     }, 
    

//     breakpoints: {
//         0:{
//             slidesPerView:1,
//         },
//         320: {
//             slidesPerView:1,
            
//         },
//         480: {
//             slidesPerView:1,
            
//         },
//         768: {
//             slidesPerView:3,
           
//         },
//         992: {
//             slidesPerView:3,
//             direction: "vertical",
//         }

//     },

// });


document.addEventListener("DOMContentLoaded", function() {
    let swiper = null;

    function setDirection() {
        let directionValue = window.innerWidth < 768 ? 'vertical' : 'horizontal';
        if (swiper) {
            swiper.params.direction = directionValue;
            swiper.destroy();
        }
        swiper = new Swiper('.philosophy__slider', {
            direction: directionValue,
            navigation: {
                nextEl: '.philosophy__next',
                prevEl: '.philosophy__back',
            },
            slidesPerView: 3,
            loop: true,
            spaceBetween: 23,
            speed: 300,
            centeredSlides: true,
            pagination: {
                el: '.philosophy__pagin',
                type: 'bullets',
                clickable: true,
            }, 
            breakpoints: {
                0:{
                    slidesPerView: 1,
                    direction: "horizontal",
                    spaceBetween:35,
                },
                650:{
                    slidesPerView: 2,
                    direction: "horizontal",
                    spaceBetween:35,
                },             
                768: {
                    slidesPerView: 3,
                    direction: "horizontal",
                    spaceBetween:35,
                },
                992: {
                    slidesPerView: 3,
                    direction: "vertical",
                }
            },
        });
    }

    setDirection();
    window.addEventListener('resize', setDirection);


// Бургер-меню
const btnBurger = document.querySelector('.icon-menu');
const contentMenu = document.querySelector('.header__menu');
// const headerBody = document.querySelector('.header__body');
const body = document.querySelector('body');
btnBurger.addEventListener('click',()=>{
    btnBurger.classList.toggle('active');
    contentMenu.classList.toggle('active');
    body.classList.toggle('lock');
});
});



