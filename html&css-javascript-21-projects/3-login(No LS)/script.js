const text_box = document.querySelectorAll("form .text-box");
const inputs = document.querySelectorAll("form .text-box input");
const lock = document.querySelector(".text-box i.lock");
const alertText = document.querySelectorAll("form .text-box .alert-box span");
const button = document.querySelector("form button");

//label setting
text_box.forEach((box) => {
  const label = box.querySelector("label");
  label.innerHTML = label.textContent
    .split("")
    .map(
      (letter, i) =>
        `<span style="transition-delay:${i * 30}ms;">${letter}</span>`
    )
    .join("");
});

function statusErr(span) {
  const alertBx = span.parentElement;
  alertBx.classList.add("show");
  setTimeout(() => {
    alertBx.classList.remove("show");
    span.textContent = "";
  }, 2500);
}

function statusError(alertCont, icon) {
  alertCont.classList.add("err");
  icon.classList.add("fa-exclamation");
  setTimeout(() => {
    alertCont.classList.remove("err");
    icon.classList.remove("fa-exclamation");
  }, 2500);
}

function statusCorrect(alertCont, icon) {
  alertCont.classList.add("corr");
  icon.classList.add("fa-check");
  setTimeout(() => {
    alertCont.classList.remove("corr");
    icon.classList.remove("fa-check");
  }, 2500);
}

function statusErrorText(span, index) {
  const ArrController = [
    {
      nameId: `Bu Alan Boş Geçilemez`,
      regex: /^[A-Za-z]+([-']?[A-Za-z]+)?$/,
      regexErr: `sayı veya sembol olmadan giriniz`,
    },
    {
      nameId: `Bu Alan Boş Geçilemez`,
      regex: /^[A-Za-z]+([-']?[A-Za-z]+)?$/,
      regexErr: `sayı veya sembol olmadan giriniz`,
    },
    {
      nameId: `Bu Alan Boş Geçilemez`,
      regex: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
      regexErr: `mail adresi geçersiz`,
    },
    {
      nameId: `Bu Alan Boş Geçilemez`,
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      regexErr: `Geçerli Bir Şifre Belirleyin`,
      passErr: "Şifreler Uyuşmuyor!",
    },
    {
      nameId: `Bu Alan Boş Geçilemez`,
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      regexErr: `Geçerli Bir Şifre Belirleyin`,
      passErr: "Şifreler Uyuşmuyor!",
    },
  ];

  const input = span.parentElement.parentElement.firstElementChild;
  const alertIconBx =
    span.parentElement.parentElement.querySelector(".alert-icon");
  const alertIcon =
    span.parentElement.parentElement.querySelector(".alert-icon i");

  const password = document.querySelector(".password");
  const rePassword = document.querySelector(".rePassword");

  if (input.value == "") {
    span.textContent = ArrController[index].nameId;
    statusErr(span);
    statusError(alertIconBx, alertIcon);
    return true; //hata var
  } else if (!ArrController[index].regex.test(input.value)) {
    span.textContent = ArrController[index].regexErr;
    statusErr(span);
    statusError(alertIconBx, alertIcon);

    return true; //hata var
  } else if ((index == 3 || 4) && password.value !== rePassword.value) {
    console.log("Şifreler Birbirine uyuşmuyor!");
    span.textContent = ArrController[index].passErr;
    statusErr(span);
    statusError(alertIconBx, alertIcon);
    return true;
  }
  statusCorrect(alertIconBx, alertIcon);
  return false;
}

const checkForm = () => {
  let hasError = false;
  alertText.forEach((span, index) => {
    const error = statusErrorText(span, index);
    if (error) {
      hasError = true;
    }
  });
};

///EVENTS

button.addEventListener("click", checkForm);
document.addEventListener("keyup", (e) =>
  e.key == "Enter" ? button.click() : ""
);

lock.addEventListener("click", () => {
  const password = document.querySelector(".password");
  const rePassword = document.querySelector(".rePassword");
  if (password.type == "password" && rePassword.type == "password") {
    password.type = "text";
    rePassword.type = "text";
    lock.classList.replace("fa-lock", "fa-unlock");
  } else {
    password.type = "password";
    rePassword.type = "password";
    lock.classList.replace("fa-unlock", "fa-lock");
  }
});

//"matches" Kullanımı aslında bu "document.classList.contains('')" den gelen "contains()" ile aynı kavramdır
//Örnek;

// const p = document.querySelector("p");
// //1.yol
// if(p.matches("deneme")){
//     //yapılacaklar
// }

// //2.yol
// if(p.classList.contains("deneme")){
//     //yapılacaklar
// }

const outerArray = [1, 2, 3];
const innerArray = [4, 5, 6, 7];

//iç içe döngü kurma
const resultArray = [];

outerArray.forEach((outerElement) => {
  const innerValues = [];

  innerArray.forEach((innerElement) => {
    // İçteki döngüden dönen değerleri bir diziye ekleyin
    innerValues.push(innerElement * outerElement);
  });

  // Dıştaki döngüde işlem yaparken, içteki döngüden dönen değerleri kullanın
  resultArray.push({ outerElement, innerValues });
});

// console.log(resultArray);
