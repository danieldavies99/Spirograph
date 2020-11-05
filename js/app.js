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
let brush1 = CreateBrush(0x5E0B15, 2);
brush1.init();
let brush2 = CreateBrush(0x90323D, 2);
brush2.init();
let brush3 = CreateBrush(0x8C7A6B, 2);
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
app.stage.addChild(renderTextureSprite);

let shape = CreateShape();
shape.init([ (WIDTH / 2) - 300, HEIGHT/2 ]);
shape.drawShape();

let rotatePointX = shape.points[0][0];
let rotatePointY = shape.points[0][1];

let cogPathTracker = CreateCogPathTracker();
cogPathTracker.logCirclePoints(36, 175.15);

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

let speed = 100;

window.setInterval(function () {

  for (let i = 0; i < speed; i++) {
    brush1.setPosition(shape.holes[0]);
    brush2.setPosition(shape.holes[1]);
    brush3.setPosition(shape.holes[2]);

    
    for (let i = 0; i < shape.points.length; i++){
      let distance = shape.getDistanceBetweenTwoPoints(shape.points[i][0], shape.points[i][1], WIDTH / 2, HEIGHT / 2);
      if (distance > 300) {
        let nearestPoint = shape.getNearestPointOnACircle(WIDTH / 2, HEIGHT / 2, 300, shape.points[i][0], shape.points[i][1]);
        let xTranslation = nearestPoint[0] - shape.points[i][0];
        let yTranslation = nearestPoint[1] - shape.points[i][1];
        shape.translate([xTranslation, yTranslation]);
        rotatePointX = shape.points[i][0];
        rotatePointY = shape.points[i][1];
      }
    }

    brush1.render();
    brush2.render();
    brush3.render();
    if(rotating) shape.rotateShape(-0.001, rotatePointX, rotatePointY);
  }
 
  //console.log(shape.points[0][0]);
  shape.drawShape();
}, 1000 / 60)



