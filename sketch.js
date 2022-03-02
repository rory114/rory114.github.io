let x1, y1;
let x2, y2;
let x3, y3;
let x4, y4;
let xt = 0;

function setup() {
  createCanvas(700, 700);
  new1 =loadImage('O1.png');
  new2 = loadImage('O2.png');
  old1 = loadImage('../old/old.jpg');
  old2 = loadImage('old2.jpg');
  old3 = loadImage('old3.jpg');

}

function years(xt){
  fill(0);
  textSize(20);
  text('1963\t\t\t\t\t\t1965\t\t\t\t\t\t1970\t\t\t\t\t\t1973\t\t\t\t\t\t1982\t\t\t\t\t\t2006\t\t\t\t\t2019', 0, 350);
  if (frameCount == 700){
    frameCount = 0;
  }
  text('UIC BRUTALISM   UIC BRUTALISM   UIC BRUTALISM', xt, 370);

  stroke(220);
  fill(220);
  rect(0, 333, mouseX, 20);
}

function draw() {
  background(220);
  
  stroke(0);
  line(0, 700, 700, mouseY);

  new1.resize(200, 200);
  new2.resize(200, 200);
  old1.resize(200, 200);
  old2.resize(150, 150);
  old3.resize(150, 150);


  xt = frameCount;
  years(xt);

  

  image(new1, 10, 10);

  if(mouseY >= 700){
    x1 = 490;
    y1 = 490;
  }
  else{
    x1 = 1000;
    y1 = 1000;
  }

  if(mouseY >= 400){
    x2 = 1000;
    y2 = 1000;
  }
  else{
    x2 = 490;
    y2 = 490;
  }

  if(mouseY >= 50){
    x3 = 1000;
    y3 = 1000;
  }
  else{
    x3 = 540;
    y3 = 175;
  }

  if(mouseY >= 50){
    x4 = 1300;
    y4 = 1300;
  }
  else{
    x4 = 175;
    y4 = 540;
  }

  // text(mouseX, 0, 650);
  // text(mouseY, 50, 650);

  
  image(old1, x2, y2);
  image(new2, x1, y1);
  image(old2, x3, y3);
  image(old3, x4, y4);


  // fill(220);
  // rect(0, 333, mouseX, 20);
  

}