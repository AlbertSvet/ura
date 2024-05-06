new Swiper('.recommended__slider',{
    navigation: {
        nextEl: '.recommended__right',
        prevEl: '.recommended__left',
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

//====чекбокс
const checkboxes = document.querySelectorAll('.checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        checkboxes.forEach(cb => {
            if (cb !== this) {
                cb.checked = false;
            }
        });
    });
});

// // Бургер-меню
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
const startBtn = document.querySelectorAll('.card__link');
startBtn.forEach(el =>{
    el.addEventListener('mouseover', () =>{
        const startItem = el.closest('.card');
        const startTitel = el.closest('.card').querySelector('.card__subtitel');       
        const startTime = el.closest('.card').querySelector('.card__time');       
        const startReception = el.closest('.card').querySelector('.card__reception');       
        if (startItem) {
            startItem.style.border = '1px solid #1b4015';
            startTitel.style.color = '#1b4015';            
            startTime.style.color = '#1b4015';            
            startReception.style.color = '#1b4015';            
        }
    })
    el.addEventListener('mouseout', () => {
        const startItem = el.closest('.card');
        const startTitel = el.closest('.card').querySelector('.card__subtitel');       
        const startTime = el.closest('.card').querySelector('.card__time');       
        const startReception = el.closest('.card').querySelector('.card__reception');   
        if (startItem) {
            startItem.style.border = '1px solid #e99c54';
            startItem.style.border = '1px solid #e99c54';
            startTitel.style.color = '#e99c54';            
            startTime.style.color = '#e99c54';            
            startReception.style.color = '#e99c54';    
            
        }
    });
})