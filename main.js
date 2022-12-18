xm=0
ym=0
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
    image(m , xm-30, ym+5, 60, 30)
}
function snap() {
    save("definately_not_a_virus.png")
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log("x = "+results[0].pose.nose.x);
        xm=results[0].pose.nose.x;
        console.log(results);
        console.log("y = "+results[0].pose.nose.y);
        ym=results[0].pose.nose.y;
    }
}