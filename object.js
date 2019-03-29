function object(){
  this.y = 0;
  this.x = 0;
  this.mass = 100;
  this.gravity = 0.8;
  this.yvel = 0;
  this.xvel = 100;
  this.bounce = 1;
  this.bouncefriction = 0.6;
  this.friction = 0.95;
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.mass, this.mass);
  }
  this.update = function() {
    if (this.run == true){
      if (this.y >= height - this.mass/2) {
        this.y = height - this.mass/2;
        this.yvel *= -1 * ((this.bounce * this.bouncefriction) / this.mass) * (this.mass / 2);
        this.y += this.yvel;
        if (this.xvel > 0) {
          this.xvel *= (this.friction / this.mass) * this.mass;
        }
        if (this.xvel < 0) {
          this.xvel *= (this.friction / this.mass) * this.mass;
        }
      }
      if (this.x >= width - this.mass/2) {
        this.x = width - this.mass/2;
        this.xvel *= -1 * ((this.bounce * this.bouncefriction) / this.mass) * (this.mass / 2);
      }
      if (this.x <= 0 + this.mass/2) {
        this.x = this.mass/2;
        this.xvel /= -1 * ((this.bounce / this.bouncefriction) * this.mass) / (this.mass / 2);
      }
      this.x += this.xvel;
      if (this.y < height - this.mass/2){
        this.yvel += (this.gravity * this.mass) / (this.mass / 2);
        this.y += this.yvel;
      }
    }


  }
}
