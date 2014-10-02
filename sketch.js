function setup()
 {
  createCanvas(800, 600);
  stroke(255);
}

  function draw()
{
  background(148,212,255);
  	fill(255,255,255);
if (mouseY < 100) {
	
  ellipse(200, 50, 20, 20);
} else if (mouseY < 200){
  ellipse(200, 150, 50, 50);
} else if (mouseY < 300){
  ellipse(200, 250, 80, 80);
} else if (mouseY < 400){
  ellipse(200, 350, 100, 100);
} else if (mouseY < 500){
  ellipse(200, 450, 50, 50);
} else {
  ellipse(200, 550, 20, 20);
}
 if (mouseY < 5) {

  ellipse(500, 50, 20, 20);
} else if (mouseY < 200){
  ellipse(500, 150, 50, 50);
} else if (mouseY < 300){
  ellipse(500, 250, 80, 80);
} else if (mouseY < 400){
  ellipse(500, 350, 100, 100);
} else if (mouseY < 500){
  ellipse(500, 450, 50, 50);
} else {
  ellipse(500, 550, 20, 20);
}
 if (mouseY < 180) {

  ellipse(700, 50, 20, 20);
} else if (mouseY < 200){
  ellipse(700, 150, 50, 50);
} else if (mouseY < 300){
  ellipse(700, 250, 80, 80);
} else if (mouseY < 400){
  ellipse(700, 350, 100, 100);
} else if (mouseY < 500){
  ellipse(700, 450, 50, 50);
} else {
  ellipse(700, 550, 20, 20);
}
}