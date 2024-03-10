const navBtn = document.querySelector('.nav-toggle');
const navDrop = document.querySelector('.nav-header');
const dropMenu = document.querySelector('.menu')
const dropBtn = document.querySelector('.fa-x');

navBtn.addEventListener('click', function(){
    navDrop.classList.add('nav-off');
    dropMenu.classList.add('drop-down')
});

dropBtn.addEventListener('click', function(){
    dropMenu.classList.remove('drop-down');
    navDrop.classList.remove('nav-off');
    

})

// dropBtn.addEventListener('click', function(){
//     dropMenu.classList.remove('.drop-down')
// })


