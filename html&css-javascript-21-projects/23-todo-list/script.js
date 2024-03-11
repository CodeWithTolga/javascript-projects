const searchIcon = document.querySelector(".search-box i");
const search = document.querySelector(".search-box input");
const add_btn = document.querySelector(".header button");
const ul = document.querySelector("ul");


const searchController = () => {
    let control = search.value.length > 0;
    control ? searchIcon.classList.add("active") : searchIcon.classList.remove("active");
    add_btn.style.pointerEvents = control ? `auto` : "none";

    searchIcon.addEventListener("click", () => {
        search.value = "";
        searchController();
    });
}


const showTrash = (item) => {
    let trash = item.parentElement.children[2];
    let input = item.parentElement.children[1];
    let control = item.classList.toggle("rotate");
    if(control){
        trash.classList.add("show");
        input.classList.add("line");
    }else{
        trash.classList.remove("show");
        input.classList.remove("line");
    }
}  

const removeTodo = (item) => {
    let li = item.parentElement;
    console.log(li);
    li.classList.add("smooth-remove");
    setTimeout(() => li.remove(), 500);
}

const addTodo = () => {
   
    let liTag = `
      <li>
        <i class="fa-solid fa-plus icon" onclick="showTrash(this)"></i>
        <input type="text" disabled value="${search.value}">
        <i class="fa-solid fa-trash trash" onclick="removeTodo(this)"></i>
      </li>
    `;
    ul.innerHTML += liTag;
    search.value = "";
    searchController();
}

add_btn.addEventListener("click", addTodo);
search.addEventListener("input", searchController);

document.addEventListener("keyup", (e) => {
    if(e.key == "Enter"){
        addTodo();
    }
});