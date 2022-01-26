// We made an interesting choice of switching the friend with enemy
// our group was discussing how often friends and enemies can be often be a lot closer related than we think. People can often jump between the two groups
//
// We also chose to switch the last word at the end to life because an enemy can have very large impact on your life
//


let source_text = `
A friend is someone
You turn to.
A friend is someone
You confide in.
A friend is someone
Who stands by you.
A friend is someone
Who lifts your spirits.
A friend is someone
who encourages you.
A friend is someone
You treasure always.
A friend is someone
Who makes you smile.
A friend is someone
Who brightens your day.`;
let search_word = `friend`;
let replace_word = `enemy`;
let search_word_2 = `A`;
let replace_word_2 = `An`;
let search_word_3 = `day`;
let replace_word_3 =`life`;
let altered_text;

function setup() {
  createCanvas(400, 400);
  altered_text = source_text.replaceAll(search_word, replace_word);
  altered_text = altered_text.replaceAll(search_word_2, replace_word_2);
  altered_text = altered_text.replaceAll(search_word_3, replace_word_3);
}

function draw() {
  background(220);
  textFont('Baskerville');
  textSize(15);
  let show_text;
  if(mouseIsPressed){
    fill("red");
    show_text = altered_text;
  } else {
    fill("black");
    show_text = source_text;
  }
  text(show_text, 10, 10, width*0.9);
  
}