var fixedRect, movingRect, obj1, obj2, obj3, obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //    fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;

  obj1=createSprite(700,500,60,30);
  obj2=createSprite(400,300,60,100);
  obj3=createSprite(500,100,90,30);
  obj4=createSprite(700,400,60,50);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if (isTouching(movingRect, obj3)) {
    obj3.shapeColor = "lightblue";
    movingRect.shapeColor = "orange";
  } else {
    movingRect.shapeColor = "green";
    obj3.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
}
else {
  return false;
}
}