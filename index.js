//Variables
const canvas = document.querySelector("#canvas");
let gridSize = document.querySelector("#gridSize");
let reset = document.querySelector("#reset");
let gridInfo = document.querySelector(".gridInfo");
let black = document.querySelector(".black")
let colorPick = document.querySelector(".color-pick");
let rainbow = document.querySelector(".rainbow");


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
gridSize.addEventListener("mousemove", () => {
  gridInfo.textContent = `${gridSize.value}x${gridSize.value}`;
  changeGrid();
});

//Draws on canvas
canvas.addEventListener("mouseover", (event) => {
  if (colorPick.value == "#000000") {
    event.target.style.backgroundColor = "black";
  } else if (colorPick.value !== "#000000") {
    event.target.style.backgroundColor = `${colorPick.value}`
  }
});

//Black Button
black.addEventListener("click", ()=> {
  if (black.value == "on") {
    black.value = "off";
  } else {
    black.value = "on";
    rainbow.value = "off";
    canvas.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    })
  }
})


//Random Color Geneator - for Rainbow Button
randomColor = () => {
  let rainbow = Math.floor(Math.random() * 16777215).toString(16);
  return `#${rainbow}`;
}

//Rainbow Button
rainbow.addEventListener("click", () => {
  if (rainbow.value == "on") {
    rainbow.value = "off";
  } else {
    rainbow.value = "on";
    black.value = "off";
    canvas.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = randomColor();
    })
  }
})

//Reset function - goes back to default settings
reset.addEventListener("click", () => {
  canvas.innerHTML = "";
  canvas.style.setProperty("grid-template-rows", "repeat(16, 2fr)");
  canvas.style.setProperty("grid-template-columns", "repeat(16, 2fr)");
  gridInfo.textContent = "16x16";
  gridSize.value = 16;
  colorPick.value = "#000000";
  createGrid();
})

createGrid();