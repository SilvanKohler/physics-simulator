var balls = [];
function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(51);
  for (var ball = 0; ball < 1; ball++){
    append(balls, new Ball());
  }
  for (var ball = 0; ball < balls.length; ball++){
    balls[ball].id = ball;
  }
  frameRate(60);
}

function draw(){
  background(51);
  for (var ball = 0; ball < balls.length; ball++){
    balls[ball].update()
    balls[ball].show()
  }
}
function mouseDragged(){
  for (var ball = 0; ball < balls.length; ball++){
    if ((mouseX > (balls[ball].x - balls[ball].mass/2) && mouseX < (balls[ball].x + balls[ball].mass/2)) && ((mouseY > (balls[ball].y - balls[ball].mass/2) && mouseY < (balls[ball].y + balls[ball].mass/2)))){
      balls[ball].dragged = true;
    }
  }
}
function mouseReleased(){
  for (var ball = 0; ball < balls.length; ball++){
    balls[ball].dragged = false;
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
