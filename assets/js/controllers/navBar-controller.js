const header = document.querySelector('header');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const btnSubscribe = document.querySelector('.btn-subscribe');



export function init() {

    handleWindowScrollHeader();

    window.addEventListener('scroll', () => {
        handleWindowScrollHeader();
       
    })


}

function handleWindowScrollHeader() {
    let topDistance = body.getBoundingClientRect().top;
    console.log(topDistance)
    if(topDistance < -470){
        logo.classList.add('show-elements');
        btnSubscribe.classList.add('show-elements');
        header.style.background = "rgba(4, 8, 20, 1.0)";
    }else{
        logo.classList.remove('show-elements');
        btnSubscribe.classList.remove('show-elements');
        header.style.background = "rgba(4, 8, 20, 0)";
    }
}