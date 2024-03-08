const clouds = document.querySelector(".cloud-1")
let interval;

function rain(){
    let drop = document.createElement("div");
    drop.classList.add("drop");
    let left = Math.floor(Math.random() * 360);
    let width = Math.floor(Math.random() * 10) + 1;
    let height = Math.floor(Math.random() * 10) + 1;
    clouds.append(drop);

    drop.style.left = `${left}px`;
    drop.style.width = `${width}px`;
    drop.style.height = `${height}px`;
    
    setTimeout(() => {
        clouds.removeChild(drop);
    }, 1500);
}


interval = setInterval(() => {
    rain();
}, 150);
