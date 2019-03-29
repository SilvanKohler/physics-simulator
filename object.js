function object(){
  this.y = 0;
  this.x = width/2-100/2;
  this.mass = 200;
  this.gravity = 0.8;
  this.yvel = 0;
  this.xvel = 10;
  this.bounce = 1;
  this.bouncefriction = 0.6;
  this.friction = 0.99;
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.mass, this.mass);
  }
  this.update = function() {
    if (this.y >= height - this.mass/2) {
      this.y = height - this.mass/2;
      this.yvel *= -1 * (this.bounce * this.bouncefriction) / (this.mass/100);
      this.y += this.yvel;
      if (this.xvel > 0) {
        this.xvel *= this.friction / (this.mass/100);
      }
      if (this.xvel < 0) {
        this.xvel *= this.friction / (this.mass/100);
      }
    }
    if (this.x >= width - this.mass/2) {
      this.x = width - this.mass/2;
      this.xvel *= -1 * (this.bounce * this.bouncefriction) / (this.mass/100);
    }
    if (this.x <= 0 + this.mass/2) {
      this.x = this.mass/2;
      this.xvel /= -1 * (this.bounce / this.bouncefriction) / (this.mass/100);
    }
    this.x += this.xvel;
    if (this.y < height - this.mass/2){
      this.yvel += this.gravity * (this.mass/100);
      this.y += this.yvel;
    }

  }
}
