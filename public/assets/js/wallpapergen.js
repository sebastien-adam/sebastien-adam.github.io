// Zbdm
// Natural flow 

//noprotect
let grid = [];
let nlin, ncol;
let xori, yori;
let t, iter;
let itermax;

let huebase = 0;
let density = 0;
let step = 0;
let sw = 0;
let angleIdx = 0;
let variation = 0;
let isBW = false;

// interface
let colorRadio;
let generateBtn;

let generate = false;

let hue, sat, bri, alpha;

function setup() {
	createCanvas(windowWidth, windowHeight)
	
	stroke(255,255,255);
	// slider = createSlider(0, 255);
	// slider.position(10, 40);
	// slider.size(80);
	// colorRadio = createRadio();
	// colorRadio.position(10,10);
	// colorRadio.size(260);
	// colorRadio.style('color', 'white');
	// colorRadio.option(true, 'B&W');
  	// colorRadio.option(false, 'Color');
	// colorRadio.selected('B&W');

	// generateBtn = createButton('Generate'); 
	// generateBtn.position(10, 200);
	
	huebase = floor(getR(0, 360 - 60));
	density = floor(getR(2000, 12000));
	step = getR(4, 30);
	sw = getR(0.1, 0.3);
	angleIdx = floor(getR(0, 99));
	variation = getR(1, 100);
	isBW = getR(0, 1) < 0.3 ? true : false;
	itermax = width;
	t = 0;
	iter = 0;
	colorMode(HSB, 360, 100, 100, 1);
	background(0)

	itermax /= step;
	nlin = height / step;
	ncol = width / step;
	itermax = constrain(itermax, 350, width);

	generateGrid();
	
}

function draw() {
		if (iter < itermax) {
			xori = constrain(randomGaussian(width / 2, width / 4), step * 4, width - step * 4);
			yori = randomGaussian(height / 2, height / 8);
			for (let i = 0; i < density; i++) {
				xori = constrain(xori, step, width - (step));
				yori = constrain(yori, 0, height);
				strokeWeight(getR(0.1, sw));
	
				let iangle = grid[floor(yori / step)][floor(xori / step)];
				let xstep = step * cos(iangle);
				let ystep = step * sin(iangle);
				let xoffset = xstep * map(noise(t), 0, 1, -0.5, 0.5);
				let yoffset = ystep * map(noise(t + 50), 0, 1, -0.5, 0.5)
	
				if (isBW) {  // Black & white
					if (iter % 10 == 0) {
						sat = 0;
						bri = 0;
						alpha = getR(0.01, 0.6);
					}
					else if (iter % 15 === 0) {
						sat= 100;
						bri = 5;
					}
					else {
						sat = 0;
						let disMid = dist(width / 2, height / 2, xori + step, yori + step)
						bri = map(disMid, 0, height / 2 + getR(0, 150), 80, 1);
						alpha = map(iter, 0, itermax, 0.5, 0.05)
					}
				}
	
				else {  // Color
					hue = huebase;
					alpha = getR(0.05, map(iter, 0, itermax, 0.2, 0.9))
					
					if (iter % 10 == 0) { // add white & gray touch
						sat = getR(0, 50);
						bri = getRList([80, getR(0, 80)]);
					}
					else if (iter % 15 === 0) {
						sat= 100;
						bri = 5;
					}
					else {
						sat = getR(20, 100);
						bri = getR(30, 80);
					}
				}
				stroke(hue, sat, bri, alpha);
	
				line(xori, yori, xori + xstep, yori + ystep);
				xori += xoffset;
				yori += yoffset;
				if (xori > width - 2 * step || xori < step) { break; }
				if (yori > height || yori < 0) { break; }
				t += 0.1;
			}
			iter++;
		}
		else {
			noLoop();
		}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function getR(min, max) {
	min = isNaN(min) ? 0 : min;
	return Math.random() * (max - min) + min;
}

function getRList(randList) {
	return randList[Math.floor(Math.random() * randList.length)];
}

function mouseReleased() {
	noLoop();
}

function generateGrid(){
	for (let y = 0; y < nlin; y++) {
		grid[y] = [];
		for (let x = 0; x < ncol; x++) {
			let anglePattern = [((y * x) / ((x - y) + map(variation, 1, 100, 0.01, 36))) * PI, (((x % floor(getR(1, 36))) - y) / ((1 + 1 * -5) / 2)) * PI,
			(x / nlin * (ncol - y + map(variation, 1, 100, 0, height))) * PI, ((x / (nlin + map(variation, 1, 100, 0, height / 4))) * (ncol - nlin + y)) * PI,
			(y / nlin * tan((nlin) ** -sin(x) - variation)) * PI, ((x) ** cos(sin(ncol / (tan(y) + 1 * variation))) * cos(y)) * PI,
			(x / sin(nlin * ncol + variation)) * PI,
			(x / cos(nlin * ncol + variation / 100) + 0.001) * PI, (sin(x) / (tan(nlin + ncol + variation) + 0.001)) * PI, (sin(x) + tan(y * variation)) * PI,
			(tan(x * variation / 100) + tan(y)) * PI, (tan(x) / (tan(y) + variation / 10)) * PI, (cos(x + y * variation / 10)) * PI, (cos(x * (y + variation))) * HALF_PI,
			(tan(x * (y + 0.02)) * tan(x / (y + 0.01 * variation))) * TWO_PI, (x * (sqrt(y) + variation)) * HALF_PI]
			let angle = anglePattern[angleIdx % anglePattern.length];
			grid[y][x] = angle;
		}
	}
}
