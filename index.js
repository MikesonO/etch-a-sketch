const canvas = document.querySelector("#canvas");


createGrid = () => {  //Default is 16x16
  for (let i = 0; i < 256; i++) { //Creates 256 pixels
    const pixels= document.createElement("div");
    pixels.classList.add("pixels");
    canvas.appendChild(pixels);
  }
};

const pixels = document.querySelector("div"); //Draws on canvas
pixels.addEventListener("mouseover", (event) =>{
  event.target.classList.replace("pixels", "color");
});



createGrid();

