const ul = document.querySelector(".container ul");
const search = document.querySelector(".search-list input");
const removeIcon = document.querySelector(".search-list i");

console.log(ul, search, removeIcon);

const textArr = [
    "How to become a web developer?",
    "html&css javascript learning",
    "How to become full stack web development?",
    "algorithm and data learning",
    "what day is it today",
    "current weather",
    "watching cooking videos",
];



// Arama işlemini kontrol eder
const handleSearch = () => { 
    const searchVal = search.value.toLowerCase();
    const filter = textArr.filter(item => item.toLowerCase().includes(searchVal));
    const findHim = filter.map((item) => `<li><p>${item}</p></li>`).join("");
    ul.innerHTML = findHim;

    const paragraph = document.querySelectorAll("ul li p");
    paragraph.forEach(p => {
        p.addEventListener("click", () => {
            search.value = p.textContent;
            handleSearch();
        })
    });
}

// Arama kutusuna girdiğinde arama işlemini başlatır
search.addEventListener("input", handleSearch);

// Arama kutusunu temizlediğinde tüm listeyi gösterir
removeIcon.addEventListener("click", () => {
    search.value = "";
    handleSearch();
});
