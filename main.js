function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}

function take_snapshot(){
    save('student.png');
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}



function setup() {
  createCanvas(500,500);

  background(200);

  // White ellipse.
  ellipseMode(RADIUS);
  fill(255);
  ellipse(100, 100, 30, 30);

  // Gray ellipse.
  ellipseMode(CENTER);
  fill(100);
  ellipse(100, 100, 30, 30);

  
}