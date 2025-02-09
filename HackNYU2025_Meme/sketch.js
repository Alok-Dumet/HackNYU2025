let gif;
let gifs = [];
let frames = 0;
let clicked = false;
let mySound

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
    mySound = loadSound('Amongus-sfx.mp3');
  
    textAlign(CENTER, CENTER);
    textSize(50);
    frameRate(60);
}

function draw() {
  
   text("Click the screen!", windowWidth / 2, windowHeight / 2);
  text("And turn the sound on!", windowWidth / 2, (windowHeight / 2) - 50 );
  
  for (let i = 0;i < gifs.length; i++) {
    image(gifs[i].gif, gifs[i].x - gifs[i].gif.width /2, gifs[i].y - gifs[i].gif.height/ 2);
  }
  
  frames++;
  if(clicked && (frames % 10) == 0 ){
      addGif()
  }
  
}

function addGif() {
  let newGif = {
    gif: loadImage('among-us-twerk.gif'),
    x: random(0, windowHeight),
    y: random(0, windowWidth)
  };
  if(frames % 5 == 0 && (newGif.x > (windowHeight/2)))
    {
        mySound.play();
    }
  gifs.push(newGif);
}

function mouseClicked()
{
  clicked = true;
}
