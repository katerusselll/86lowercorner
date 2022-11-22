let mic;

let started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  background(0);

  let EllipseX = width / 34;
  let EllipseY = height / 23;
  let EllipseSize = vol;

  //side 1
  drawEllipse(EllipseX, EllipseY * 22, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 12, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 16, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 20, EllipseSize);
  drawEllipse(EllipseX * 11, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 13, EllipseY * 21, EllipseSize);
  drawEllipse(EllipseX * 14, EllipseY * 11, EllipseSize);
  drawEllipse(EllipseX * 15, EllipseY * 18, EllipseSize);
  drawEllipse(EllipseX * 16, EllipseY * 5, EllipseSize);
  
  //side 2
  drawEllipse(EllipseX * 18, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 19, EllipseY * 21, EllipseSize);
  drawEllipse(EllipseX * 20, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 22, EllipseY * 18, EllipseSize);
  drawEllipse(EllipseX * 23, EllipseY * 13, EllipseSize);
  drawEllipse(EllipseX * 24, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 26, EllipseY * 16, EllipseSize);
  drawEllipse(EllipseX * 27, EllipseY * 20, EllipseSize);
  drawEllipse(EllipseX * 29, EllipseY * 14, EllipseSize);
  drawEllipse(EllipseX * 31, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 33, EllipseY * 22, EllipseSize);

  function drawEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 4, vol * 50);
    console.log(vol);
    //look up lerp for smoothness
  }

  function drawOtherEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 10, vol * 10);
    console.log(vol);
  }

  //side 1
  drawHorizontalEllipse(EllipseX, EllipseY * 22, EllipseSize);
  drawHorizontalEllipse(EllipseX * 3, EllipseY * 12, EllipseSize);
  drawHorizontalEllipse(EllipseX * 7, EllipseY * 16, EllipseSize);
  drawHorizontalEllipse(EllipseX * 9, EllipseY * 10, EllipseSize);
  drawHorizontalEllipse(EllipseX * 10, EllipseY * 20, EllipseSize);
  drawHorizontalEllipse(EllipseX * 11, EllipseY, EllipseSize);
  drawHorizontalEllipse(EllipseX * 13, EllipseY * 21, EllipseSize);
  drawHorizontalEllipse(EllipseX * 14, EllipseY * 11, EllipseSize);
  drawHorizontalEllipse(EllipseX * 15, EllipseY * 18, EllipseSize);
  drawHorizontalEllipse(EllipseX * 16, EllipseY * 5, EllipseSize);
  
  //side 2
  drawHorizontalEllipse(EllipseX * 18, EllipseY * 9, EllipseSize);
  drawHorizontalEllipse(EllipseX * 19, EllipseY * 21, EllipseSize);
  drawHorizontalEllipse(EllipseX * 20, EllipseY, EllipseSize);
  drawHorizontalEllipse(EllipseX * 22, EllipseY * 18, EllipseSize);
  drawHorizontalEllipse(EllipseX * 23, EllipseY * 13, EllipseSize);
  drawHorizontalEllipse(EllipseX * 24, EllipseY * 6, EllipseSize);
  drawHorizontalEllipse(EllipseX * 26, EllipseY * 16, EllipseSize);
  drawHorizontalEllipse(EllipseX * 27, EllipseY * 20, EllipseSize);
  drawHorizontalEllipse(EllipseX * 29, EllipseY * 14, EllipseSize);
  drawHorizontalEllipse(EllipseX * 31, EllipseY * 7, EllipseSize);
  drawHorizontalEllipse(EllipseX * 33, EllipseY * 22, EllipseSize);


  function drawHorizontalEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 50, vol * 4);
    console.log(vol);
    //look up lerp for smoothness
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  started = true;
  userStartAudio();
}
