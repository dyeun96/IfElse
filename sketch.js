function setup()
 {
  createCanvas(800, 600);
  noFill();
  stroke(255);
}

  function draw()
{
  background(148,212,255);
if (mouseX < 100) {
  ellipse(50, 200, 100, 100);
} else if (mouseX < 200){
  ellipse(150, 200, 100, 100);
} else if (mouseX < 300){
  ellipse(250, 200, 100, 100);
} else if (mouseX < 400){
  ellipse(350, 200, 100, 100);
} else if (mouseX < 500){
  ellipse(450, 200, 100, 100);
} else {
  ellipse(550, 200, 100, 100);
}
}