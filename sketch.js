let state = 1;

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
    }
    if (state == 3) {
        
    }
}

function mouseClicked() {
    if (state == 1) {
        if (mouseX > 150 && mouseX < 350 && mouseY > 200 && mouseY < 300) {
            state = 2;
        }
    }
}
