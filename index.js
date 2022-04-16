const clsContent = () => {
  const elements = document.getElementsByClassName("grid-item");

  while (elements.length > 0) elements[0].remove();

  const elements_patron = document.getElementsByClassName("patron__grid-item");

  while (elements_patron.length > 0) elements_patron[0].remove();
};
const crearGrid = () => {
  const container = document.querySelector(".container_content");
  const userRows = document.querySelector(".rows").value;
  const userCols = document.querySelector(".cols").value;
  for (let c = 0; c < userRows * userCols; c++) {
    const cell = document.createElement("div");
    // cell.innerText = c + 1;
    // cell.innerHTML = c + 1;

    container.appendChild(cell).className = "grid-item grid-item_" + (c + 1); // eslint-disable-line
  }
  document.querySelector(".container_content").style.gridTemplateRows =
    "repeat(" + userRows + ", auto)"; // eslint-disable-line
  document.querySelector(".container_content").style.gridTemplateColumns =
    "repeat(" + userCols + ", auto)"; // eslint-disable-line
  document.querySelector(".container_content").style.visibility = "visible";
  // grid-template-rows: repeat(var(--gridRows), auto);
  //   grid-template-columns: repeat(var(--gridCols), auto);
};
const crearPatron = () => {
  // debugger;
  const container = document.querySelector(".patron_container");
  const userRows = 3;
  const userCols = 3;

  for (let c = 0; c < userRows * userCols; c++) {
    const cell = document.createElement("div");
    // cell.innerText = c + 1;
    // cell.innerHTML = c + 1;

    container.appendChild(cell).className =
      "patron__grid-item patron__grid-item_" + (c + 1); // eslint-disable-line
  }
  document.querySelector(".patron_container").style.gridTemplateRows =
    "repeat(" + userRows + ", auto)"; // eslint-disable-line
  document.querySelector(".patron_container").style.gridTemplateColumns =
    "repeat(" + userCols + ", auto)"; // eslint-disable-line
};
const setColor = () => {
  debugger;
  document.querySelector(id).style.background = "red";
};
function startGame() {
  // container.style.setProperty("--grid-rows", userRows);
  // container.style.setProperty("--grid-cols", userCols);

  clsContent();
  crearGrid();
  crearPatron();
  const cols = document.querySelectorAll(".patron__grid-item");

  cols.forEach((element) => {
    element.addEventListener("mouseup", () => {
      // eslint-disable-line

      setColor();
    });
  });
}
