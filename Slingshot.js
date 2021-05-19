class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyB = bodyB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    /*attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }*/

    display(){
       // posA = this.sling.bodyA.position;
        //posB = this.pointB
        push()
        strokeWeight(4);
        stroke("green");
        //line(posB.x,posB.y,posA.x,posA.y)
        pop();
    }
    
}