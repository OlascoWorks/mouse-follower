let follower = document.querySelector('#follower');
let container = document.querySelector('.container');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let input = document.querySelector('#input');
let initialX;
let initialY;

function changeToLeft() {
    follower.style.width = '20px';
    follower.style.height = '20px';
    follower.style.backgroundColor = 'white';
};

function changeToRight() {
    follower.style.width = '40px';
    follower.style.height = '40px';
    follower.style.backgroundColor = 'black';
};

window.addEventListener('mousemove', (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    follower.style.transform = `translate(${mouseX +(follower.clientWidth/2)}px, ${mouseY -(follower.clientHeight/2)}px)`;
    if (mouseX > (left.clientWidth + (follower.clientWidth/3))) {
        changeToRight();
    } else if (mouseX < (left.clientWidth - (follower.clientWidth/3))) {
        changeToLeft();
    };
});

input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter' && input.value == 'I am da best') {
        window.location = 'https://youtu.be/dQw4w9WgXcQ?si=UoF2hUO7sEtVWIHo'
    };
})