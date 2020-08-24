var winkel_n = 0;
var radius_n = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(0);
}

function draw() {
  
  var winkel = winkel_n * 120;
  var radius = radius_n * sqrt(winkel_n);
  var xKoord = radius * cos(winkel) + width/2;
  var yKoord = radius * sin(winkel) + height/2;

  noStroke();  
  fill(winkel_n%1200+160, winkel_n%700+30, winkel_n%100+20);
  ellipse(xKoord,yKoord,6,6);
  
  winkel_n++;
}