var fixedRect, movingRect;
var sprite1, sprite2, sprite3, sprite4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 60);
  movingRect = createSprite(200,200,60,100);
  sprite1 = createSprite(200,300,50,50);
  sprite2 = createSprite(400,300,50,50);
  sprite1.shapeColor = "blue";
  sprite2.shapeColor = "purple";
  sprite3 = createSprite(700,50,50,50);
  sprite4 = createSprite(700,300,50,50);
  sprite3.shapeColor = "orange";
  sprite4.shapeColor = "black";
  movingRect.shapeColor = "green";  
  fixedRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.debug = true;
  sprite1.velocityX = 2;
  sprite2.velocityX = -2;
  sprite3.velocityY = 2;
  sprite4.velocityY = -2;
}

function draw() {
  background(255,255,255); 
  movingRect.y = mouseY;
  movingRect.x = mouseX;   
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 && 
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2) {
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    }
  else {
    movingRect.shapeColor = "green";  
    fixedRect.shapeColor = "green";
  }

  if(sprite1.x-sprite2.x<=sprite1.width/2+sprite2.width/2 && 
    sprite2.x-sprite1.x<=sprite1.width/2+sprite2.width/2)
    {
     sprite1.velocityX = sprite1.velocityX*(-1);
     sprite2.velocityX = sprite2.velocityX*(-1);
    }

  if(sprite3.y-sprite4.y<=sprite3.height/2+sprite4.height/2 && 
    sprite4.y-sprite3.y<=sprite3.height/2+sprite4.height/2)
     {
      sprite3.velocityY = sprite3.velocityY*(-1);
      sprite4.velocityY = sprite4.velocityY*(-1);
     }
  drawSprites();
}