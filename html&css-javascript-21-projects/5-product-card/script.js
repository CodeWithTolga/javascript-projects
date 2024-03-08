const image_box = document.querySelector(".inner-image");
const images = document.querySelectorAll(".inner-image .image");
const color_box = document.querySelectorAll(".select-option li");
const price = document.querySelector(".price span");

const descriptionBx = document.querySelector(".title-box");
const description = descriptionBx.querySelector(".title-box span");

const information = [
  {
    index: 0,
    price: "250",
    description: "air jordan 1 mid white",
    bg_color: "#fff",
    color:"#5291ff"
  },
  {
    index: 1,
    price: "180",
    description: "air jordan 1 mid black line",
    bg_color: "#454545",
    color:"#fff"
  },
  {
    index: 2,
    price: "150",
    description: "air jordan 1 mid blue",
    bg_color: "#585ed5",
    color:"#fff"
  },
  {
    index: 3,
    price: "145",
    description: "air jordan 1 mid yellow",
    bg_color: "#ffb700",
    color:"#fff"
  },
  {
    index: 4,
    price: "120",
    description: "air jordan 1 mid red",
    bg_color: "#f00",
    color:"#292929"
  },
  {
    index: 5,
    price: "100",
    description: "air jordan 1 mid black",
    bg_color: "#292929",
    color:"#ffb700"
  },
];

let index = 0;
let length = image_box[index];
color_box.forEach((color, i) => {
  information.find((item) => {
    if(item.index == i){
        (price.textContent = item.price);
        (description.textContent = item.description);
        (descriptionBx.style.backgroundColor = item.bg_color);
        (descriptionBx.style.color = item.color);
    }
  });
  color.addEventListener("click", () => {
    index = i;
    information.find((item) => {
        if(item.index == i){
            (price.textContent = item.price);
            (description.textContent = item.description);
            (descriptionBx.style.backgroundColor = item.bg_color);
            (descriptionBx.style.color = item.color);
        }
      });
    image_box.style.transform = `translateY(-${index * 300}px)`;
  });
});
