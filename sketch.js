var circle = {
 x: 0,
 y: 300,
 diameter: 100
};

var col = {
  r: 218,
  g: 160,
  b:221
}

var speedx = 3;

var speedy = 3;

function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(200);
	fill(col.r, col.g, col.b);
  strokeWeight(0);
	ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

  circle.x = circle.x + speedx;
  circle.y = circle.y + speedy;

//x actions
  if (circle.x>=(width-(circle.diameter/2))) {
    speedx = -speedx;
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);

  }
  if (circle.x<=(circle.diameter/2)) {
    speedx = 3;
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);
  }

// y actions
  if (circle.y>=(height-(circle.diameter/2))) {
    speedy = -3;
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);
  }
  if (circle.y<=(circle.diameter/2)) {
    speedy = 3;
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);
  }

}
