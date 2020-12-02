
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var base,bob1,bob2,bob3,bob4,bob5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	base= new Ground(400,100,500,10)
	bob1= new Bob(280,500,80)
	bob2= new Bob(360,500,80)
	bob3= new Bob(440,500,80)
	bob4= new Bob(520,500,80)
	bob5= new Bob(600,500,80)
	chain1= new rope(bob1.body,base.body)
	chain2= new rope(bob2.body,base.body)
	chain3= new rope(bob3.body,base.body)
	chain4= new rope(bob4.body,base.body)



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  push();


pop();
  base.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();


  
  drawSprites();
 
}



