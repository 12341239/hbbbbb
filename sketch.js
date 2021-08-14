
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,bgImg;
var rocket,rocketImg;
var alien,alienImg;
var bullet,bulletImg;

function preload(){
	bgImg = loadImage("bg.jpg");
	rocketImg = loadImage("rocket.jpg");
	alienImg = loadImage("alien.jpg");
	bulletImg = loadImage("bullet.jpg")
 

	
}

function setup() {
	createCanvas(800, 700);
	
	bg = createSprite(165,485,5,1);
	bg.addImage(bgImg);
	bg.scale = 1.3

	engine = Engine.create();
	world = engine.world;

	
	bg = createSprite(165,485,5,1);
	bg.addImage(bgImg);
	bg.scale = 1.3
	
	rocket = createSprite(400,600,600,100);
	rocket.addImage(rocketImg);
	rocket.scale = 0.7;


	alien = createSprite(400,200,1000,100);
	alien.addImage(alienImg);
	alien.scale = 0.7;

    bullet = createSprite(400,460,100,100);
	bullet.addImage(bulletImg);
	bullet.scale = 0.1;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(keyDown("UP_ARROW")) {
	rocket.velocityY = -6 ;
	
  }
  if(keyDown("LEFT_ARROW")) {
	rocket.velocityX = -6 ;


  }
  if(keyDown("RIGHT_ARROW")) {
	rocket.velocityX = 6 ;


  }
  if(keyDown("DOWN_ARROW")) {
	rocket.velocityY = 6 ;
  }
  if(keyDown("SPACE")) {
	bullet.velocityY = -6 ;
  }

  






  drawSprites();
 
}



