class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visi=255;
  }
display(){
  //console.log(this.body.speed);
  
  if(this.body.speed<2.5){
   super.display();
  }
  else{
    World.remove(world, this.body);
    push();
    tint(255, this.visi);
    this.visi=this.visi-6
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
  }
};
score(){
  if(this.visi < 0 && this.visi > -600){
   score++
  
}
}
};