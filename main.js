Status = "";
InputValue = document.getElementById("ObjectInput");

function setup() {
    Canvas = createCanvas(480, 1200);
    Canvas.center();
}

function preload() {
    Video = createCapture(VIDEO);
    Video.hide()
}

function draw() {
    image(Video, 0, 0, 480, 380);
}

function Start() {
    ObjectDetector = ml5.objectDetector("cocossd", ModelLoaded);
    document.getElementById("StatusDetectedLabelDiv").innerHTML = "Status : Detecting Objects";
}

function ModelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

if (Status != "") {
    objectDetector.detect(Video, GotResult);

    for (i = 0; i <= Objects.length; i++) {

        fill("FF0000");
        Percent = floor(Objects[i].confidence * 100);
        text(Objects[i].label + " " + Percent + "%", Objects[i].x + 15, Objects[i].y + 15);
        noFill();
        stroke("FF0000");
        rect(Objects[i].x, Objects[i].y, Objects[i].width, Objects[i].height)
    }
}