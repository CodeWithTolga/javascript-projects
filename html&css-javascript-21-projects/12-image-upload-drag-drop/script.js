const form = document.querySelector("form");
const input = form.querySelector("input");
const image = form.querySelector("img");

 
const displayImage = (file) => {
    let url = URL.createObjectURL(file);
    image.src = url;

    image.onload = () => {
        URL.revokeObjectURL(url);
    }
}

const imageSetting = () => {
     input.onchange = (e) => {
        displayImage(e.target.files[0]);
     }
}
 
form.addEventListener("dragover", (e) => e.preventDefault());

form.addEventListener("drop", (e) => {
    e.preventDefault(); // Sürüklenen dosyanın sayfada bırakılmasını engeller
    const droppedFile = e.dataTransfer.files[0]; // Sürüklenen dosyayı al
    displayImage(droppedFile);
});

form.addEventListener("click", () => input.click());
form.addEventListener("click", imageSetting);
