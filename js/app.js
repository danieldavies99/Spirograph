//pixi config start -----------------------------
let app = new PIXI.Application({
  antialias: true, // default: false
  transparent: false, // default: false
  view: document.getElementById("root"),
  width: WIDTH,
  height: HEIGHT,
});
app.renderer.backgroundColor = BACKGROUNDCOLOR;
//pixi config end   -----------------------------

//let cogPathTracker = CreateCogPathTracker();
let brush1 = CreateBrush(0x21295C,2);
brush1.init();
let brush2 = CreateBrush(0x1B3B6F,2);
brush2.init();
let brush3 = CreateBrush(0xFF1B1C,2);
brush3.init();

let containerCircle = new PIXI.Graphics;
containerCircle.beginFill(TEMPLATECOLOR, 0.25);
containerCircle.drawCircle(WIDTH / 2, HEIGHT / 2, 370);
containerCircle.beginFill(BACKGROUNDCOLOR);
containerCircle.drawCircle(WIDTH / 2, HEIGHT / 2, 300);
containerCircle.endFill();
app.stage.addChild(containerCircle);

const renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);
const renderTextureSprite = new PIXI.Sprite(renderTexture);

let FXAAFilter = new PIXI.filters.FXAAFilter();
FXAAFilter.blendMode = PIXI.BLEND_MODES.NORMAL;

let blurFilter = new PIXI.filters.BlurFilter(0.7, 10, 1);
renderTextureSprite.filters = [ blurFilter];

app.stage.addChild(renderTextureSprite);

let shapeCollection = CreateShapeCollection();
let shape = CreateShape();
shape.init([0, 0], shapeCollection.circleTwo);
shape.drawShape();

let rotatePoint = shape.points[0];

//let cogPathTracker = CreateCogPathTracker();
//cogPathTracker.logCirclePoints(36, 175.15);

let rotating = true;
let keyDown = function (key) {
  if (key === " ") {
    rotating = rotating === true ? false : true;
 }
}

let keyUp = function (key) {

}

let inputHandler = CreateInputHandler();
inputHandler.init(keyDown, keyUp);

let speed = 50;

window.setInterval(function () {

  for (let i = 0; i < speed; i++) {
    brush1.setPosition(shape.holes[6]);
    brush2.setPosition(shape.holes[4]);
    //brush3.setPosition(shape.holes[1]);

    
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
    if(rotating) shape.rotateShape(-0.001, rotatePoint);
  }

  shape.drawShape();
}, 1000 / 60)



