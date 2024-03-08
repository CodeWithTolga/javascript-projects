const second = document.querySelector(".container .second");
const minute = document.querySelector(".container .minute");
const hours = document.querySelector(".container .hours");
const clock = document.querySelector(".analog");

const analog = () => {
    const day = new Date();
    const hr = day.getHours() * 30;
    const mn = day.getMinutes() * 6;
    const sec = day.getSeconds() * 6;

    hours.style.transform = `rotateZ(${hr + (mn / 12)}deg)`;
    minute.style.transform = `rotateZ(${mn}deg)`;
    second.style.transform = `rotateZ(${sec}deg)`;

    let timer = `
        <span class="sec"  style="--clr: #4c42a8;">${day.getSeconds()}&nbsp&nbsp:</span>
        <span class="min" style="--clr: #ff9500;">${day.getMinutes()}&nbsp&nbsp:</span>
        <span class="hr" style="--clr: #fff;">${day.getHours()}</span> 
    `;
    clock.innerHTML = timer;
}

setInterval(() => {analog()}, 1000);