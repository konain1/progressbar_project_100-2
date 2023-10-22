
const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

let currentActive = 1;
console.log(circles)

next.addEventListener('click',()=>{
    currentActive++;

    if(currentActive > circles.length){
        currentActive=circles.length;
    }
    updateActive()
})

prev.addEventListener('click',()=>{
    currentActive--;

    if(currentActive < 1){
        currentActive = 1
    }
    updateActive()
})

function updateActive(){

    circles.forEach((circle,idx)=>{
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    let active = document.querySelectorAll('.active')

    progress.style.width = (active.length-1) / (circles.length-1)*100 + '%'; 

    if(currentActive == 1){
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false;
        next.disabled= false;
    }
}