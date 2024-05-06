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

// табы
const tabsBtn = document.querySelectorAll('.map__btn');
const parentBtn = document.querySelector('.map__tabs');
const tabContent = document.querySelectorAll('.map__block');

function hidenContent () {
    tabContent.forEach(el =>{
        el.style.display = 'none';
        el.classList.remove('fade');
    })
    tabsBtn.forEach(btn =>{
        btn.classList.remove('active');
    })
}

function showContent (i = 0) {
    tabContent[i].style.display = 'block';
    tabContent[i].classList.add('fade');
    tabsBtn[i].classList.add('active');
}
hidenContent();
showContent();

parentBtn.addEventListener('click', (e) =>{
    if(e.target.classList.contains('map__btn')){
        tabsBtn.forEach((btn,i) =>{
            if(e.target == btn) {
                hidenContent();
                showContent(i);
            }
        })
    }
})