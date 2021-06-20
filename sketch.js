const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var circle1;

function preload(){
  
bg = loadImage("banner-8.jpg");
bg2 = loadImage("alaska-northern-lights-2000-copy-copy-770x390.jpg");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,50)
    hammer = new Hammer(10,100);

  circle1 = new Rubber(300,200,30);
  circle2 = new Rubber(200,200,15);

  pebble = new Stone(500,200,25,25);
pebble2 = new Stone(400,200,50,50);

  iblock = new Iron(700,200,100,35);
  iblock2 = new Iron(600,200,70,20);

}

function draw(){
    background(bg2);
    Engine.update(engine);


    plane.display();
    hammer.display();

    circle1.display();
    circle2.display();

    pebble.display();
    pebble2.display();

    iblock.display();
    iblock2.display();
 
}