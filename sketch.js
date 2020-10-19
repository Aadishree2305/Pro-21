var wall, thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(400,400);

  speed = random(233,321);
  weight = random(30,52);
  thickness = random(22,83);

  wall = createSprite(200,200,thickness,height/2);

  bullet = createSprite(20,180,20,20);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

}

function draw() {
  background(0);  

  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5* weight* speed* speed/(thickness *thickness *thickness);

    if(damage>10){
       wall.shapeColor="blue";
    }

    if(damage<10){
      wall.shapeColor="red";
   }

  }
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
   bulletRightEdge = lbullet.x+lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge)
   { 
     return true ;
   }
   return false;
}
