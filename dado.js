var num_az

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(0)
  if (mouseIsPressed){
    num_az = int(random(1,7))
  } else if (num_az == 1){
      ellipse(200,200,100,100)
    } else if (num_az == 6) {
      ellipse(100,80,100,100)
      ellipse(100,200,100,100)
      ellipse(100,320,100,100)
      ellipse(300,80,100,100)
      ellipse(300,200,100,100)
      ellipse(300,320,100,100)
    } else if (num_az == 2){
      ellipse(100,100,100,100)
      ellipse(300,300,100,100)
    } else if (num_az == 3){
      ellipse(100,100,100,100)
      ellipse(200,200,100,100)
      ellipse(300,300,100,100)
    } else if (num_az == 4){
      ellipse(100,100,100,100)
      ellipse(100,300,100,100)
      ellipse(300,300,100,100)
      ellipse(300,100,100,100)
    } else if (num_az == 5){
      ellipse(100,100,100,100)
      ellipse(100,300,100,100)
      ellipse(300,300,100,100)
      ellipse(300,100,100,100)
      ellipse(200,200,100,100)
    } 
}