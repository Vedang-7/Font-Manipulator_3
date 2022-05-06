difference=0;
left_wrist_x=0;
right_wrist_x=0;
function setup() 
{
  canvas = createCanvas(550, 550);
  canvas.position(560, 150);
  video = createCapture(VIDEO);
  video.size(550, 500,);
  posenet= ml5.poseNet(video, modelLoaded);
  posenet.on('pose', gotposes)
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotposes(results){
    if(results.length>0){
    console.log(results);
    left_wrist_x=results[0].pose.leftWrist.x;
    right_wrist_x=results[0].pose.rightWrist.x;
    difference=floor(left_wrist_x-right_wrist_x);
    console.log("Left wrist_x= "+left_wrist_x+"Right wrist_x= "+right_wrist_x+"Difference= "+difference);
    }
}
function draw(){
    background('#26e0bb');
    textSize(difference);
    fill('#111716');
    text('Not_Vedang', 50, 400);
}