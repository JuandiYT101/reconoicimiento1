noseX = 0;
noseY = 0;


function preload(){
clown_nose = loadImage('https://i.postimg.cc/fyqKWbnb/mustache-png.webp');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet está inicializando');
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX,noseY, 30, 30);
}
function gotPoses(results){
    if(results.length > 0) { console.log(results); 
        noseX = results[0].pose.nose.x-15;
         noseY = results[0].pose.nose.y -1;
         }
         }





function take_snapshot(){
    save('student.png');
}

