var Score;
var Level;
var j;
var u;
var l;
var r;
function preload(){
  BGimage=loadImage("images/Space.jpg");
  IMimage=loadImage("images/iron.png");
  Dimage=loadImage("images/diamond.png");
  OBimage=loadImage("images/spikes.png");
  SVimage=loadAnimation("images/Kingpin.png","images/Kingpin2.png");
  VEimage=loadAnimation("images/DOOM1.png","images/DOOM2.png");
  Simage=loadImage("images/stone.png");
  THimage=loadImage("images/Thanos.png");
} 
function setup() {
  createCanvas(1500,700);
  OB=new Group();
  DG=new Group();
  ST=new Group();
  BG=createSprite(0,0);
  BG.scale=3.4;
  BG.addImage(BGimage);
  BG.velocityY=-3;
  IM=createSprite(50,200,90,90);
  IM.scale=0.13;
  IM.addImage(IMimage);
  Score=0;
  Level=1;
  j=0;
  u=0;
  l=0;
  r=0;
}
function draw() {
  if(BG.y<1){
    BG.y=BG.height/4;
  }
  if(keyDown("space")){
    IM.velocityY=-5;
  }
  if(keyDown("right")){
    IM.x=IM.x+5;
  }
  if(keyDown("left")){
    IM.x=IM.x-5;
  }
  if(!keyDown("space")){
    if(IM.y<670){
      IM.velocityY=5;
    }
  }
  GenStones();
  for(var f=0;f<(ST).length;f++){
    temp=ST.get(f);
    if(IM.isTouching(temp)){
      IM.collide(temp);
    }
  }
  GD();
  for(var e=0;e<(DG).length;e++){
    tin=DG.get(e);
    if(IM.isTouching(tin)){
      Score++;
      tin.destroy();
      tin=null;
    }
  }
  GS();
  if(IM.y>680){
    IM.scale=0;
    Score="You Lose!";
  }
  if(IM.y<20){
    IM.scale=0;
    Score="You Lose!";
  }
  if(IM.x>1450){
    IM.scale=0;
    Score="You Lose!";
  }
  if(IM.x<10){
    IM.scale=0;
    Score="You Lose!";
  }
  if(IM.isTouching(OB)){
    IM.scale=0;
    Score="You Lose!";
  }
  if(Score>1){
    Level=2;
    if(j==0){
      GenObstacle();
      j++;
    }
  }
  if(Score>2){
    Level=3;
    if(l==0){
      GenObstacle();
      l++;
    }
  }
  if(Score>3){
    Level=4;
    if(u==0){
      GenObstacle();
      u++;
    }
  }
  if(Score>4){
    Level=5;
    if(r==0){
      GenObstacle();
      r++;
    }
  }
  if(Score>5){
    Level="YOU WIN!";
  }
  drawSprites();
  stroke("red");
  textSize(20);
  text("Your Score:"+Score,1200,100);
  text("Your Level:"+Level,1200,170);
}
function GS(){
  if(frameCount%50==0){
    SP=createSprite(0,0,55,55);
    SP.x=Math.round(random(120,1400));
    SP.scale=0.7;
    SP.addImage(OBimage);
    SP.velocityY=5;
    SP.lifetime=1000;
    OB.add(SP);
  }
}
function VE(){
  VM=createSprite(random(100,1400),random(50,650),80,80);
  VM.addImage(VEimage);
  VM.scale=0.04;
  OB.add(VM);
}
function KP(){
  SV=createSprite(random(100,1400),random(50,650),80,80);
  SV.addImage(SVimage);
  SV.scale=0.17;
  OB.add(SV);
}
function GH(){
  TH=createSprite(random(100,1400),random(50,650),80,80);
  TH.addImage(THimage);
  TH.scale=0.3;
  OB.add(TH);
}
function GenObstacle(){
  obstacle=createSprite(random(100,1400),random(50,650),80,80);
  obstacle.scale=4;
  var rand=Math.round(random(1,2));
  switch(rand){
    case 1:
      obstacle.addAnimation("running",SVimage);
      OB.add(obstacle);
      break;
    case 2:
      obstacle.addAnimation("running",VEimage);
      OB.add(obstacle);
      break;
    /*case 3:
      obstacle.addAnimation(THimage);
      OB.add(obstacle);
      break;
    case 4:
      obstacle.addAnimation(THimage);
      OB.add(obstacle);
      break;*/
    default:
      break;
  }
}
function GD(){
  if(frameCount%70==0){
    D=createSprite(0,0,55,55);
    D.x=Math.round(random(120,1400));
    D.scale=0.2;
    D.addImage(Dimage);
    D.velocityY=5;
    D.lifetime=1000;
    DG.add(D);
  }
}
function GenStones(){
  if(frameCount%90==0){
    Stone=createSprite(0,0,55,55);
    Stone.x=Math.round(random(120,1400));
    Stone.scale=0.3;
    Stone.addImage(Simage);
    Stone.velocityY=5;
    Stone.lifetime=1000;
    ST.add(Stone);
  }
}