
//== HEADER SETTING
const side_bar = document.querySelector(".side-bar");
const hamburger = side_bar.querySelector(".hamburger");

const sidebar_li = side_bar.querySelectorAll(".boxes li.inner-box");
const sidebar_icon = document.querySelectorAll(".boxes li.inner-box i.icon");

hamburger.addEventListener("click", () => {
    side_bar.classList.toggle("hide");
    hamburger.classList.toggle("active");
    sidebar_li.forEach((item) => {
        const arrow = item.querySelector(".header-title .arrow");
        item.classList.remove("active");
        arrow.classList.remove("rotate");
    })
    sidebar_icon.forEach(icon => icon.classList.toggle("active"));
});

//== CONTAINER SETTING

const inner_box = document.querySelectorAll(".container .boxes li.inner-box");
inner_box.forEach((item, index) => {
    const arrow = item.querySelector(".header-title .arrow");
    arrow.addEventListener("click", () => {
        item.classList.toggle("active");
        arrow.classList.toggle("rotate");
    });

    inner_box.forEach((item2, index2) => {
        arrow.addEventListener("click", () => {
            if(index !== index2){
                item2.classList.remove("active");
                arrow.classList.remove("rotate");
            } 
        })
    })
})


//==== TOGGLE MENU
const toggle = document.querySelector(".personal-box .toggle-box");
toggle.addEventListener("click", () => side_bar.classList.toggle("active"));
