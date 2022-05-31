class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.x = []
    this.y = []
    this.smoke = loadImage("sprites/smoke.png");
  }

  display() {
    if(this.body.velocity.x > 12 && this.body.position.x > 200){
    var posx = [this.body.position.x];
    var posy = [this.body.position.y];
    this.x.push(posx);
    this.y.push(posy);
    }
    for(var I = 0; I < this.x.length; I++){
    image(this.smoke, this.x[I], this.y[I]);
    }
    super.display();
  }
}
