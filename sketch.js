
var bg,sleep,brush,gym,eat,bath,move,drink;
var astro;


function preload()
{
  bg=loadImage("iss.png");
  
  sleep= loadAnimation("sleep.png")
  brush= loadAnimation("brush.png")
  gym= loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  eat= loadAnimation("eat1.png","eat2.png")
  drink= loadAnimation("drink1.png","drink2.png")
  bath=loadAnimation("bath1.png","bath2.png")
  move=loadAnimation("move.png","move1.png","move.png","move1.png")

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astro= createSprite(300,230);
 astro.addAnimation("sleeping",sleep)
 astro.scale=0.1;
}

function draw() {
  background(bg);  
  edges=createEdgeSprites();
  astro.bounceOff(edges);
  drawSprites();



if(keyDown("UP_ARROW"))
{
  astro.addAnimation("brushing",brush)
  astro.changeAnimation("brushing")
  astro.y=350;
  astro.velocityX=0;
  astro.velocityY=0;
  
}




if(keyDown("DOWN_ARROW"))
{
  astro.addAnimation("gyming",gym)
  astro.changeAnimation("gyming")
  astro.y=350;
  astro.velocityX=0;
  astro.velocityY=0;  
}

if(keyDown("RIGHT_ARROW"))
{
  astro.addAnimation("bathing",bath)
  astro.changeAnimation("bathing")
  astro.y=300;
  astro.velocityX=0;
  astro.velocityY=0;
  
}
if(keyDown("m"))
{
  astro.addAnimation("moving",move)
  astro.changeAnimation("moving")
 
  astro.velocityX=1;
  astro.velocityY=1;  
}
if(keyDown("e"))
{
  astro.addAnimation("eating",eat)
  astro.changeAnimation("eating")
  astro.y=300;
  astro.velocityX=0;
  astro.velocityY=0;
  
}
if(keyDown("d"))
{
  astro.addAnimation("drinking",drink)
  astro.changeAnimation("drinking")
  astro.y=300;
  astro.velocityX=0;
  astro.velocityY=0;
  
}

}