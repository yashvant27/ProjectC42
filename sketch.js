var hour,minute,second;
function setup() {
  createCanvas(800,400);
  
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(DEGREES)
  scAngle = map(sc,0,60,0,360)
}

function draw() {
  background(0,0,0);  
  text('Current hour:\n' + hr, 5, 50);
  text('Current minute: \n' + mn, 5, 75);
  text('Current second: \n' + sc, 5, 100);
  background(0);
  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  let c = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  translate(200,200);
  drawSprites();
}