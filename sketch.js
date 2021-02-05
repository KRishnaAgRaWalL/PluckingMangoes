
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var sling;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  mango1=new mango(1100,100,30);
  mango2=new mango(1050,80,30);
  mango3=new mango(1000,500,30);
  mango4=new mango(1200,100,30);
  mango5=new mango(950,100,30);

  stoneObj=new Stone(240,420,50)
  treeObj=new tree(1050,580);
  

  groundObject=new ground(width/2,600,width,20);
  
  
	sling=new SlingShot(stoneObj.body,{x:240,y:420})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display();


  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  
  sling.display();

  groundObject.display();
}
function mouseDragged(){
      
    Matter.Body.setPosition(stoneObj.body,{x:mouseX, y: mouseY});

}

function mouseReleased(){
    sling.fly();
}


function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:185, y:400}) 
	  sling.attach(stoneObj.body);
	}
  }

  
  function detectollision(lstone,lmango){
   
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    
      if(distance<=lmango.r+lstone.r)
      {
        
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }