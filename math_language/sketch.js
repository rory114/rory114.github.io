function setup() {
  createCanvas(windowWidth, windowHeight);
  let input_box = createInput('');
  input_box.input(executeOnInput);
  input_box.position(30,60);

}
/*
function draw() {

  background(100);
  let input_paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"

  for( let i = 0; i < input_paragraph.length; i++ ) {
    let color_value = constrain( input_paragraph[i].charCodeAt(0), 0, 255 );
    let column_width = windowWidth / input_paragraph.length;
    noStroke();
    if( mouseIsPressed ) {
      fill(0, 0, color_value)
    } else {
      fill(0,color_value,0);
    }
    rect( (i-1) * column_width + column_width, 0, column_width, windowHeight);
  }
}
*/
function executeOnInput() {

  background(100);
  let input_paragraph = this.value();

  for( let i = 0; i < input_paragraph.length; i++ ) {
    let color_value = constrain( input_paragraph[i].charCodeAt(0), 0, 255 );
    let column_width = windowWidth / input_paragraph.length;
    noStroke();
    if( mouseIsPressed ) {
      fill(0, 0, color_value)
    } else {
      fill(0,color_value,0);
    }
    rect( (i-1) * column_width + column_width, 0, column_width, windowHeight);
  }
}
