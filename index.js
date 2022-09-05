//Variables
const canvas = document.querySelector("#canvas");
let gridSize = document.querySelector("#gridSize");
let reset = document.querySelector("#reset");
let gridInfo = document.querySelector(".gridInfo");
let black = document.querySelector(".black")
let colorPick = document.querySelector(".color-pick");
let rainbow = document.querySelector(".rainbow");
let eraser = document.querySelector(".eraser");


createGrid = () => {
  //Default is 16x16 = 256
  for (let i = 0; i < 256; i++) {
    const pixels = document.createElement("div");
    pixels.classList.add("pixels");
    canvas.appendChild(pixels);
  }
};

//Changes size of grid
changeGrid = () => {
  canvas.innerHTML = "";
  canvas.style.setProperty("grid-template-rows", `repeat(${gridSize.value}, 2fr)`);
  canvas.style.setProperty("grid-template-columns", `repeat(${gridSize.value}, 2fr)`);
  for (let i = 0; i < gridSize.value * gridSize.value; i++) {
    const pixels = document.createElement("div");
    pixels.classList.add("pixels");
    canvas.appendChild(pixels);
  }
};

//Specifies Grid Size based on range input
gridSize.addEventListener("input", () => {
  gridInfo.textContent = `${gridSize.value}x${gridSize.value}`;
  changeGrid();
});

let mouseDown = false;
let mouseUp = true;

canvas.addEventListener('mousedown', (event) => {
  mouseDown = !mouseDown; // toggle mouseDown true/false;      
});

canvas.addEventListener('mouseup', (event) => {
  mouseDown = !mouseDown; // toggle mouseDown true/false;
});


//Drawing Function
drawing = (color) =>{
  canvas.addEventListener("mousemove", (event) => {
    if (mouseDown) { 
      event.target.style.backgroundColor = `${color}`;
      }
    })
    canvas.addEventListener("mousedown", (event) => {
      if (mouseDown) { 
        event.target.style.backgroundColor = `${color}`; 
      }
    })
}


//Black Button
black.addEventListener("click", ()=> {
  drawing("black");
})
  
//Color Button
colorPick.addEventListener("input", ()=> {
      drawing(colorPick.value);
  })

//Random Color Geneator - for Rainbow Button
randomColor = () => {
  let rainbow = `hsl(${Math.random()*360},100%,50%)`;
  return `${rainbow}`;
}

//Rainbow Button
rainbow.addEventListener("click", () => {
    canvas.addEventListener("mousemove", (event) => {
      if (mouseDown) { 
      event.target.style.backgroundColor = randomColor();
      }
    })
    canvas.addEventListener("mousedown", (event) => {
      if (mouseDown) { 
      event.target.style.backgroundColor = randomColor();
      }
    })
  })

  //Eraser Button
  eraser.addEventListener("click", () => {
    canvas.addEventListener("mousemove", (event) => {
      if (mouseDown) { 
      event.target.style.removeProperty("background-color");
      }
    })
    canvas.addEventListener("mousedown", (event) => {
      if (mouseDown) { 
      event.target.style.removeProperty("background-color");
      }
    })
  })


//Reset function - goes back to default settings
reset.addEventListener("click", () => {
  mouseDown = false;
  mouseUp = true;
  canvas.innerHTML = "";
  canvas.style.setProperty("grid-template-rows", "repeat(16, 2fr)");
  canvas.style.setProperty("grid-template-columns", "repeat(16, 2fr)");
  gridInfo.textContent = "16x16";
  gridSize.value = 16;
  colorPick.value = "#000000";
  black.click();
  createGrid();
})

createGrid();