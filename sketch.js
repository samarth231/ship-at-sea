
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  var sea = createSprite();
  sea.addImage(seaImg);
  sea.velocityX = -5
  var ship = createSprite(150, 200, 10,10);
  ship.addAnimation("moving", shipImg1);
  ship.scale = 0.3;
}

function setup(){
  createCanvas(800,400);
  
}

function draw() {
  drawSprites()  

 
}