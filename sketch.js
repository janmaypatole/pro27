
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var chain1,ball1;
var chain2,ball2;
var wall
var chain3,ball3
var chain4,ball4

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


 wall = createSprite(375,275,640,25)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    chain1 = new Cable(295,345,1,120)
    ball1 = new Ball(295,355,100,100,)
    chain2 = new Cable(600,320,1,80,)
    ball2 = new Ball(600,355,100,100,)
    ball3 = new Ball(445,355,100,100)
    chain3 = new Cable(445,345,1,120)
    chain4 = new Cable(140,345,1,120)
    ball4 = new  Ball(140,355,100,100)
//	Engine.run(engine);
 

}


function draw() {
  rectMode(CENTER);
  background(255);
Engine.update(engine)

  chain1.display();
  ball1.display();
  chain2.display();
  ball2.display();
  chain3.display()
  ball3.display();
  chain4.display();
  ball4.display();
    drawSprites();

    
}




