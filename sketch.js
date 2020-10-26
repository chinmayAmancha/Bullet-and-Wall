var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(400,1600);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 50);
  bullet.weight = weight;
  bullet.shapeColor = "white";
  bullet.veloctyX = speed;
  wall = createSprite(1200,200,thickness,height / 2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(255,255,255);
  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  }
    if(damage > 10) {
      bullet.shapeColor = (255,0,0);
    }

    if(damage < 10) {
      bullet.shapeColor = (0,255,0);
    }
  drawSprites();
}

function hasCollided(bullet, wall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(buletRightEdge >= wallLeftEdge) {
    return true
  }
  return false;
}