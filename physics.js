function Ball(){
  this.id = 0;
  this.dragged = false;
  this.x = random(0, windowWidth);
  this.y = random(0, windowHeight);
  this.mass = 100;
  this.gravity = 0.8;
  this.xvel = random(-300, 300);
  this.yvel = random(-100, 100);
  this.xacc = 0;
  this.yacc = 0;
  this.bounce = 1;
  this.bouncefriction = 0.6;
  this.friction = 0.95;
  this.maxvel = 100;
  this.minvel = -100;
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.mass, this.mass);
  }
  this.update = function() {
    if (!this.dragged){
      if (this.y >= windowHeight - this.mass/2) {
        this.y = windowHeight - this.mass/2;
        this.yvel *= -1 * ((this.bounce * this.bouncefriction) / this.mass) * (this.mass / 2);
        if (this.xvel > 0) {
          this.xvel *= (this.friction / this.mass) * this.mass;
        }
        if (this.xvel < 0) {
          this.xvel *= (this.friction / this.mass) * this.mass;
        }
      }
      if (this.y <= this.mass/2) {
        this.y = this.mass/2;
        this.yvel /= -1 / ((this.bounce * this.bouncefriction) / this.mass) * (this.mass / 2);
        if (this.xvel > 0) {
          this.xvel *= (this.friction / this.mass) * this.mass;
        }
        if (this.xvel < 0) {
          this.xvel *= (this.friction / this.mass) * this.mass;
        }
      }
      if (this.x >= windowWidth - this.mass/2) {
        this.x = windowWidth - this.mass/2;
        this.xvel *= -1 * ((this.bounce * this.bouncefriction) / this.mass) * (this.mass / 2);
      }
      if (this.x <= 0 + this.mass/2) {
        this.x = this.mass/2;
        this.xvel /= -1 * ((this.bounce / this.bouncefriction) * this.mass) / (this.mass / 2);
      }
      if (this.y < windowHeight - this.mass/2){
        this.yvel += (this.gravity * this.mass) / (this.mass / 2);
      }
    } else {
      this.xvel = mouseX - this.x;
      this.yvel = mouseY - this.y;
    }
    this.x += this.xvel;
    this.y += this.yvel;
  }
}
