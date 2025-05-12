const progressEl = document.getElementById("progress");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
const circleEl = document.querySelectorAll(".circle");

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

function update(){
    circleEl.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active')
        };
    });

    const activesEl = document.querySelectorAll(".active");
    progressEl.style.width = (activesEl.length - 1) / (circleEl.length - 1) * 100 + '%';

    if (currentActive === 1){
        prevEl.disabled = true;
    } else if (currentActive === circleEl.length){
        nextEl.disabled = true;
    } else {
        prevEl.disabled = false;
        nextEl.disabled = false;
    }
}