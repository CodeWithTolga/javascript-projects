const day = document.querySelector(".boxes .day");
const month = document.querySelector(".boxes .month");
const year = document.querySelector(".boxes .year");
const button = document.querySelector(".container button");
const equility = document.querySelector(".age-tutorial input");

const ageCalculator = () => {
    const yourDate = new Date(`${year.value}-${month.value}-${day.value}`);
    const displayTime = yourDate.getTime();
 
    const nowDate = new Date().getTime();
    const difference = (nowDate - displayTime);
    let sc = 1000;
    let mn = sc * 60;
    let hr = mn * 60;
    let dy = hr * 24;
    let mnth = dy * 30;
    let yr = mnth * 12;

    const second = Math.floor(difference / sc);
    const minutes = Math.floor(difference / mn);
    const hours = Math.floor(difference / hr);
    const days = Math.floor(difference / dy);
    const months = Math.floor(difference / mnth);
    const years = Math.floor(difference / yr);
    console.log(second, minutes, hours, days, months, years);

    equility.value = years;
}


button.addEventListener("click", ageCalculator);

document.addEventListener("keyup", (e) => {
    e.key = e.key == "Enter" ? button.click() : "";
});