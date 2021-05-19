var canvas;
var together;
var snow,snowImg2;

function preload(){
  //load images here
  snowImg2=loadImage("snow2.jpg");

}

function setup(){
  createCanvas(600,800);
  //create snow sprites here
  snow=createSprite(200,50);
  snow.scale=0.5;
}

function draw() {
background(snowImg2); 



  drawSprites();
}