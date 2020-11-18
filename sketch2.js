var helicoptor, helicoptor_img, package, package_img, package_body, box1, box2, box3, box4;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, ground, world;


function preload() {
    helicoptor_img = loadImage("helicopter.png");
    package_img = loadImage("package.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    helicoptor = createSprite(windowWidth / 4, windowHeight / 4);
    helicoptor.addImage(helicoptor_img);
    helicoptor.scale = 0.75;

    package = createSprite(helicoptor.x, helicoptor.y);
    package.addImage(package_img);
    package.scale = 0.25;
    package.depth = helicoptor.depth - 1;

    engine = Engine.create();
    world = engine.world;
    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(windowWidth / 2, windowHeight, windowWidth, 40, options);

    package_body = Bodies.circle(helicoptor.x, helicoptor.y, 5, { restitution: 3 });

    World.add(world, ground);

    box1 = new Box(windowWidth / 2 - 20, windowHeight - 70, 20, 100);
    box2 = new Box(windowWidth / 2 + 100, windowHeight - 70, 20, 100);
    box3 = new Box(windowWidth / 2 + 40, windowHeight - 30, 100, 20);
    // box4 = new Box(windowWidth / 2, windowHeight - 140, 100, 20);
}

function draw() {
    background(0);

    rectMode(CENTER);
    fill("green");
    rect(ground.position.x, ground.position.y, windowWidth, 40);

    if (keyDown("down")) {
        package_move();
        package.velocityY = 4;
        if (package.y + 10 <= ground.position.y - 300) {
            // package.x = windowWidth / 2 + 40;
            package.velocityY = 4;
        } else {
            package.velocityY = 0;
        }
    }

    if (package.y + 10 >= ground.position.y - 50) {
        package.velocityY = 0;
    }

    if (keyDown("space")) {
        helicoptor.velocityX = 2;
        package.velocityX = 2;
    }

    // box4.x = box4.x + 2;

    drawSprites();
    box1.display();
    box2.display();
    box3.display();
    // box4.display();
}

function package_move() {
    package.velocityX = 0;
    package.velocityY = 4;

    // package.x = package_body.position.x;
    // package.y = package_body.position.y;
    // package.collide(ground);
}