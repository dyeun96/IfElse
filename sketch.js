function setup()
 {
  createCanvas(800, 600);
  noFill();
  stroke(255);
}

  function draw()
{
  background(148,212,255);
  if (mouseX < 300) {
  ellipse(200,200,100,100);
} else {
  ellipse(400, 200, 100, 100);
}
}