let state = 1;
let yPos = 225;
let birdX = 200;
let birdY = 200;

function setup() {
    createCanvas(500, 500);
    background(0);
}

function draw() {
    if (state == 1) {
        rect(150, 200, 200, 100);
        textSize(25);
        text("Start Game", 190, 260);
    }
    if (state == 2) {
        clear();
        background(0, 0, 100, 100);
        state = 3;
        fill(255, 255, 0);
        ellipse(birdX, birdY, 50, 50);
        triangle(birdX - 25, birdY, birdX, birdY - 25, birdX, birdY + 25);
        arc(birdX + 25, birdY, 25, 0, 50, 50);
  }
    }
    if (state == 3) {
        background(0, 0, 100, 100);
        square(10, yPos, 50);
        if (keyIsDown(UP_ARROW)) {
            yPos -= 3;
        }
        if (keyIsDown(DOWN_ARROW)) {
            yPos += 3;
        }
    }
}

function mouseClicked() {
    if (state == 1) {
        if (mouseX > 150 && mouseX < 350 && mouseY > 200 && mouseY < 300) {
            state = 2;
        }
    }
}
