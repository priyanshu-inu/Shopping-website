// for navbar start 


const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}


if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// end 



// for single product image 

// start 

let miniImages = document.getElementById('main-big-image');
let small = document.getElementsByClassName('small-images');

small[0].onclick = function(){
    miniImages.src = small[0].src;
}
small[1].onclick = function(){
    miniImages.src = small[1].src;
}
small[2].onclick = function(){
    miniImages.src = small[2].src;
}
small[3].onclick = function(){
    miniImages.src = small[3].src;
}

// end 