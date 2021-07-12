const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon_img
var engine , world
var stand,stand2
var ball
var slingshot
function preload(){
polygon_img = loadImage("polygon.png")
}

function setup(){
    createCanvas(900,400)
    engine = Engine.create()
    world = engine.world
    Engine.update(engine)

    ground = new Ground(600,25,1200,50)

    stand = new Stand(390,300,250,10)
    stand2 = new Stand(700,200,200,10)
    
    block = new Box(300,275,30,40)
    block2 = new Box(330,275,30,40)
    block3 = new Box(360,275,30,40)
    block4 = new Box(390,275,30,40)
    block5 = new Box(420,275,30,40)
    block6 = new Box(450,275,30,40)
    block7 = new Box(480,275,30,40)
    
    block8 = new Box(330,235,30,40)
    block9 = new Box(360,235,30,40)
    block10 = new Box(390,235,30,40)
    block11 = new Box(420,235,30,40)
    block12 = new Box(450,235,30,40)

    block14 = new Box(360,195,30,40)
    block15 = new Box(390,195,30,40)
    block16 = new Box(420,195,30,40)

    block17 = new Box(390,155,30,40)

    ball = Bodies.circle(50,200,20)
    World.add(world,ball)
    slingshot = new SlingShot(this.ball,{x:100,y:200})
}

function draw(){
background(255,255,255)

ground.display();

block.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

block14.display();
block15.display();
block16.display();
block17.display();

slingshot.display();
}

