const ul = document.querySelector("ul");
const btn_box = document.querySelector(".btn-box");



const toasts = [
    {
      color: "#11ae1e",
      icon: "fa-check",
      title: "Congratulations",
      paragraph: "this is congratulations toast notification",
      id:"1"
    },
    {
      color: "#383838",
      icon: "fa-info",
      title: "info",
      paragraph: "this is info toast notification",
      id:"2"
    },
    {
      color: "#ffa200",
      icon: "fa-exclamation",
      title: "alert",
      paragraph: "this is alert toast notification",
      id:"3"
    },
    {
      color: "#f00",
      icon: "fa-triangle-exclamation",
      title: "error",
      paragraph: "this is error toast notification",
      id:"4"
    },
]


const toastBtns = [
    {bg_color: "#11ae1e", text: "Congratulations", id:"1"},
    {bg_color: "#383838", text: "info", id:"2"},
    {bg_color: "#ffa200", text: "alert", id:"3"},
    {bg_color: "#f00", text: "error", id:"4"},
];


const toastNotifications = () => {
    let btn = "";

    toastBtns.forEach(({bg_color, text, id}) => {
        btn += `
           <button type="button" class="congratulations" style="--clr:${bg_color};" id="${id}">
              ${text}
           </button>
        `;
    });
    btn_box.innerHTML = btn;
}

toastNotifications();


function removeToast(li){
   li.classList.remove("active");
   setTimeout(() => li.remove(), 500);
}

function displayLi(li){
  li.classList.add("active");
  setTimeout(() => li.classList.remove("active"), 5000);
  setTimeout(() => li.remove(), 5200);
}

const toastBtn = (itemId) => {
  console.log("hello world...", itemId);

  let liTag = document.createElement("li");
  let {color, icon, title, paragraph, id} = toasts.find(item => item.id == itemId);
  displayLi(liTag);
  liTag.style = `--clr: ${color}`;
  liTag.setAttribute("id", id);
  let tag = `
    <i class="fa-solid ${icon} icon"></i>
    <div class="text-box">
        <span class="title">${title}</span>
        <p>${paragraph}</p>
    </div>
    <i class="fa-solid fa-xmark remove" onclick="removeToast(this.parentElement)"></i>
  `;

  liTag.innerHTML = tag;
  ul.append(liTag);
}


const buttons = document.querySelectorAll(".btn-box button");

buttons.forEach(btn => {
  btn.addEventListener("click", (e) => toastBtn(e.target.id));
})