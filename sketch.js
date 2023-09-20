var myParagraph;
let img;
let slider;

function setup() {
// text stuff
   myParagraph = createP("html");
  myParagraph.position(0, 0);
  myParagraph.mouseClicked(makeRed);
//button
  button = createButton('la la la');
  button.position(20, 20);
  button.mousePressed(changeTextColor);
//image:
   // img = loadImage()
 //slider:
   slider = createSlider(0, 255, 100);
   slider.style('width','80px')
   slider.position(200,299)

 
}
// failed attempt to load image from url
// function preload( {
//    img = (https://i.pinimg.com/736x/67/1e/4d/671e4dc74c5ca0c17c2c0072b41cc4f2.jpg);
// }
// changes text to red:
function changeTextColor() {
   myParagraph.style("color", "red");
}
// draws text + controls its position
function draw() {
  //myParagraph.position(frameCount % 200, 0);
  myParagraph.position(mouseX, mouseY);
//slider:
   let val = slider.value();
   background(val);
}


/*

Some Questions:
0. What is this percent sign all about? (hint: it's "modulus")
   //gives remainder of division
   // translates frame count to a slower-growing number

1. Where, in the p5 reference, do we find all this DOM stuff?
   //after the environment, shape, color, structure, and constants sections

2. Why is the text so large when it's just a "paragraph"
   // in the style file, the font size is set to xxl.

3. "color" and "red"? Where did those come from and where 
   could you find more style attributes that could be
   changed?

Some Things to Try:
0. Make the text follow the mouse pointer
1. Make a button
2. Make the button affect the style or position of some text
3. Make a picture that shows up on the page. Does it have to
   be created in p5 or can you just place it in the HTML?
   What's the difference?
   // got lost on this section. was able to make an image show
   // in html, but not in p5.

4. Can you make the position of the image change when the
   button is pressed?
5. Make a slider and have it change the text size
6. Add some CSS in style.css to make the slider huge and
   rotated 30 degrees
6. "hide" the text when the image is double-clicked
   
*/