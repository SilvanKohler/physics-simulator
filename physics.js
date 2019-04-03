function setup(){
  createCanvas(windowWidth, windowHeight);
  background(51);
  ball = new Ball();
  frameRate(60);
}

function draw(){
  background(51);
  ball.update();
  ball.show();
}
function mouseDragged(){
  if ((mouseX > (ball.x - ball.mass/2) && mouseX < (ball.x + ball.mass/2)) && ((mouseY > (ball.y - ball.mass/2) && mouseY < (ball.y + ball.mass/2)))){
    ball.dragged = true;
  }
}
function mouseReleased(){
  ball.dragged = false;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
