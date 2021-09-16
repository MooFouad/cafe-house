let navBtn = document.querySelector('#nav-btn');
let navGrid = document.querySelector('#show');
let active = document.querySelector('.active')

navBtn.addEventListener('click', () =>{
    navGrid.classList.toggle('ul-items');
});
