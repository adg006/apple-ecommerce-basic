/*** COMMON JS ***/

document.querySelectorAll('.watch-control, .controls a, .iphone-btn').forEach( (control) => {
    control.addEventListener('click', (event) => {
        event.preventDefault();
    });
});

/*** CUBE CONROLLER ***/

const cube = document.querySelector('.cube');
const controls = document.querySelector('.controls');

let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;

const topXControl = document.querySelector('.top-x-control');
const bottomXControl = document.querySelector('.bottom-x-control');
const leftYControl = document.querySelector('.left-y-control');
const rightYControl = document.querySelector('.right-y-control');
const topZControl = document.querySelector('.top-z-control');
const bottomZControl = document.querySelector('.bottom-z-control');

topXControl.addEventListener('click', () => {
    cube.style.transform = `rotateX(${x += 20 }deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

bottomXControl.addEventListener('click', () => {
    cube.style.transform = `rotateX(${x -= 20 }deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

leftYControl.addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y -= 20 }deg) rotateZ(${z}deg)`;
});

rightYControl.addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y += 20 }deg) rotateZ(${z}deg)`;
});

topZControl.addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z += 20 }deg)`;
});

bottomZControl.addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z -= 20 }deg)`;
});

const playPause = () => {
    if(bool) {
        interval = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y += 10 }deg) rotateZ(${z}deg)`;
        }, 1000 ); 
    } else {
        clearInterval(interval);
    }
    
}

playPause();

controls.addEventListener('mouseover', () => {
    bool = false;
    playPause();
});

controls.addEventListener('mouseout', () => {
    bool = true;
    playPause();
});

/*** SLIDESHOW ***/

const slideShowDivs = () => {
    for(i = 1; i <= 5; i++) { 
        const div = document.createElement('div');
        div.style.backgroundImage = `url(img/slideshow/section-1-bg-${i}.jpg)`;
        i === 1 && div.classList.add('active');
        document.querySelector('.slideshow').appendChild(div);
    }
};

slideShowDivs();

const divs = document.querySelectorAll('.slideshow div');
let a = 1;

const slideShow = () => {
    setInterval( () => {
        a++;
        const div = document.querySelector('.slideshow .active');
        div.classList.remove('active');

        if(a < divs.length) {
            div.nextElementSibling.classList.add('active');
        } else {
            divs[0].classList.add('active');
            a = 1;
        }
    }, 20000 );
}

slideShow();

/*** MACBOOK SCROLL EVENT ***/

const section3Content = document.querySelector('.section-3-content');

window.addEventListener('scroll', () => {
    if(window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add('change');
    }
});

/*** WATCH  ***/

const watchBands = document.querySelector('.watch-bands');
const watchCases = document.querySelector('.watch-cases');

const watchTopControl = document.querySelector('.watch-top-control');
const watchBottomControl = document.querySelector('.watch-bottom-control');
const watchRightControl = document.querySelector('.watch-right-control');
const watchLeftControl = document.querySelector('.watch-left-control');


let axisX = 0;
let axisY = 0;

const hideControl = () => {
    if(axisY === 280) {
        watchTopControl.classList.add('hideControl');
    } else {
        watchTopControl.classList.remove('hideControl');
    }

    if(axisY === -280) {
        watchBottomControl.classList.add('hideControl');
    } else {
        watchBottomControl.classList.remove('hideControl');
    }

    if(axisX === 280) {
        watchRightControl.classList.add('hideControl');
    } else {
        watchRightControl.classList.remove('hideControl');
    }

    if(axisX === -280) {
        watchLeftControl.classList.add('hideControl');
    } else {
        watchLeftControl.classList.remove('hideControl');
    }
}

watchTopControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 70}rem`;
    hideControl();
});

watchBottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`;
    hideControl();
});

watchRightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX += 70}rem`;
    hideControl();
});

watchLeftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX -= 70}rem`;
    hideControl();
});