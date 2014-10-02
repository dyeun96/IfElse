function setup()
 {
  createCanvas(800, 600);
  noFill();
  stroke(255);
}

  function draw()
{
  background(148,212,255);
if (mouseY < 100) {
  ellipse(50, 200, 20, 20);
} else if (mouseY < 200){
  ellipse(150, 200, 50, 50);
} else if (mouseY < 300){
  ellipse(250, 200, 80, 80);
} else if (mouseY < 400){
  ellipse(350, 200, 100, 100);
} else if (mouseY < 500){
  ellipse(450, 200, 50, 50);
} else {
  ellipse(550, 200, 20, 20);
}
}