const cloudOne =  document.querySelector(".cloud-1");
const cloudTwo =  document.querySelector(".cloud-2");

let cloudOneWidth = 180;
let cloudTwoWidth = 300;

console.log(cloudOne, cloudTwo);

let interval;
function rain(cloud, wdth){
    let drop = document.createElement("div");
    drop.classList.add("drop");
    let left = Math.floor(Math.random() * wdth);
    cloud.append(drop);

    drop.style.left = `${left}px`;
    
    setTimeout(() => {
        cloud.removeChild(drop);
    }, 1500);
}


interval = setInterval(() => {
    rain(cloudOne, cloudOneWidth);
    rain(cloudTwo, cloudTwoWidth);
}, 150);

