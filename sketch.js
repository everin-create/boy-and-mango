
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world;
var human

function preload() {
    boyImg = loadImage("boypng");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
   human = createSprite(300,300,20,100)
   human.addImage(boyIMG)

   stone= new Stone(235,420,20)

   tree= new Tree(800,200,20,300)

   mango1= new Mango(750,180,20)
   mango2= new Mango(750,150,20)
   mango3= new Mango(800,280,20)
   mango4= new Mango(700,200,20)
   mango5= new Mango(900,150,20)

   slingshot = new Chain(stone.body,{x:200,y:300});

   detectcollision()
}
function draw(){
	Engine.update(engine);
	ground.display()
	stone.display()
	human.display()
	mango1.display()
	mango2.display()
	mango3.display()
	mango4.display()
	mango5.display()
	tree.display()
	chain.display()
	detectcollision(stone,mango1)
	detectcollision(stone,mango2)
	detectcollision(stone,mango3)
	detectcollision(stone,mango4)
	detectcollision(stone,mango5)
	

}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly()
}
function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition= lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango.body,false);
}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		chain.attach(stone.body)
	}
}
