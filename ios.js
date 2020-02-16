let iosjs = document.querySelector('.iosjs');

function scrolliosjs() {
    let scrollTop = document.documentElement.scrollTop;
    iosjs.style.transform = 'translateY(' + scrollTop * -0.3 + 'px)';
}
window.addEventListener('scroll', scrolliosjs);