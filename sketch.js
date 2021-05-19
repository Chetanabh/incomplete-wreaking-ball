const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground , ball , box1 ,box2,box3;
var box

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(200,200);

    ground = new Ground(600,380,1200,40);

    box1 = new Box(1000,320,60,60);
    box2 = new Box(1000,260,60,60);
    box3 = new Box(1000,200,60,60);
    box4 = new Box(1000,140,60,60);
    box5 = new Box(940,320,60,60);
    box6 = new Box(940,260,60,60);
    box7 = new Box(940,200,60,60);
    box8 = new Box(940,140,60,60);

    box9 = new Box(800,320,60,60);
    box10 = new Box(800,260,60,60);
    box11 = new Box(800,200,60,60);
    box12 = new Box(800,140,60,60);
    box13 = new Box(740,320,60,60);
    box14 = new Box(740,260,60,60);
    box15 = new Box(740,200,60,60);
    box16 = new Box(740,140,60,60);
    box = new box(200,250,40,40);

    //slingshot = new SlingShot(ball.body,box.body);

}

function draw(){
    background("skyblue");
    Engine.update(engine)
    ball.display();
    
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box.display();

    //slingshot.display();
}

function mouseDragged(){
   
}


function mouseReleased(){
    
}

function keyPressed(){
    
}

