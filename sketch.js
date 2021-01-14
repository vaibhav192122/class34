const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
//var backgroundImg,platform;
var ball, slingshot;

/*var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;*/

/*function preload() {
    getBackgroundImg();
}*/

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,750,1200,20);
    box1=new Box(900,100,70,70);
    box2=new Box(900,100,70,70);
    box3=new Box(900,100,70,70);
    box4=new Box(900,100,70,70);
    box5=new Box(900,100,70,70);
    box6=new Box(900,100,70,70);
    box7=new Box(800,100,70,70);
    box8=new Box(800,100,70,70);
    box9=new Box(800,100,70,70);
    box10=new Box(800,100,70,70);

    ball=new Ball(200,200,80,80);

    slingshot=new Slingshot(ball.body,{x:650,y:200 })

}

function draw(){
    //if(backgroundImg)
        background("blue");
    
       /* noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    */
    Engine.update(engine);
    //strokeWeight(4);
   
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    
    ball.display();
    
    slingshot.display();
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
   
}

/*
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory=[]
        Matter.Body.setPosition(bird.body, {x: 200 , y: 50});
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log(response);
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}*/