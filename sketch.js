const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block27, block28;
var block29, block30, block31, block32, block33, block34, block35, block36, block37, block38, block39, block40, block41, block42, block43, block44, block45, block46, block47, block48, block49, block50, bock51, block52, block53, block54, block55;
var polygon_1;
var platform_1, platform_2, platform_3;
var chain_1;
//var score=0;

function setup() {
  createCanvas(1900,1800);

  engine = Engine.create();
  world = engine.world;
  
  platform_1= new Ground(947,265,410,20);
  platform_2= new Ground(1020,850,20500,20);
  platform_3= new Ground(678,565,410,20);
  
  //platform 1
  block1=new Box(795,250,30,30);
  block2=new Box(845,250,30,30);
  block3=new Box(895,250,30,30);
  block4=new Box(945,250,30,30);
  block5=new Box(995,250,30,30);
  block6=new Box(1045,250,30,30);
  block7=new Box(1095,250,30,30);
  block8=new Box(820,240,40,10);
  block9=new Box(870,240,40,10);
  block10=new Box(920,240,40,10);
  block11=new Box(970,240,40,10);
  block12=new Box(1020,240,40,10);
  block13=new Box(1070,240,40,10);
  block14=new Box(845,230,30,30);
  block15=new Box(895,230,30,30);
  block16=new Box(945,230,30,30);
  block17=new Box(995,230,30,30);
  block18=new Box(1045,230,30,30);
  block19=new Box(870,220,40,10);
  block20=new Box(920,220,40,10);
  block21=new Box(970,220,40,10);
  block22=new Box(1020,220,40,10);
  block23=new Box(895,210,30,30);
  block24=new Box(945,210,30,30);
  block25=new Box(995,210,30,30);
  block26=new Box(920,200,40,10);
  block27=new Box(970,200,40,10);

  //platform3
  block29=new Box(525,550,30,30);
  block30=new Box(575,550,30,30);
  block31=new Box(625,550,30,30);
  block32=new Box(675,550,30,30);
  block33=new Box(725,550,30,30);
  block34=new Box(775,550,30,30);
  block35=new Box(825,550,30,30);
  block36=new Box(550,540,40,10);
  block37=new Box(600,540,40,10);
  block38=new Box(650,540,40,10);
  block39=new Box(700,540,40,10);
  block40=new Box(750,540,40,10);
  block41=new Box(800,540,40,10);
  block42=new Box(575,530,30,30);
  block43=new Box(625,530,30,30);
  block44=new Box(675,530,30,30);
  block45=new Box(725,530,30,30);
  block46=new Box(775,530,30,30);
  block47=new Box(600,520,40,10);
  block48=new Box(650,520,40,10);
  block49=new Box(700,520,40,10);
  block50=new Box(750,520,40,10);
  block51=new Box(625,510,30,30);
  block52=new Box(675,510,30,30);
  block53=new Box(725,510,30,30);
  block54=new Box(650,500,40,10);
  block55=new Box(700,500,40,10);



  polygon_1= new Polygon(298,170,20);
  chain_1= new Chain(polygon_1.body, {x:298, y:170});

  

}

function draw() {
  background(255,255,255);
  
  //noStroke();
  //textSize(25)
  //text("Score:  " + score, width-300, 50)
  
  Engine.update(engine);

  platform_1.display();
  platform_2.display();
  platform_3.display()

  //platform 1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
 
 //platform 3
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();
  block47.display();
  block48.display();
  block49.display();
  block50.display();
  block51.display();
  block52.display();
  block53.display();
  block54.display();
  block55.display();



  polygon_1.display();
  chain_1.display();


  drawSprites();
}

  function mouseDragged(){
        Matter.Body.setPosition(polygon_1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain_1.fly();
}

function keyPressed(){

  if (keyCode===71){
    Matter.Body.setPosition(polygon_1.body, {x:298, y:170})
    chain_1.attach(polygon_1.body);
  }
  
  }
  