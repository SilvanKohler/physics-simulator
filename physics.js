function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(51);
  ball = new object();
  frameRate(60);
  ball.run = true;
}
function draw(){
  background(51);
  ball.update();
  ball.show();
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
  resizeCanvas(window.innerWidth, window.innerHeight);
}
