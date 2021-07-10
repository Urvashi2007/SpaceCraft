var iss , spaceCraft
var bg , issImg , scImg1 , scImg2 , stImg3, stImg4
var doged = false 
function preload() {
  bg=loadImage("spacebg.jpg")
  scImg1=loadImage("spacecraft1.png")
  scImg2=loadImage("spacecraft2.png")
  scImg3=loadImage("spacecraft3.png")
  scImg4=loadImage("spacecraft4.png")
  issImg=loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
  spaceCraft=createSprite(285,240)
  spaceCraft.addImage(scImg1)
  spaceCraft.scale=0.15
  iss = createSprite(330,130)
  iss.addImage(issImg)
  iss.scale=1

}

function draw() {
  background(bg)
if(!doged){
  spaceCraft.x = spaceCraft.x+random(-1,1)

 if(keyDown("UP_ARROW")){
   spaceCraft.y=spaceCraft.y-2
 }

 if(keyDown("LEFT_ARROW")){
  spaceCraft.x=spaceCraft.x-2
  spaceCraft.addImage(scImg3)
}
if(keyDown("RIGHT_ARROW")){
  spaceCraft.x=spaceCraft.x+2
  spaceCraft.addImage(scImg4)
}
if(keyDown("DOWN_ARROW")){
  spaceCraft.addImage(scImg2)
}
}
if(spaceCraft.y<=(iss.y+70)&&spaceCraft.x<=(iss.x-10)){
doged=true 
textSize(25)
text("Doging successful",200,300)

}
  drawSprites();
}