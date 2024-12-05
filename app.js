const navBtn = document.querySelector('.nav-toggle');
const navDrop = document.querySelector('.nav-header');
const dropMenu = document.querySelector('.menu')
const dropBtn = document.querySelector('.fa-x');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const hero = document.querySelector('.hero');

const images = [ './pics/hero.webp', './pics/hero2.webp', './pics/hero3.webp' ];


let currentIndex = 1;

function changeImage() {
    hero.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}
// Change image every 5 seconds
setInterval(changeImage, 4000);




// drop down menu functionality
navBtn.addEventListener('click', function(){
    navDrop.classList.add('nav-off');
    main.classList.add('check');
    footer.classList.add('check');
    dropMenu.classList.add('drop-down');

});
dropBtn.addEventListener('click', function(){
    dropMenu.classList.remove('drop-down');
    main.classList.remove('check');
    footer.classList.remove('check');
    navDrop.classList.remove('nav-off');
})



