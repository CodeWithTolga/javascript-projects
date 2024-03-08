const chaptca = document.querySelector(".chaptca input");
const reset = document.querySelector(".chaptca button");
const chaptcaValue = document.querySelector(".chap-value");
const button = document.querySelector(".chap-btn");



const resetChaptca = () => {
    let val = "";
    let length = 5;
    for(let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * length).toString();
        val += random;
    }
    chaptca.value = val;
}

const chaptcaGenerator = () => {
    let value = chaptca.value !== chaptcaValue.value;
    if(value){
        alert("değerler aynı değil");
        chaptcaValue.value = "";
        resetChaptca();
    } 
    else alert("giriş başarılı");

}

button.addEventListener("click", chaptcaGenerator);
reset.addEventListener("click", resetChaptca);