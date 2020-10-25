var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 80);
  movingRect.shapeColor = "white"
  fixedRect = createSprite(200, 200, 80, 30);
  fixedRect.shapeColor = "white"
  
}

function draw() {
  background(0);  
movingRect.x = World.mouseX
movingRect.y = World.mouseY
movingRect.debug = true;
fixedRect.debug = true;

if (fixedRect.x - movingRect.x < (fixedRect.width + movingRect.width)/2 &&
   movingRect.x - fixedRect.x < (fixedRect.width + movingRect.width)/2 &&
   fixedRect.y - movingRect.y < (fixedRect.width + movingRect.width)/2 &&
   movingRect.y - fixedRect.y < (fixedRect.width + movingRect.width)/2 ){
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
   }else{
    movingRect.shapeColor = "white"
    fixedRect.shapeColor = "white"
   }

drawSprites();
}