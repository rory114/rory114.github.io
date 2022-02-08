function setup() {
  createCanvas(800, 400);
  background(255);
}

function draw() {
  strokeWeight(20);
  rect(10,10,150)
  rect(160,10,150);
  rect(10,160, 150);
  rect(160,160,150);

  for( var i = 0; i < 3; i++ ) {
    line( 40 + 40*i, 10, 40 + 40*i, 160)
    line( 160, 40 + 40*i, 310, 40+40*i);
  }

  line(0, 240, 80, 310);
  line(0, 190, 140, 310);
  line(20, 160, 155, 270);
  line(80, 160, 155, 220);

  line(250, 310, 310, 250);
  line(200, 310, 310, 200);
  line(155, 310, 310, 155 );
  line( 155, 260, 260, 160 );


  // second set
  let offset = 290;
  stroke("red");
  line(10+offset, 250, 80+offset, 310);
  line(10+offset, 200, 140+offset, 310);
  line(20+offset, 160, 155+offset, 270);
  line(80+offset, 160, 155+offset, 220);

  stroke("blue");
  line(250+offset, 310, 310+offset, 250);
  line(200+offset, 310, 310+offset, 200);
  line(160+offset, 310, 310+offset, 155 );
  line(160+offset, 260, 260+offset, 160 );
  stroke("black");

  for( var i = 0; i < 3; i++ ) {
    line( 40 + 40*i+offset, 10, 40 + 40*i+offset, 160)
    stroke("yellow");
    line( 160+offset, 40 + 40*i, 310+offset, 40+40*i);
    stroke("black");
  }
  noFill();
  rect(10+offset,10,150)
  rect(160+offset,10,150);
  rect(10+offset,160, 150);
  rect(160+offset,160,150);

  
}
