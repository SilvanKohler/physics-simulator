let enterfull;
let closefull;

function preload(){
  enterfull = loadImage('enter.png');
  closefull = loadimage('exit.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(51);
  ball = new object();
  frameRate(60);
  ball.run = true;
}

function draw(){
  background(51);
  ball.update();
  ball.show();
  var full = fullscreen();
  if (full) {
    image(closefull, windowWidth - round(windowHeight * windowWidth / 20000), 0, round(windowHeight * windowWidth / 20000), round(windowHeight * windowWidth / 20000));
  }
  if (!full) {
      image(enterfull, windowWidth - round(windowHeight * windowWidth / 20000), 0, round(windowHeight * windowWidth / 20000), round(windowHeight * windowWidth / 20000));
  }
}
function mouseClicked(){
  if (mouseX >= windowWidth - round(windowHeight * windowWidth / 20000) && mouseX <= windowWidth && mouseY >= 0 && mouseY <= round(windowHeight * windowWidth / 20000)){
    fullscreen(!fullscreen());
  }
}
function mouseDragged(){
  ball.run = false;
  this.xvel = accelerationX;
  this.yvel = accelerationY;
  ball.x = mouseX;
  ball.y = mouseY;
}
function mouseReleased(){
  ball.run = true;
}
function windowResized() {
  ball.yvel = -1;
  resizeCanvas(windowWidth, windowHeight);
}
