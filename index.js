const canvas = document.querySelector("#canvas");


createGrid = () => {  //Default is 16x16
  for (let i = 0; i < 256; i++) { //Creates 256 pixels
    const pixels = document.createElement("div");
    pixels.classList.add("pixels");
    canvas.appendChild(pixels);
  }
};

let gridSize = document.querySelector("#gridSize");


changeGrid = () => {
  canvas.innerHTML = "";

  canvas.style.setProperty("grid-template-columns",`repeat(${gridSize.value}, 2fr)`);
  canvas.style.setProperty("grid-template-rows",`repeat(${gridSize.value}, 2fr)`);

for (let i = 0; i < gridSize.value * gridSize.value; i++) {
  const pixels = document.createElement("div");
  pixels.classList.add("pixels");
  canvas.appendChild(pixels);
}
};

const pixels = document.querySelector("div#canvas"); //Draws on canvas
pixels.addEventListener("mouseover", (event) =>{
  event.target.classList.replace("pixels", "color");
});

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  canvas.innerHTML="";
  createGrid();
})


gridSize.addEventListener("change", () => {
  let gridInfo = document.querySelector(".gridInfo");
  gridInfo.textContent = `${gridSize.value}x${gridSize.value}`
  console.log(gridSize.value);
  changeGrid();
});




createGrid();