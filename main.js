
difference = 0
leftwrist_x = 0
rightwrist_x = 0

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(500,460);
    canvas.position(700,125);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {   
    background('#c8def7');
    fill("#75A9C3");
    stroke("#75A9C3");
    textSize(difference);
    text('Harshith', 150, 250);
    document.getElementById("size").innerHTML = "Size of the font is " + difference + "px";
}


function modelLoaded() {s
    console.log('Posenet model hass been loaded');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftwrist_x = results[0].pose.leftWrist.x;
        rightwrist_x = results[0].pose.rightWrist.x;
        difference = floor(leftwrist_x - rightwrist_x);
        console.log("left wrist x = " + leftwrist_x);
        console.log("right wrist x = " + rightwrist_x);
        console.log("difference between the wrists is = " + difference);

    }
}
