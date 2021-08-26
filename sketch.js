var background,backgroundImg;
var astronaut;
var sleep,brush,gym,bath,eat,move;

function preload() {
backgroundImg = loadImage("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym = loadAnimation("gym1.png","gym2.png");
bath = loadAnimation("bath1.png","bath2.png");
eat = loadAnimation("eat1.png","eat2.png");
move = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(750,500);
  background = createSprite(370,250);
  background.addImage("iss",backgroundImg);
  background.scale=0.15;

  astronaut = createSprite(350,300);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
 
}

function draw() {

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y=300;
  
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("M_BUTTON")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y=350;
  astronaut.velocityX=1;
  astronaut.velocityY=1;
}





















  createEdgeSprites();
  drawSprites();
}