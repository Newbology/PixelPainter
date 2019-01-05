//add comments to tell people what this shit does you lazy fuck.

//indicates wether mouse is clicked down or up.
const pixelPainter = (function() {
  var mouseDown = 0;
  document.body.onmousedown = function() {
    mouseDown = true;
  };
  document.body.onmouseup = function() {
    mouseDown = false;
  };

  //creating grid/pixel function
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

  //invoking function to create grid/pixels
  const swatch = createGrid(5, 2);
  const mainGrid = createGrid(27, 27);

  //grabbing main container holding
  const wrapper = document.getElementById("pixelPainter");

  //create tools container, append to main wrapper-pixelpainter
  const tools = document.createElement("div");
  tools.id = "tools";
  wrapper.appendChild(tools);

  //create eraser button, append to tools container
  const eraser = document.createElement("div");
  eraser.className = "eraser";
  eraser.innerHTML = "ERASER";
  tools.appendChild(eraser);
  eraser.addEventListener("click", erasePixels);

  //create color wheel button element, appended to swatch color selector
  let colorWheel = document.createElement("input");
  colorWheel.className = "colorwheel";
  colorWheel.type = "color";
  swatch.appendChild(colorWheel);
  colorWheel.addEventListener("input", colorPicked);

  //create clear button element, append to tools container
  const clear = document.createElement("div");
  clear.className = "clear";
  clear.innerHTML = "CLEAR";
  tools.appendChild(clear);
  clear.addEventListener("click", clearPixels);

  //Create save button element, append to tools container
  const save = document.createElement("div");
  save.className = "save";
  save.innerHTML = "SAVE";
  tools.appendChild(save);
  save.addEventListener("click", savePixels);

  //create load button element, append to tools conatiner
  const load = document.createElement("div");
  load.className = "load";
  load.innerHTML = "LOAD";
  tools.appendChild(load);
  load.addEventListener("click", loadSavedPixels);

  //appending pixel grid and swatch to main wrapper-pixelpainter
  wrapper.appendChild(mainGrid);
  wrapper.appendChild(swatch);

  //set swatch id to "swatch"
  swatch.id = "swatch";

  //grabbing elements to identify them
  const grid = document.getElementById("grid");
  const swatchpixel = swatch.getElementsByClassName("pixel");
  const getPixels = document.getElementsByClassName("pixel");
  const colorPixels = grid.getElementsByClassName("pixel");

  //empty variables to hold data\\
  let activeColor = ""; //used to change colors on swatch
  let saveButton = []; //used to save and load array data

  //create color pallet for swatch
  const colorPallet = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "brown",
    "aqua",
    "black",
    "purple",
    "white"
  ];

  // functions \\
  //select a color from the color swatch
  function colorChoice() {
    activeColor = this.style.backgroundColor;
  }

  //save the pixels color data into an array
  function savePixels() {
    saveButton = [];
    for (var i = 0; i < getPixels.length; i++) {
      getPixels[i].style.backgroundColor;
      saveButton.push(getPixels[i].style.backgroundColor);
    }
  }
  //load the pixels color data onto painter
  function loadSavedPixels() {
    for (var i = 0; i < getPixels.length; i++) {
      getPixels[i].style.backgroundColor = saveButton[i];
    }
  }
  //changes pixel colors 1 at a time
  function paintPixels() {
    this.style.backgroundColor = activeColor;
  }
  //click and hold to paint many pixels
  function paintManyPixels() {
    if (mouseDown) {
      this.style.backgroundColor = activeColor;
    }
  }
  //erase pixels on array
  function erasePixels() {
    activeColor = "white";
  }

  //reset all the pixels back to white
  function clearPixels() {
    for (var i = 0; i < getPixels.length; i++) {
      getPixels[i].style.backgroundColor = "white";
    }

    //add colors back to swatch
    for (var i = 0; i < colorPallet.length; i++) {
      swatchpixel[i].style.backgroundColor = colorPallet[i];
    }
  }

  //pick color from wheel
  function colorPicked() {
    activeColor = this.value;
  }

  //creating event listener to paint 1 pixel
  for (var i = 0; i < colorPallet.length; i++) {
    swatchpixel[i].addEventListener("click", colorChoice);
    swatchpixel[i].style.backgroundColor = colorPallet[i];
  }

  //creating event listener to paint multiple pixels
  for (var i = 0; i < colorPixels.length; i++) {
    colorPixels[i].addEventListener("click", paintPixels);
    colorPixels[i].addEventListener("mouseover", paintManyPixels);
  }
})();

//used to mess with color wheel, ignore
// let colorWheelWrapper = document.createElement("label");
// colorWheelWrapper.id = "wheelWrapper";
// colorWheelWrapper.type = "label";
// colorWheelWrapper.innerHTML = "wheel";
// swatch.appendChild(colorWheelWrapper);
