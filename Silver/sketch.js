var backgroundImg;
var screwImg;
var roverForwardImg, roverLeftImg, roverRightImg;
var fuelImg;

function preload()
{
  backgroundImg = loadImage("./assets/mars-background2.webp");
  screwImg = loadImage("./assets/screw.png");
  roverForwardImg = loadImage("./assets/roverForward.png");
  roverLeftImg = loadImage("./assets/roverLeft.png");
  roverRightImg = loadImage("./assets/roverRight.png");
  fuelImg = loadImage("./assets/fuel_canisters.png");

}

function setup()
{
  createCanvas(1200,800);
 
}

function draw()
{
  background(backgroundImg);
}