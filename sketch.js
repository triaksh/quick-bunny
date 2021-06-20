var backgroundImg;
var player;
var carrot;
var score=0;
var won=0;
var snakeGroup;
var background;
var playerImg;
var carrotImg;
var snakeImg;

function preload(){
  backgroundImg=loadImage("images/background.png")
  playerImg=loadImage("images/bunnyImg.png")
  carrotImg=loadImage("images/carrot.png")
  snakeImg=loadImage("images/snake.png")
}

function setup() {
createCanvas(600,600);
bg = createSprite(300,300);
bg.scale=4.5 
bg.addImage(backgroundImg);
player = createSprite(40,550);
player.scale=0.35;
player.addImage(playerImg);
carrot = createSprite(550,40);
carrot.scale=0.15;
carrot.addImage(carrotImg);
snakeGroup= new Group();


}

function draw() {
  background("black");  
  stroke("red")
  noFill();
  ellipse(100,350,40,30);
  
  if(player.x<30 && player.x>50 && player.y<20 && player.y>40 ){
    text("why and how",200,200);
    player.x=40;
    player.y=550;
  }
  generatesnakes();
  
  for(var i = 0 ; i< (snakeGroup).length ;i++){
    var temp = (snakeGroup).get(i) ;
    if (player.isTouching(temp)) {
      score++;
      temp.destroy();
      temp=null;
      player.x = 40;
      player.y = 550;
      }   
    if(player.isTouching(carrot)){
      player.x = 40;
      player.y = 550;
      won++;
    }
  }

  if(keyDown("up")){
    player.y = player.y - 5
  }
  if(keyDown("down")){
    player.y = player.y + 5
  }
  if(keyDown("left")){
    player.x = player.x - 5
  }
  if(keyDown("right")){
    player.x = player.x + 5
  }
  
    drawSprites();
    textSize(20);
    text("lost: "+score,350,50);
    text("won: "+won,350,70)
  }

function generatesnakes(){
if(frameCount % 10===0){
  console.log(frameCount);
  var snake = createSprite(40,30);
  snake.addImage(snakeImg)
  snake.scale=0.2;
  snake.shapeColor="green"
  snake.velocityX=random(0,4.5);
  snake.velocityY=random(0,4.5);
  snakeGroup.add(snake);
  }
}
