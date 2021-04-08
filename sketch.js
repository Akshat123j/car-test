var car,wall;
var speed,weight;
SERVE=0;
PLAY=1
var gameState=SERVE;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,width/2)
  speed=random(55,90);
  weight=random(400,1500);
  deformation=(0.5*weight*speed*speed)/22500
}

function draw() {
  background(0);  
  if(gameState===SERVE){
    car.velocityX=0;
    car.x=800;
    textSize(20)
    text("press 'space' to test",780,250)
    text("if car color changes to green deformation is less than 100",730,290)
    text("if car color changes to yellow deformation is between 100 & 180",730,330)
    text("if car color changes to red deformation is more than 180",730,370)
    text("speed:"+speed,800,130)
    text("weight:"+weight,800,170)
    if(keyDown("space")){
      gameState=PLAY;
      car.x=50;
    }
  }
  car.velocityX=speed;
  if(isTouching(car,wall)){
    car.velocityX=0;
    textSize(20)
   text("press 't' to test  again",730,200) 
   if(keyDown("t")){
     gameState=SERVE;
   }
    if(deformation<100){
      car.shapeColor="green";
      text("car color changes to green deformation is less than 100",730,290)
    }else if(deformation>100&&deformation<180){
      car.shapeColor="yellow"; text("car color changes to yellow deformation is between 100 & 180",730,330)
    }else if(deformation>180){
      car.shapeColor="red"; text(" car color changes to red deformation is more than 180",730,370)
    }
  }
  else{
    car.shapeColor="blue"
  }
 
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object1.width/2+object1.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2){
      return true;
    }
    else{
      return false;
    }
}