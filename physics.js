function setup(){
  createCanvas(1280, 720);
  background(51);
  block = new object();
  frameRate(60);
}
function draw(){
  background(51);
  block.update();
  block.show();
}
