let timerCountDown = 0;
let isNewGame = true;
let userRows = "";
let userCols = "";

const clsContent = () => {
  const elements = document.getElementsByClassName("grid-item");
  while (elements.length > 0) elements[0].remove();
  const elements_patron = document.getElementsByClassName("patron__grid-item");
  while (elements_patron.length > 0) elements_patron[0].remove();
};

const crearGrid = () => {
  const container = document.querySelector(".container_content");
  userRows = document.querySelector(".rows").value;
  userCols = document.querySelector(".cols").value;
  for (let c = 0; c < userCols; c++) {
    for (let r = 0; r < userRows; r++) {
      const cell = document.createElement("div");
      container.appendChild(cell).className =
        "grid-item grid-item_" + (r + 1) + "_" + (c + 1); // eslint-disable-line
    }
  }
  document.querySelector(".container_content").style.gridTemplateRows =
    "repeat(" + userRows + ", auto)"; // eslint-disable-line
  document.querySelector(".container_content").style.gridTemplateColumns =
    "repeat(" + userCols + ", auto)"; // eslint-disable-line
  document.querySelector(".container_content").style.visibility = "visible";
};

const crearPatron = () => {
  const container = document.querySelector(".patron_container");
  const rows = 5;
  const cols = 5;
  for (let c = 0; c < rows * cols; c++) {
    const cell = document.createElement("div");
    container.appendChild(cell).className =
      "patron__grid-item patron__grid-item_" + (c + 1); // eslint-disable-line
  }
  document.querySelector(".patron_container").style.gridTemplateRows =
    "repeat(" + rows + ", auto)"; // eslint-disable-line
  document.querySelector(".patron_container").style.gridTemplateColumns =
    "repeat(" + cols + ", auto)"; // eslint-disable-line
};
const setColor = (id) => {
  if (document.querySelector(id).classList.contains("cell_selected")) {
    document.querySelector(id).classList.remove("cell_selected");
  } else {
    document.querySelector(id).classList.add("cell_selected");
  }
};
const selectPatron = (tipoPatron) => {
  document.querySelector(".patron_container__h3").style.visibility = "visible";
  document.querySelector(".font_min").style.visibility = "visible";
  switch (tipoPatron) {
    case "standard":
      document
        .querySelector(".patron__grid-item_1")
        .classList.add("cell_selected");
      document
        .querySelector(".patron__grid-item_3")
        .classList.add("cell_selected");
      document
        .querySelector(".patron__grid-item_6")
        .classList.add("cell_selected");
      document
        .querySelector(".patron__grid-item_9")
        .classList.add("cell_selected");
      break;
    default:
  }
};

const enableAddEventListennersGrid = () => {
  const cols = document.querySelectorAll(".patron__grid-item");

  cols.forEach((element) => {
    element.addEventListener("mouseup", (e) => {
      setColor(`.${e.target.classList[1]}`);
    });
  });
};

const setPatron = (actualPos) => {
  let actualCol = actualPos.substring(11, actualPos.length);
  const endCol = actualCol.indexOf("_");
  actualCol = actualPos.substring(11, 11 + endCol);
  const actualRow = actualPos.substring(
    12 + actualCol.length,
    actualPos.length
  );
  for (let i = 1; i < 26; i++) {
    if (
      document
        .querySelector(`.patron__grid-item_${i}`)
        .classList.contains("cell_selected")
    ) {
      let newCol = 0;
      let newRow = 0;
      switch (i) {
        case 1:
          newRow = Number(actualRow) - 1; // 239 - 223;
          newCol = Number(actualCol) - 1; // 239 - 223;
          break;
        case 2:
          newRow = Number(actualRow) - 1; // 239 - 223;
          newCol = Number(actualCol); // 239 - 223;
          break;
        case 3:
          newRow = Number(actualRow) - 1; // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        case 4:
          newRow = Number(actualRow); // 239 - 223;
          newCol = Number(actualCol) - 1; // 239 - 223;
          break;
        case 5:
          newRow = Number(actualRow); // 239 - 223;
          newCol = Number(actualCol); // 239 - 223;
          break;
        case 6:
          newRow = Number(actualRow); // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        case 7:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol) - 1; // 239 - 223;
          break;
        case 8:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol); // 239 - 223;
          break;
        case 9:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        case 10:
          newRow = Number(actualRow) - 2; // 239 - 223;
          newCol = Number(actualCol) - 2; // 239 - 223;
          break;
        case 11:
          newRow = Number(actualRow) - 2; // 239 - 223;
          newCol = Number(actualCol); // 239 - 223;
          break;
        case 12:
          newRow = Number(actualRow) - 2; // 239 - 223;
          newCol = Number(actualCol) + 2; // 239 - 223;
          break;
        case 13:
          newRow = Number(actualRow); // 239 - 223;
          newCol = Number(actualCol) - 1; // 239 - 223;
          break;
        case 14:
          newRow = Number(actualRow); // 239 - 223;
          newCol = Number(actualCol); // 239 - 223;
          break;
        case 15:
          newRow = Number(actualRow); // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        case 16:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol) - 1; // 239 - 223;
          break;
        case 17:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol); // 239 - 223;
          break;
        case 18:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        case 19:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        case 20:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        case 21:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        case 22:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        case 23:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        case 24:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        case 25:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        default:
      }
      document
        .querySelector(`.grid-item_${newCol}_${newRow}`)
        .classList.add("cell_selected");
    }
  }
};

