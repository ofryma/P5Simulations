let t = 0;
let wave = [];
let h = 500;
let w = 700;

let slider;
function setup() {
  createCanvas(w, h);
  slider = createSlider(1,100);
}

function draw() {
  let n = 1;
  let xc = w/3;
  let yc = h/2;
  let num = slider.value();

  background(20);
  noFill();
  stroke("white");
  strokeWeight(2);

  for(let i=0;i<num;i++){
    n=i*2+1;
    r=4/(n*PI);
    r*=75;
    ellipse(xc,yc,r*2);
    let x = r*cos(n*t);
    let y = r*sin(n*t);


    line(xc,yc,x+xc,y+yc);

    xc+=x;
    yc+=y;

  }

  wave.unshift(yc);
  for(let j=0;j<wave.length;j++){
    point((2/3)*w+j,wave[j]);
  }

  if(wave.length > 250){
    wave.pop();
  }


  t+=0.02;
}
