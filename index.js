//Variables
const canvas = document.querySelector("#canvas");
const pixels = document.querySelector("div#canvas");
let gridSize = document.querySelector("#gridSize");
let reset = document.querySelector("#reset");
let gridInfo = document.querySelector(".gridInfo");


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
gridSize.addEventListener("change", () => {
  gridInfo.textContent = `${gridSize.value}x${gridSize.value}`
  changeGrid();
});

//Draws on canvas
pixels.addEventListener("mouseover", (event) => {
  event.target.classList.replace("pixels", "color");
});


//Reset function - goes back to default settings
reset.addEventListener("click", () => {
  canvas.innerHTML = "";
  canvas.style.setProperty("grid-template-rows", "repeat(16, 2fr)");
  canvas.style.setProperty("grid-template-columns", "repeat(16, 2fr)");
  gridInfo.textContent = "16x16";
  gridSize.value = 16;
  createGrid();
})



createGrid();