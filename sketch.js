var part;
var cake1, cake2, cake3;
var creem1, creem2, creem4, creem5, creem6;
var red1, red2;


function setup() 
{
  createCanvas(800, 400);

  cake1=createSprite(400,300,450,150); 
	cake1.shapeColor = "darkred"
  cake2=createSprite(400,350,450,20); 
  cake2.shapeColor = "brown"
  cake3=createSprite(400,300,450,20); 
  cake3.shapeColor = "brown"
  
  creem1=createSprite(195,245,40,40); 
	creem1.shapeColor = "white"
  creem2=createSprite(298,245,40,40); 
	creem2.shapeColor = "white"
  creem4=createSprite(403,245,40,40); 
	creem4.shapeColor = "white"
  creem5=createSprite(505,245,40,40); 
	creem5.shapeColor = "white"
  creem6=createSprite(605,245,40,40); 
  creem6.shapeColor = "white"
  
  red2=createSprite(403,175,5,50); 
  red2.shapeColor = "brown"
  red1=createSprite(403,205,40,40); 
  red1.shapeColor = "red"


}


function draw() 
{
  background(0);
  
	

 createSprite();
 drawSprites();
}



