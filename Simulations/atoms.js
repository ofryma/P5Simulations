function setup() {
	createCanvas(400, 400);
	// put setup code here
}

class Atom{
  constructor(posx,posy){
    this.posx = posx;
    this.posy = posy;
  }
  get position(){
    return this.Apos()
  }
  Apos(){
    return createVector(this.posx,this.posy);
  }
}

function draw() {
	// put drawing code here
  background(0);
  translate(width/2,height/2);
  let g = createVector(0,9.81);
  let v = createVector()
  let pos = createVector(0,0);

  stroke("white");
  strokeWeight(10);
  point(pos.x,pos.y);
}
