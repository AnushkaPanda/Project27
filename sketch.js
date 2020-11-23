
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var world; 
var roof,bob1,bob2,bob3,bob4,bob5;
var ground, rope1;
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=40
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	
	//Create the Bodies Here.
	roof=new Roof(width/2,70,width,20);
	bob1 = new Bob(300,450,60);
	bob2 = new Bob (300,450,60);
	bob3 = new Bob (300,450,60);
	bob4 = new Bob (300,450,60);
	bob5 = new Bob (300,450,60);
    ground=new Ground(width/2,670,width,20);
   
	rope1=new Rope(bob1.body,roof.body,-bobDiameter*11-15, 0)

	rope2=new Rope(bob2.body,roof.body,-bobDiameter*9-10, 0)
	rope3=new Rope(bob3.body,roof.body,-bobDiameter*7-10, 0)
	rope4=new Rope(bob4.body,roof.body,-bobDiameter*5-10, 0)
	rope5=new Rope(bob5.body,roof.body,-bobDiameter*3-30, 0)


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
    //Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  
  drawSprites();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}






