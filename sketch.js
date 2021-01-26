const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player

var playerImg

function preload(){
	playerImg = loadImage("images/playerShip.png")
}

function setup(){
	createCanvas(displayWidth,displayHeight);

	engine = Engine.create();
	world = engine.world;

	player = createSprite(displayWidth/2,displayHeight/2);
	player.addImage(playerImg);
	player.scale = 0.3


	Engine.run(engine);
  
}


function draw(){
  rectMode(CENTER);
  background(0);

 if(keyCode === 39){
	 player.velocityX=5
 }

 if(keyCode === 37){
	 player.velocityX=-5
 }



 drawSprites();
 
}



