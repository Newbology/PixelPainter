/*click to add color
click hold to add color
create eraser button
create a clear button 
create grid
create color swatch ---add functionality 
set background color as active color
*/
const pixelPainter = (function() {
  var mouseDown = 0;
  document.body.onmousedown = function() {
    mouseDown = true;
  };
  document.body.onmouseup = function() {
    mouseDown = false;
  };
  const colorPallet = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "lime",
    "aqua",
    "black",
    "purple",
    "white"
  ];

  let createGrid = (height, width) => {
    let grid = document.createElement("div");
    grid.id = "grid";
    for (var y = 0; y < height; y++) {
      let column = document.createElement("div");
      column.className = "column";
      for (var x = 0; x < width; x++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.backgroundColor = "white";
        column.appendChild(pixel);
      }
      grid.appendChild(column);
    }
    return grid;
  };

  const swatch = createGrid(5, 2);
  const mainGrid = createGrid(15, 13);

  const wrapper = document.getElementById("pixelPainter");
  const tools = document.createElement("div");
  tools.id = "tools";
  wrapper.appendChild(tools);

  const eraser = document.createElement("div");
  eraser.className = "eraser";
  eraser.innerHTML = "ERASER";
  tools.appendChild(eraser);

  const clear = document.createElement("div");
  clear.className = "clear";
  clear.innerHTML = "CLEAR";
  tools.appendChild(clear);

  const save = document.createElement("div");
  save.className = "save";
  save.innerHTML = "SAVE";
  tools.appendChild(save);

  const load = document.createElement("div");
  load.className = "load";
  load.innerHTML = "LOAD";
  tools.appendChild(load);

  wrapper.appendChild(mainGrid);
  wrapper.appendChild(swatch);

  let activeColor = "";
  let saveButton = [];

  function colorChoice() {
    activeColor = this.style.backgroundColor;
  }
  // function savePixels(){

  // }
  function paintPixels() {
    this.style.backgroundColor = activeColor;
  }

  function paintManyPixels() {
    if (mouseDown) {
      this.style.backgroundColor = activeColor;
    }
  }

  function erasePixels() {
    activeColor = "white";
  }

  function clearPixels() {
    for (var i = 0; i < getPixels.length; i++) {
      getPixels[i].style.backgroundColor = "white";
    }
    for (var i = 0; i < colorPallet.length; i++) {
      swatchpixel[i].style.backgroundColor = colorPallet[i];
    }
  }

  let grid = document.getElementById("grid");
  let swatchpixel = swatch.getElementsByClassName("pixel");
  let getPixels = document.getElementsByClassName("pixel");
  let colorPixels = grid.getElementsByClassName("pixel");

  for (var i = 0; i < colorPallet.length; i++) {
    swatchpixel[i].addEventListener("click", colorChoice);
    swatchpixel[i].style.backgroundColor = colorPallet[i];
  }

  for (var i = 0; i < colorPixels.length; i++) {
    colorPixels[i].addEventListener("click", paintPixels);
    colorPixels[i].addEventListener("mouseover", paintManyPixels);
  }

  eraser.addEventListener("click", erasePixels);
  clear.addEventListener("click", clearPixels);

  swatch.id = "swatch";
})();
