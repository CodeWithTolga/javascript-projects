const ul = document.querySelector("ul");
const li = document.querySelectorAll("ul li");

let index = 0;
setInterval(() => {
    index++;
    let deg = (li[index]);
    if(index >= ul.children.length - 1){
        index = 0;
    }
    ul.style.transform = `translateX(-${index * 100}vw)`;
    console.log(deg);
}, 2000);