function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("purple")
  fill("cyan")
  for( var i = 0; i < 10; i++ ) {
    ellipse( mouseX, mouseY, (100)-10*i );
  }
  var x = 0;
  var border_size = 20;
  fill("navy");
  while( x < windowWidth ) {
    rect(x, 0, border_size, border_size)
    x += border_size;
  }
  x = 0;
  while( x < windowWidth ) {
    rect(x,windowHeight-border_size, border_size, border_size);
    x += border_size
  }
  fill(100, 149, 237)
  var y = 0;
  while( y < windowHeight ) {
    rect(0, y, border_size, border_size);
    y += border_size;
  }
  y = 0;
  while( y < windowHeight ) {
    rect(windowWidth-border_size, y, border_size, border_size);
    y += border_size;
  }
}
