
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paper1 = new Paper(280,350,40,40);
     ground1 = new Ground(400,680,800,20);
    
     box2 = new Box(650,605,120,130);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  paper1.display();
  ground1.display();
  
  box2.display();

  drawSprites();
}


function keyPressed(){
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-150})

 }    
      
}
