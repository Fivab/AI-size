function setup() {
    video=createCapture(VIDEO);
    video.size(400,400);
    canvas=createCanvas(450, 450);
    canvas.position(560, 100);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotPoses(results) {
    if(results>0) {
        console.log(poses);
    }
}

function draw() {
    background("#7f8082");
}