const box = document.querySelectorAll(".bx span");
const year = document.querySelector(".years .yr");
const month = document.querySelector(".months .mnth");
const day = document.querySelector(".day .dy");
const hour = document.querySelector(".hours .hr");
const minute = document.querySelector(".minutes .min");
const second = document.querySelector(".seconds .sec");


let num = 5;
let borderUpdate = 10;


const calc = (item) => {
    if(borderUpdate == 0){
       borderUpdate = 10;
    }
    console.log(item.unit.style.borderRadius = `${borderUpdate * num}%`);
}

const countDownTimer = () => {
  borderUpdate--;

  const yourDate = new Date("2026-01-01");  
  yourDate.setHours(0,0,0,0);
  const nowDate = new Date();
  
  const difference = yourDate.getTime() - nowDate.getTime();
  let sec = 1000;
  let min = sec * 60;
  let hr = min * 60;
  let dy = hr * 24;
  let mnth = dy * 30;
  let yr = mnth * 12;

  let years = Math.floor(difference / yr);
  let months = Math.floor((difference % yr) / (dy * 30));
  let days = Math.floor((difference % (dy * 30)) / dy);
  let hours = Math.floor((difference % dy) / hr);
  let minutes = Math.floor((difference % hr) / min);
  let seconds = Math.floor((difference % min) / sec);
  
  const timeArr = [
    { unit: year, value: years, displayUnit: year.querySelector("span") },
    { unit: month, value: months, displayUnit:  month.querySelector("span") },
    { unit: day, value: days, displayUnit: day.querySelector("span")  },
    { unit: hour, value: hours, displayUnit: hour.querySelector("span")  },
    { unit: minute, value: minutes, displayUnit: minute.querySelector("span")  },
    { unit: second, value: seconds, displayUnit: second.querySelector("span")  }
  ];

  timeArr.forEach(item => {
    let isBig = (item.value = (item.value < 10 ? `0${item.value}` : item.value));
    item.displayUnit.textContent = isBig;
    calc(item);
  });
  console.log(borderUpdate * 5);
}


setInterval(countDownTimer,1000);