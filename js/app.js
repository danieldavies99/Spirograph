//pixi config start -----------------------------
let app = new PIXI.Application({
  antialias: true, // default: false
  transparent: false, // default: false
  view: document.getElementById("root"),
  width: WIDTH,
  height: HEIGHT,
});

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.backgroundColor = 0x333333;
//pixi config end   -----------------------------
let pageContainer = new PIXI.Container;

app.stage.addChild(pageContainer);

let background = new PIXI.Graphics;
background.beginFill(BACKGROUNDCOLOR);
background.drawRect(0, 0, WIDTH, HEIGHT);
background.endFill();
pageContainer.addChild(background);

let mouseInputHandler = createMouseInputHandler();
mouseInputHandler.init();

//let cogPathTracker = CreateCogPathTracker();
let brush1 = CreateBrush(0x000c14,2);
brush1.init();
let brush2 = CreateBrush(0xf8002f,2);
brush2.init();
let brush3 = CreateBrush(0x77e03a,2);
brush3.init();

if (SHOWSHAPES) {
  let containerCircle = new PIXI.Graphics;
  containerCircle.beginFill(TEMPLATECOLOR, 0.25);
  containerCircle.drawCircle(WIDTH / 2, HEIGHT / 2, 370);
  containerCircle.beginFill(BACKGROUNDCOLOR);
  containerCircle.drawCircle(WIDTH / 2, HEIGHT / 2, 300);
  containerCircle.endFill();
  pageContainer.addChild(containerCircle);
}


const renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);
const renderTextureSprite = new PIXI.Sprite(renderTexture);

//let FXAAFilter = new PIXI.filters.FXAAFilter();
//FXAAFilter.blendMode = PIXI.BLEND_MODES.NORMAL;

let blurFilter = new PIXI.filters.BlurFilter(0.5, 10, 1);
renderTextureSprite.filters = [ blurFilter];

pageContainer.addChild(renderTextureSprite);

let shapeCollection = CreateShapeCollection();
let shape = CreateShape();
shape.init([0, 0], shapeCollection.circleTwo);
shape.drawShape();

let rotatePoint = shape.points[0];

//let cogPathTracker = CreateCogPathTracker();
//cogPathTracker.logCirclePoints(36, 175.15);

let wHeld = false;
let aHeld = false;
let sHeld = false;
let dHeld = false;

let rotating = true;
let keyDown = function (key) {
  if (key === " ") {
    rotating = rotating === true ? false : true;
  }
  if (key === "=") {
    pageContainer.scale.x += 0.05;
    pageContainer.scale.y += 0.05;
  }
  if (key === "-") {
    pageContainer.scale.x -= 0.05;
    pageContainer.scale.y -= 0.05;
  }

  if (key === "w") {
    wHeld = true;
  }
  if (key === "s") {
    sHeld = true;
  }
  if (key === "a") {
    aHeld = true;
  }
  if (key === "d") {
    dHeld = true;
  }
}

let keyUp = function (key) {
  if (key === "w") {
    wHeld = false;
  }
  if (key === "a") {
    aHeld = false;
  }
  if (key === "s") {
    sHeld = false;
  }
  if (key === "d") {
    dHeld = false;
  }
}

let keyboardInputHandler = CreateKeyboardInputHandler();
keyboardInputHandler.init(keyDown, keyUp);

let speed = 100;

let canvas = document.getElementById("root");
window.setInterval(function () {

  for (let i = 0; i < speed; i++) {
    brush1.setPosition(shape.holes[4]);
    brush2.setPosition(shape.holes[3]);
    brush3.setPosition(shape.holes[0]);

    
    for (let i = 0; i < shape.points.length; i++){
      let distance = shape.getDistanceBetweenTwoPoints(shape.points[i], [WIDTH / 2, HEIGHT / 2]);
      if (distance > 300) {
        let nearestPoint = shape.getNearestPointOnACircle([WIDTH / 2, HEIGHT / 2], 300, shape.points[i]);
        let xTranslation = nearestPoint[0] - shape.points[i][0];
        let yTranslation = nearestPoint[1] - shape.points[i][1];
        shape.translate([xTranslation, yTranslation]);
        rotatePoint = shape.points[i];
      }
    }

    brush1.render();
    brush2.render(); 
    brush3.render();
    if (rotating) shape.rotateShape(-0.001, rotatePoint);

    if (wHeld) pageContainer.position.y += 0.06;
    if (sHeld) pageContainer.position.y -= 0.06;
    if (aHeld) pageContainer.position.x += 0.06;
    if(dHeld) pageContainer.position.x -= 0.06;
  }

  shape.drawShape();
}, 1000 / 60)



