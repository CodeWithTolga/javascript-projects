const container = document.querySelector(".container");
const setting = {
    html:{
       start:0,
       end:100,
       speed: 20,
       rgba: "rgba(255, 106, 0, 0.87)",
       color:"#ff6600",
       text: "html"
    },
    css:{
        start:0,
        end:100,
        speed: 30,
        rgba:"rgba(82, 145, 255)",
        color:"#5291ff",
        text: "css"
    },
    javascript:{
        start:0,
        end:70,
        speed: 40,
        rgba:"rgba(255, 166, 0)",
        color:"#ffaa00",
        text: "javascript"
    },
    angular:{
        start:0,
        end:40,
        speed: 50,
        rgba:"rgba(150, 16, 16)",
        color:"#b61212",
        text: "angular"
    },
    nodejs:{
        start:0,
        end:40,
        speed: 60,
        rgba:"rgba(0, 255, 0)",
        color:"#269426",
        text: "nodejs"
    },
}


const circleSetting = () => {
    for(let value in setting){
        let {start, end, speed, rgba, color, text} = setting[value];

        //Creating a circle element
        let circle = document.createElement("div");


        circle.className = `circle`;    
        container.appendChild(circle);
        let interval = setInterval(() => {
         start++;


        //will be stopped if variable "start" is equal to variable "end"
        if(start == end){
             clearInterval(interval);
        }

         //create a tag section
         let tag = `
            <span class="text">${text}</span>
            <span class="count">${start}%</span>
            `;

         //Synchronize the innerHtml of the created circle element
         circle.innerHTML = tag;
         circle.firstElementChild.style.color = color;
         circle.lastElementChild.style.color = color;
         circle.style.background = `conic-gradient(
             rgba(255, 255, 255, 0) 0deg, 
             ${rgba} ${start * 3.6}deg, 
            rgba(255, 255, 255, 0) 0deg
        )`;
        }, speed);
    }
}

//run
circleSetting();
