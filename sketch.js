
var bgImg,cat,mouse;
function preload(){
    bgImg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catRunning= loadAnimation("images/cat2.png" , "images/cat3.png");
    catendimage = loadAnimation("images/cat4.png");
    mouseTeasing= loadAnimation("images/mouse2.png" ,"images/mouse3.png");
    mouseendImage= loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat = createSprite(800,700);
   mouse = createSprite(200,700);
   cat.addAnimation("sitting",catimg1);
   cat.addAnimation("running",catRunning);
   cat.addAnimation("end", catendimage);

   mouse.addAnimation("1",mouseimg1);
   mouse.addAnimation("2",mouseTeasing);
   mouse.addAnimation("3",mouseendImage);

cat.scale = 0.2;
mouse.scale = 0.2;

}

function draw() {
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if (cat.x-mouse.x < (cat.width-mouse.width)/2){
    cat.changeAnimation("end", catendimage);
    mouse.changeAnimation("3",mouseendImage);

cat.velocityX = 0;
}
    drawSprites();

}


function keyPressed(){
    if(keyCode==LEFT_ARROW){
        cat.velocityX = -5;
        cat.changeAnimation("running",catRunning);
        mouse.changeAnimation("2",mouseTeasing);
    }
}