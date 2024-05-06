new Swiper('.read-also__slider',{
    navigation: {
        nextEl: '.read-also__right',
        prevEl: '.read-also__left',
    },
     slidesPerView:3,
     loop:true,
     spaceBetween:35,
     speed:200,
    //  centeredSlides: true,
    
     
   
    pagination: {
        el: '.reviews__pagination',
        type: 'bullets',
    }, 
    

    breakpoints: {
        0:{
            slidesPerView:1,
        },
        320: {
            slidesPerView:1,
            
        },
        480: {
            slidesPerView:1,
            
        },
        768: {
            slidesPerView:2,
        },
        992: {
            slidesPerView:3,
        }

    },

});


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


//====== hover для start-Item
const startBtn = document.querySelectorAll('.publications__btn');
startBtn.forEach(el =>{
    el.addEventListener('mouseover', () =>{
        const startItem = el.closest('.publications__item');
        const startblock = el.closest('.publications__block').querySelector('.publications__subTitel');       
        const startData = el.closest('.publications__block').querySelector('.publications__data');       
        const startPsixo = el.closest('.publications__block').querySelector('.publications__psixo');       
        if (startItem) {
            startItem.style.border = '1px solid #1b4015';
            startblock.style.background = '#1b4015';     
            startData.style.background = 'rgb(27, 64, 21,0.5)';       
            startPsixo.style.background = 'rgb(27, 64, 21,0.5)';       
        }
    })
    el.addEventListener('mouseout', () => {
        const startItem = el.closest('.publications__item');
        const startblock = el.closest('.publications__block').querySelector('.publications__subTitel'); 
        const startData = el.closest('.publications__block').querySelector('.publications__data');       
        const startPsixo = el.closest('.publications__block').querySelector('.publications__psixo');
        if (startItem) {
            startItem.style.border = '1px solid #e99c54';
            startblock.style.background = '#e99c54';
            startData.style.background = '#e99c5486';       
            startPsixo.style.background = '#e99c5486';
            
        }
    });
})
