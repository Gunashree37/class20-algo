var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "yellow";
}

function draw() {
  background("pink");

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2
    && movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2
    && movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2){

    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    
  }
  else{
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "green";
  }
   
  drawSprites();
}