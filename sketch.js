let state = 1;
let yPos = 225;
let xEnemy = 400;
let yEnemy = 250;
let bird;
let enemy;
let enemySpeed = 5;

function preload() {
    bird = loadImage("Sprites/697x634.png");
    enemy = loadImage("Sprites/bullet.png");
}

function setup() {
    createCanvas(500, 500);
    background(0);
    imageMode(CORNER);
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
        background(0, 0, 100, 100);
        image(bird, 10, yPos, 50, 50);
        if (keyIsDown(UP_ARROW)) {
            yPos -= 3;
        }
        if (keyIsDown(DOWN_ARROW)) {
            yPos += 3;
        }
        image(enemy, xEnemy, yEnemy, 100, 100);
        xEnemy -= enemySpeed;
        let top = yPos;
        let bottom = yPos + 50;
        let left = 6;
        let right = 10;
        let enemyTop = yEnemy;
        let enemyBottom = yEnemy + 100;
        let enemyLeft = xEnemy;
        let enemyRight = xEnemy + 100;
        if(xEnemy < -100) {
            xEnemy = 500;
            yEnemy = random(0, 400);
            enemySpeed = random(5, 10);
        }
        if(left > enemyRight || right < enemyLeft || top > enemyBottom || bottom < enemyTop) {

        }
        else {
            state = 4;
        }
        if (state == 4) {
            rect(150, 200, 200, 100);
            textSize(25);
            text("Game Over", 190, 260);


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
