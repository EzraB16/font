noseX=0
noseY=0

difference=0
rightWrist=0

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('model is loaded');
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
    }
}

function draw(){
    background('yellow');
}