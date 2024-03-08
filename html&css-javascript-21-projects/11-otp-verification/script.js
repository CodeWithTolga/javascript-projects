const otpNum = document.querySelectorAll(".otp input");
console.log(otpNum);

otpNum.forEach((num, index) => {
    num.addEventListener("input", (e) => {
        const value = e.target.value;
        if(value.length > 1){
           e.target.value = value.slice(0, 1);
        }
        if(value.length == 1 && index < otpNum.length - 1){
            otpNum[index + 1].focus();
        }
    });

    otpNum.forEach((num2, index2) => {
        num2.addEventListener("keyup", (e) => {
            console.log(e);
           if(e.key === "Backspace" && index2 > index){
              otpNum[index2 - 1].focus();
           }
           if(e.keyCode == 32 && e.target.value !== "" && index2 >= index){
              otpNum[index2 + 1].focus();
           }
        });
    });

}); 