var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(200,200,80,100);
  car.shapeColor="blue";
  car.velocityX=3;

  wall = createSprite(800,200,120,80);
  wall.shapeColor="pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
 else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
 }

 BounceOff(car,wall);

  drawSprites();
}

