var b1, wall1, b2, wall2, b3, wall3, b4, b4;
var speed, weight;
var l1,l2,l3,l4,l5;
var thickness;

function setup() {

  createCanvas(1550,800);

  thickness=random(28,36);

  b1=createSprite(100, 100, 60, 40);
  b1.shapeColor="brown";
  b2=createSprite(100, 300, 60, 40);
  b2.shapeColor="brown";
  b3=createSprite(100, 500, 60, 40);
  b3.shapeColor="brown";
  b4=createSprite(100, 700, 60, 40);
  b4.shapeColor="brown";

  wall1=createSprite(1445, 100, thickness, 70);
  wall1.shapeColor="grey";
  wall2=createSprite(1445, 300, thickness, 70);
  wall2.shapeColor="gray";
  wall3=createSprite(1445, 500, thickness, 70);
  wall3.shapeColor="grey";
  wall4=createSprite(1445, 700, thickness, 70);
  wall4.shapeColor="grey";

  l1=createSprite(775,200,1550,5);
  l1.shapeColor="white";
  l2=createSprite(775,400,1550,5);
  l2.shapeColor="white";
  l3=createSprite(775,600,1550,5);
  l3.shapeColor="white";
  l4=createSprite(775,5,1550,5);
  l4.shapeColor="white";
  l5=createSprite(775,795,1550,5);
  l5.shapeColor="white";

  speed = random(130,188);
  weight = random(30,52);
  
  b1.velocityX=speed;
  b2.velocityX=speed;
  b3.velocityX=speed;
  b4.velocityX=speed;
   
}

function draw() {
  
  background(0,0,0);  
  
  if(wall1.x - b1.x < (b1.width + wall1.width)/2) {
    b1.velocityX= 0;
    
    var deformation= 2.5* weight *speed* speed/22509; 
    
    if(deformation> 180){
      wall1.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100) {
      wall1.shapeColor=color(230,230,0);
    }
    if(deformation<100 && deformation>30){
    wall1.shapeColor=color(0,255,0);
    }
  }

  if(wall2.x - b2.x < (b2.width + wall2.width)/2) {
    b2.velocityX= 0;
    var deformation=1.3* weight *speed* speed/22509; 
    
    if(deformation> 180){
      wall2.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100) {
      wall2.shapeColor=color(230,230,0);
    }
    if(deformation<100){
    wall2.shapeColor=color(0,255,0);
    }
  }

  if(wall3.x - b3.x < (b3.width + wall3.width)/2) {
    b3.velocityX= 0;
    var deformation=2* weight *speed* speed/22509; 
    
    if(deformation> 180){
      wall3.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100) {
      wall3.shapeColor=color(230,230,0);
    }
    if(deformation<100){
    wall3.shapeColor=color(0,255,0);
    }
  }

  if(wall4.x - b4.x < (b4.width + wall4.width)/2) {
    b4.velocityX= 0;
    var deformation=3* weight *speed* speed/22509; 
    
    if(deformation> 180){
      wall4.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100) {
      wall4.shapeColor=color(230,230,0);
    }
    if(deformation<100){
    wall4.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}
