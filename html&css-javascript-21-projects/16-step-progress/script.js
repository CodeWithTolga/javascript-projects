const stepProgress = document.querySelector(".progress .progress-bar");
const stepBoxes = document.querySelectorAll(".step-box");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


let index = 0;
let equal = stepBoxes[index];
const updateProgress = (100 / (stepBoxes.length - 1));
nextBtn.addEventListener("click", () => {
    if(index <= stepBoxes.length - 1){
       index++;
       prevBtn.style.pointerEvents = "auto";
       stepProgress.style.width = `${index * updateProgress}%`;
    }
    if(index == stepBoxes.length - 1){
        nextBtn.style.pointerEvents = "none";
    }
    prevBtn.style.pointerEvents == "auto"
});

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        nextBtn.style.pointerEvents = "auto";
        stepProgress.style.width = `${index * updateProgress}%`;
    }
    if(index == 0){
        prevBtn.style.pointerEvents = "none";
    }
});