const sun = document.querySelector(".container .sun");


for(let i = 0; i < 20; i++){
    let line = document.createElement("div");
    line.classList.add("line");
    line.style = `--rotate:${i + 1}`;
    sun.append(line);
}