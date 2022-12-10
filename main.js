function preload() {
m = loadImage("images.png")
}
function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide();

    poseNet = ml5.poseNet(video, medelLoaded);
    poseNet.on("pose", gotPoses);
}
function medelLoaded() {
    console.log("poseNet Initialized");
}
function draw() {
    image(video, 0, 0, 600, 600)
    image(m , 0, 0, 60, 30)
}
function snap() {
    save("not_a_virus.png")
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log("x = "+results[0].pose.nose.x);
        console.log(results);
        console.log("y = "+results[0].pose.nose.y);
    }
}