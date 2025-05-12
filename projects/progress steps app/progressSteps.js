const progressEl = document.getElementById("progress");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
const circleEl = document.querySelectorAll("circle");

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    
    if(currentActive > circleEl.length){
        currentActive = circleEl.length
    }

    update()
});

prevEl.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }

    update()
})