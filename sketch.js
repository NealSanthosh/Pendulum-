const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint = matter.constraint;

var engine, world;
var wood;
var ball;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    wood = Bodies.rectangle(300,10,200,20,ground_options);
    World.add(world,wood);

    var ball_options ={
        restitution: 1.02
    }

    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

    chain = new Chain(ball,wood);
}

function draw(){
    background(99);
    Engine.update(engine);

    if (mouseIsPressed) {
        ball.position.x = mouseX;
        ball.position.y = mouseY;
    }

    fill("brown");

    rectMode(CENTER);
    rect(wood.position.x,wood.position.y,600,20);

    fill("brown");

    ellipseMode(RADIUS);
    ellipseMode(CENTER);
    ellipse(ball.position.x,ball.position.y,40,40);

    fill("black");

    strokeWeight(3);
    line(ball.position.x,ball.position.y,wood.position.x,wood.position.y);
}