new Swiper('.slider__body',{
    navigation: {
        nextEl: '.slider__right',
        prevEl: '.slider__left',
    },
     slidesPerView:3,
    //  loop:true,
     spaceBetween:35,
     speed:200,
    //  centeredSlides: true,
    
     
   
    pagination: {
        el: '.slider__pagination',
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
new Swiper('.reviews__slider',{
    navigation: {
        // nextEl: '.slider__right',
        // prevEl: '.slider__left',
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


// =============================================================================================================//
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

//==== accardion 

const triggerAccardion = document.querySelectorAll('.stages__item');
const btnAccardion = document.querySelectorAll('.stages__btn');
      triggerAccardion.forEach((btn,index) => {
        btn.addEventListener('click', (e) => {
            const accardionContent = e.currentTarget.querySelector('.stages__subBlock');
            
            if (accardionContent) {
                accardionContent.classList.toggle('active');
             
            }
            btnAccardion.forEach((el, i)  =>{
                if(index == i) {
                    el.classList.toggle('active');
                }
                
            })
        });
    });

//====== hover для start-Item
const startBtn = document.querySelectorAll('.start__button');
startBtn.forEach(el =>{
    el.addEventListener('mouseover', () =>{
        const startItem = el.closest('.start__item');
        const startText = el.closest('.start__item').querySelector('.start__subtext');
        const startData = el.closest('.start__item').querySelector('.start__timeData');
        const startTime = el.closest('.start__item').querySelector('.start__time');
        if (startItem) {
            startItem.style.border = '1px solid #1b4015';
            startText.style.color = '#1b4015';
            startData.style.color = '#1b4015';
            startTime.style.color = '#1b4015';
        }
    })
    el.addEventListener('mouseout', () => {
        const startItem = el.closest('.start__item');
        const startText = el.closest('.start__item').querySelector('.start__subtext');
        const startData = el.closest('.start__item').querySelector('.start__timeData');
        const startTime = el.closest('.start__item').querySelector('.start__time');
        if (startItem) {
            startItem.style.border = '1px solid #e99c54';
            startText.style.color = '#e99c54';
            startData.style.color = '#e99c54';
            startTime.style.color = '#e99c54';
        }
    });
})

//=====Tabs

const tabsBtn = document.querySelectorAll('.start__btn');
const tabsParent = document.querySelector('.start__blockBtn');
const tabsContent = document.querySelectorAll('.start__grid');

if (tabsBtn.length > 0 && tabsParent && tabsContent.length > 0) {
    function hidenContent() {
        tabsContent.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show');
            el.classList.remove('fade');
        });
        tabsBtn.forEach(i => {
            i.classList.remove('active');
        });
    }
    
    function showContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.add('fade');
        tabsBtn[i].classList.add('active');
    }
    
    hidenContent();
    showContent();
    
    tabsParent.addEventListener('click', (e) => {
        if (e.target.classList.contains('start__btn')) {
            tabsBtn.forEach((el, i) => {
                if (e.target == el) {
                    hidenContent();
                    showContent(i);
                }
            });
        }
    });
}
// ===Изображение модальное окно=====//
const imgPopup = document.createElement('div'),
      consultSection = document.querySelector('.consult'),
      bigImg = document.createElement('img');
      
      if(imgPopup && consultSection) {
        imgPopup.classList.add('popup');
        consultSection.appendChild(imgPopup);    
        imgPopup.appendChild(bigImg);
    
        imgPopup.style.justifyContent = 'center';
        imgPopup.style.alignItems= 'center';
        imgPopup.style.display = 'none';
        consultSection.addEventListener('click', (e) =>{
            e.preventDefault();
            if(e.target.classList.contains('pre')){
                imgPopup.style.display = 'flex';
                const path = e.target.getAttribute('src');
                bigImg.setAttribute('src', path);
                body.classList.add('lock');
            }
             if(e.target.matches('div.popup')){
                imgPopup.style.display = 'none';
                body.classList.remove('lock');
            }
        })  
    
      }

   
// =============================================================================================================//
// Анимация при скролле
// window.addEventListener('load', ()=>{


//     const animItems = document.querySelectorAll('._anim-items');

//     if (animItems.length > 0) {
//         window.addEventListener('scroll', animOnScroll);
//         function animOnScroll() {
//             for (let index = 0; index < animItems.length; index++) {
//                 const animItem = animItems[index];
//                 const animItemHeight = animItem.offsetHeight;
//                 const animItemOffset = offset(animItem).top;
//                 const animStart = 4;

//                 let animItemPoint = window.innerHeight - animItemHeight / animStart;

//                 if (animItemHeight > window.innerHeight) {
//                     animItemPoint = window.innerHeight - window.innerHeight / animStart;
//                 }

//                 if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                     animItem.classList.add('_active');
//                 } else {
//                     if (!animItem.classList.contains('_anim-no-hide')) {
//                         animItem.classList.remove('_active');
//                     }
//                 }
//             }
//         }
//         function offset(el) {
//             const rect = el.getBoundingClientRect(),
//                 scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//                 scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             return {
//                 top: rect.top + scrollTop, left: rect.left + scrollLeft
//             }
//         }
//     }

//     if (animItems.length > 0) {
//         setTimeout(() => {
//                 animOnScroll();
//             }, 500);
//     }
// })

// =============================================================================================================//


