class constraint {
    constructor (bodyA, pointB){
        var any = {
            bodyA: bodyA,
            pointB: pointB,
            length: 20,
            stiffness: 0.2
        }
        this.body = Matter.Constraint.create(any);
        this.anything = pointB;
        World.add(world, this.body);
        this.something1 = loadImage("sprites/sling1.png");
        this.something2 = loadImage("sprites/sling2.png");
        this.something3 = loadImage("sprites/sling3.png");
    }
    display(){
        if(this.body.bodyA){
            push();
            strokeWeight(7)
            stroke(48, 22, 8)
        var a = this.body.bodyA.position;
        var b = this.anything;
        line(a.x, a.y, b.x-20, b.y);
        line(a.x, a.y, b.x+20, b.y);
        pop();
        image(this.something3, a.x-20, a.y-10, 15, 30);
        }
        image(this.something1, 200, 20)
        image(this.something2, 170,20)
    }
    fly(){
        this.body.bodyA = null;
    }
    attach(body){
        this.body.bodyA = body;
        
    }
}