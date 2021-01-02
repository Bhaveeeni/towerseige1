
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var stand,box1,box2,box3,box4,box5,box6,box7,box8,box9,slingshot,polygon

function preload(){
   polygonImage=loadImage("polygon.png")
}

function setup(){
    createCanvas(800,700)

    engine = Engine.create()
	world = engine.world;

    this.polygon=Bodies.circle(30,110,20)
    World.add(world,this.polygon)
   // this.image=loadImage("polygon.png")
    


    stand=new Ground(300,300,200,5)
    box1=new Box(130,135,30,40)
    box2=new Box(145,135,30,40)
    box3=new Box(160,135,30,40)
    box4=new Box(175,135,30,40)
    box5=new Box(190,135,30,40)
    box6=new Box(145,115,30,40)
    box7=new Box(160,115,30,40)
    box8=new Box(175,115,30,40)
    box9=new Box(160,95,30,40)
    
    slingshot=new Slingshot(this.polygon,{x:100,y:200})

    
}
function draw(){
    Engine.update(engine);
   background(0)
   
   stand.display()
   box1.display()
   box2.display()
   box3.display()
   box4.display()
   box5.display()
   box6.display()
   box7.display()
   box8.display()
   box9.display()
  
   slingshot.display()
   imageMode(CENTER)
   image(polygonImage,polygon.position.x,polygon.position.y,30,30)
   
   drawSprites()
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly()
}
