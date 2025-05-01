let prevGrid = 16;
function createGrid(gridSize = 16) {
  const container = document.querySelector(".container");
  for (let x = 0; x < gridSize; x++) {
    for (let n = 0; n < gridSize; n++) {
      const newDiv = document.createElement("div");
      newDiv.setAttribute("class", "gridBox");
      let flexBasis = 100 / gridSize;
      newDiv.style.flexBasis = `${flexBasis}%`;
      container.appendChild(newDiv);
    }
  }
  setHover();
  setReset();
}
function setReset() {
  const btn = document.querySelector(".reset");
  btn.addEventListener("click", () => {
    clearDisplay();
    clearGrid();
    createGrid(getInputNumber());
  });
}
//Allows the functionality to be intialized after the grid is created
function setHover() {
  const hover = document.querySelectorAll(".gridBox");
  hover.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
      highlightBox(e);
    });
  });
}
function getInputNumber() {
  const number = document.querySelector(".amount");
  let value = number.value;
  if (value == null || isNaN(value) || value < 1 || value >= 100) {
    setDisplay(`Invalid input! Please enter a number between 1-100! Refreshing grid to last acceptable grid: ${prevGrid} x ${prevGrid} `);
    return prevGrid; //remakes the last acceptable grid dimensions
  } else {
    setDisplay(`Successfully created grid of ${value} x ${value}`);
    prevGrid = value;
    return parseInt(value);
  }
}
function highlightBox(e) {
  e.target.style.backgroundColor = "lightcoral";
}
function clearDisplay() {
  const display = document.querySelector(".display");
  display.innerHTML = "";
}
function clearGrid() {
  const container = document.querySelector(".container");
  container.replaceChildren();
}
function setDisplay(text) {
  const display = document.querySelector(".display");
  display.textContent = `${text}`;
}
createGrid();
