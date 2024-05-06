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

//====табы

const tabsBtn = document.querySelectorAll('.personal-item__btn');
const tabsParent = document.querySelector('.personal-item__btnBlock');
const tabsContent = document.querySelectorAll('.personal__item-content');

function hideContent () {
    tabsContent.forEach(el =>{
        el.style.display = 'none';
    })
    tabsBtn.forEach(btn =>{
        btn.classList.remove('active');
    })
}
function showContent (i = 0) {
    tabsContent[i].style.display = 'block';
    tabsBtn[i].classList.add('active');
}
hideContent();
showContent();

tabsParent.addEventListener('click', (e) =>{
    if(e.target.classList.contains('personal-item__btn')){
        tabsBtn.forEach((btn, i) =>{            
            if(e.target == btn) {            
                hideContent();
                showContent(i);
            }
        })
    }
})