const setStatusCell = (actualPos) => {
  let actualCol = actualPos.substring(11, actualPos.length);
  const endCol = actualCol.indexOf("_");
  actualCol = actualPos.substring(10, 11 + endCol);
  const actualRow = actualPos.substring(
    11 + actualCol.length,
    actualPos.length
  );
  let countNear = 0;
  let newCol = 0;
  let newRow = 0;
  for (let i = 1; i < 10; i++) {
    if (
      document
        .querySelector(`.${actualPos}`)
        .classList.contains("cell_selected")
    ) {
      switch (i) {
        case 1:
          newRow = Number(actualRow) - 1; // 239 - 223;
          newCol = Number(actualCol) - 1; // 239 - 223;
          break;
        case 2:
          newRow = Number(actualRow) - 1; // 239 - 223;
          newCol = Number(actualCol); // 239 - 223;
          break;
        case 3:
          newRow = Number(actualRow) - 1; // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        case 4:
          newRow = Number(actualRow); // 239 - 223;
          newCol = Number(actualCol) - 1; // 239 - 223;
          break;
        case 5:
          newRow = Number(actualRow); // 239 - 223;
          newCol = Number(actualCol); // 239 - 223;
          break;
        case 6:
          newRow = Number(actualRow); // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        case 7:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol) - 1; // 239 - 223;
          break;
        case 8:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol); // 239 - 223;
          break;
        case 9:
          newRow = Number(actualRow) + 1; // 239 - 223;
          newCol = Number(actualCol) + 1; // 239 - 223;
          break;
        default:
      }
      const newPos = `${newCol}_${newRow}`;
      if (
        Number(actualRow) >= 1 &&
        Number(actualRow) <= Number(userRows) &&
        Number(actualCol) >= 1 &&
        Number(actualCol) <= Number(userCols)
      ) {
        if (
          document
            .querySelector(`.grid-item_${newPos}`)
            .classList.contains("cell_selected")
        ) {
          countNear += 1;
        }
      }
    }
  }
  if (countNear > 0 && countNear <= 3) {
    document.querySelector(`.${actualPos}`).classList.add("cell_selected");
  } else if (countNear > 4) {
    document.querySelector(`.${actualPos}`).classList.remove("cell_selected");
  }
};

const checkLife = () => {
  const el = document.querySelectorAll(".grid-item.cell_selected");
  el.forEach((element) => {
    if (element.classList.contains("cell_selected")) {
      setStatusCell(element.classList[1]);
    }
  });
};

function incrementSeconds() {
  const el = document.querySelector(".textTimer");
  const timerMaxTime = Number(document.querySelector(".textTimer").innerHTML);
  const timerSecondsToAdd = 1;
  const newTime = timerMaxTime + timerSecondsToAdd;
  if (document.querySelector(".textTimer").innerHTML === "0") {
    clearInterval(timerCountDown);
  } else {
    el.innerText = newTime;
    checkLife();
  }
}

const enableAddEventListennersMain = () => {
  const cols = document.querySelectorAll(".grid-item");
  cols.forEach((element) => {
    element.addEventListener("mouseup", (e) => {
      setPatron(`.${e.target.classList[1]}`);
      if (isNewGame) {
        timerCountDown = setInterval(incrementSeconds, 1000);
        isNewGame = false;
      }
    });
  });
};

const enableAddEventListenners = (Type) => {
  switch (Type) {
    case "All":
      enableAddEventListennersGrid();
      enableAddEventListennersMain();
      break;
    case "Grid":
      break;
    case "Main":
      break;
    default:
  }
};
function startGame() {
  clsContent();
  crearGrid();
  crearPatron();
  enableAddEventListenners("All");
  selectPatron("standard");
};