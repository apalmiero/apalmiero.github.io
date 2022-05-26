var zoom = 12;
var landmark = 250;
var expression;
var interval = 6;


function setup() {
  createCanvas(500, 500);
  expression = prompt("What is your expression? Use * for multiplication, / for division, ** to raise a number to any power, and () to express order of operations!");
  
  background(0);
  drawAxis();
  getPoints();
  labelLandmarks();
}

function mouseMoved(){
  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    zoom *= 1.1;
  }
  if(keyCode === DOWN_ARROW){
    zoom *= 1/1.1;
  }
  
  background(0);
  drawAxis();
  getPoints();
  labelLandmarks();
}

function labelLandmarks(){
  fill(255);
  stroke(255);
  text((int)(landmark/zoom), width/2, 10);
  text("-" + (int)(landmark/zoom), width/2, 500);
  text("-" + (int)(landmark/zoom), 0, height/2);
  text((int)(landmark/zoom), 475, height/2);
}

function getPoints(){
  for(var i = -(landmark/zoom); i < (landmark/zoom); i += 0.01){
    var y = getYValue(i);
    var reciprocal = 1/zoom;
    point((i/reciprocal) + landmark, -(y/reciprocal) + landmark);
  }
}

function drawAxis(){
  
  var reciprocal = 1/zoom;
  stroke(100);
  for(var i = 0; i < ((landmark/zoom)/interval) + 1; i++){
    line(width/2 + ((interval*i)/(250)) * ((landmark/reciprocal)), 0, width/2 + ((interval*i)/(250)) * ((landmark/reciprocal)), height);
  }
  for(var i = 0; i < ((landmark/zoom)/interval) + 1; i++){
    line(width/2 - ((interval*i)/(250)) * ((landmark/reciprocal)), 0, width/2 - ((interval*i)/(250)) * ((landmark/reciprocal)), height);
  }
  for(var i = 0; i < ((landmark/zoom)/interval) + 1; i++){
    line(0, height/2 + ((interval*i)/(250)) * ((landmark/reciprocal)), width, height/2 + ((interval*i)/(250)) * ((landmark/reciprocal)));
  }
  for(var i = 0; i < ((landmark/zoom)/interval) + 1; i++){
    line(0, height/2 - ((interval*i)/(250)) * ((landmark/reciprocal)), width, height/2 - ((interval*i)/(250)) * ((landmark/reciprocal)));
  }
  stroke(255);
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
}

function getYValue(x){
  return eval(expression);
}

console.log((landmark/zoom)/interval)
