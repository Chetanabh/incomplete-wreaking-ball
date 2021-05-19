class Ball {
    constructor(x,y){
        var options = {
            density : 2,

        }
        this.x=x;
        this.y=y;
        this.ball = Bodies.circle(this.x,this.y,30,options);
        World.add(world,this.ball);

    }
    display(){
        push()
        fill("black");
        translate(this.ball.position.x,this.ball.position.y);
        rotate(this.ball.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,30);
        pop()
    }
}
