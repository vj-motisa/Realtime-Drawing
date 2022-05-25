nox = "";
noy = "";
rex = "";
lex = "";
rey = "";
ley = "";
diff = 0;


function setup() {
    canvas = createCanvas(578.3589, 331.45345);
    canvas.position(560, 53);
    video = createCapture(VIDEO);
    video.size(565, 318);
    poseNet = ml5.poseNet(video, ModelLoaded);
    poseNet.on("pose", gotPoses);
}

function ModelLoaded() {
    console.log("kakaka");
}

function draw() {
    background("#3b3012");
    fill("#6bdbd0");
    stroke("#701158");
    square(nox, noy, diff);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        nox = results[0].pose.nose.x;
        noy = results[0].pose.nose.y;
        console.log("Nose X= " + nox + " Nose Y= " + noy);


        rex = results[0].pose.rightWrist.x;
        rey = results[0].pose.rightWrist.y;
        lex = results[0].pose.leftWrist.x;
        ley = results[0].pose.leftWrist.y;

        diff = lex - rex;
        floor(diff);

    }
}
