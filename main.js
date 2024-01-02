img = "";
status1 = "";
objects = [];

function preload() {
   
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}


function modelLoaded() {
    console.log("Model Loded!")
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name " , name);
  window.location = "bedroom.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name " , name);
  window.location = "TV&AC.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name " , name);
  window.location = "desk.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name " , name);
  window.location = "bottles.html";
}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name " , name);
  window.location = "fruitbasket.html";
}