function makeRows(rows, cols) {
  const container = document.querySelector(".container_content");

  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    const cell = document.createElement("div");
    // cell.innerText = c + 1;
    // cell.innerHTML = c + 1;

    container.appendChild(cell).className = "grid-item grid-item_" + (c + 1); // eslint-disable-line
  }
}

// makeRows(16, 16);
