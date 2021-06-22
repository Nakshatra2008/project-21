var bullet,wall;
var speed,weight;
var damage,thickness;
var state = 1

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(20, 200, 50, 10);
bullet.shapeColor = "white";

thickness = random(22,83)
wall = createSprite(1200,200,thickness,height/2);



}

function draw() {
  background(0,0,0);  


 if(state){
  speed = random(50,99);
  weight = random(450,1500);

  bullet.velocityX = speed;

 damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)


if(bullet.x - wall.x < wall.width/2 + bullet.width/2
  && wall.x - bullet.x < wall.width/2 + bullet.width/2
   && bullet.y - wall.y < wall.height/2 + bullet.height/2
    && wall.y - bullet.y < wall.height/2 + bullet.height/2){
     state = 0
      // bullet.shapeColor = "blue"
      // console.log("touched")
      bullet.velocityX=0

      if(damage<10){
        wall.shapeColor = "green"
      }
      else if(damage>10 ){
        wall.shapeColor = "red"
      }
      
      console.log(damage)
    }
 }
 


  drawSprites();
}