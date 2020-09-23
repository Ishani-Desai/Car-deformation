var car;
var wall;
var weight;
var speed



function setup() {
  createCanvas(1600, 400);
  speed = random(55, 90);
  weight = random(400, 1500)

  car = createSprite(50, 100, 40, 40);
  car.shapeColor = ("blue");
  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = ("yellow");
}

function draw() {
  background("hotpink");
  car.velocityX = speed;

  if (wall.x - car.x < (car.width + wall.width / 2)) {
    car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed / 22509;
    
    if (deformation<180) {
      car.shapeColor=("black")
    }
    
    if (deformation<180 && deformation> 100) {
      car.shapeColor=("white")
    }
    
    if (deformation<100) {
      car.shapeColor=("green")
    }
  }
  drawSprites();
}