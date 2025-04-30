const gridSize = 16;

function createGrid() {
  const container = document.querySelector(".container");
  for (let x = 0; x < gridSize; x++) {
    for (let n = 0; n < gridSize; n++) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "gridBox");
      container.appendChild(newDiv);
    }
  }
  setHover();
}


//Allows the functionality to be intialized after the grid is created
function setHover(){
const hover = document.querySelectorAll(".gridBox");
hover.forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    highlightBox(e);
  });

  box.addEventListener("mouseleave", (e) => {
    removeHighlight(e);
  });
});
}

function highlightBox(e){
e.target.style.backgroundColor = "lightcoral";
}
function removeHighlight(e){
  e.target.style.backgroundColor = "white";
}

createGrid();
