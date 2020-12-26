var fixedRect, movingRect;
var obj1, obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(600,200,40,50);
  obj2 = createSprite(1000,200,40,50);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  obj1.x = mouseX;
  obj1.y = mouseY;

 if(isTouching(movingRect,fixedRect)){
   movingRect.shapeColor = "red";
   fixedRect.shapeColor = "red";
   bounceOff(movingRect, fixedRect);
 }
 
if(isTouching(obj1,obj2)){
  text("collison happened",800,500);
}

  drawSprites();
}

