function setup() {
	createCanvas(windowWidth, windowHeight);
}
var x = 0;
var y = 50;
var r=255;
var g= 200;
var b= 200;
var speed = 5;
var col = 1;
function draw() {
	stroke(g,b,255);
	strokeWeight(5);
	ellipse(x, y, 100, 100);
	if(x>windowWidth/2){
		col = -1;
	}
	if(x>=width){
		speed= -5;
		col=-1;
		y = y+100;
	}
	x = x+speed;
	if(x<1){
		speed=5;
		col=1;
		y=y+100;
	}
	
	//r = random(0,255);
	g = random(0,255);
	b = random(0,255);
	
}
