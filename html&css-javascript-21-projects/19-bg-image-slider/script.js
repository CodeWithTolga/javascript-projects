const body = document.body;
const ul = document.querySelector("ul");
const li = document.querySelectorAll("ul li");
const images = document.querySelectorAll("ul li img");
let index = 0;


const bgColors = [
    "#6c2929",
    "#6461f6",
    "#343452",
    "#3c348f",
    "#292929",
    "#1f223c",
    "#040404",
    "#b80606",
    "#864eff",
    "#5e1916",
    "#027d31"
];

const bodyBG = () => {
  body.style.backgroundColor = bgColors[index];
}

const bodySetting = () => {
    body.style.backgroundImage = `url(${images[index].src})`;
    li.forEach(item => item.classList.remove("active"));
    li[index].classList.add("active");
  bodyBG();
}
setInterval(() => {
  bodySetting(); // Önce resmi ayarla
  ul.style.transform = `translateX(-${index * 50}vw)`;
  index++; 
  if(index > li.length - 1) index = 0;
}, 2000);

bodySetting(); // İlk olarak başlangıçta bir resim ayarla
