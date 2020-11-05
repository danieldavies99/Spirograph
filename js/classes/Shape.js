let CreateShape = function() {
  return {
    //points: [[150, 150], [147.7211629518312, 176.04722665003956], [140.95389311788625, 201.3030214988503], [129.9038105676658, 225], [114.9066664678467, 246.41814145298088], [96.4181414529809, 264.9066664678467], [75.00000000000001, 279.9038105676658], [51.30302149885032, 290.95389311788625], [26.047226650039562, 297.72116295183116], [9.184850993605149e-15, 300], [-26.047226650039544, 297.72116295183116], [-51.303021498850306, 290.95389311788625], [-74.99999999999997, 279.9038105676658], [-96.4181414529809, 264.9066664678467], [-114.90666646784669, 246.41814145298093], [-129.9038105676658, 225], [-140.95389311788625, 201.30302149885034], [-147.7211629518312, 176.04722665003962]  ],
    //holes: [[125, 175], [100, 175], [74, 175]],
    points: [[175.15, 175.15], [172.48907794008824, 205.56447831836286], [164.58716253065185, 235.05482810349088], [151.68434947284445, 262.725], [134.172684212289, 287.73424983659737], [112.58424983659738, 309.322684212289], [87.57500000000002, 326.83434947284445], [59.9048281034909, 339.73716253065186], [30.414478318362864, 347.6390779400882], [1.0724844343532946e-14, 350.3], [-30.414478318362843, 347.6390779400882], [-59.90482810349088, 339.73716253065186], [-87.57499999999996, 326.83434947284445], [-112.58424983659738, 309.322684212289], [-134.17268421228897, 287.7342498365974], [-151.68434947284445, 262.725], [-164.58716253065185, 235.0548281034909], [-172.48907794008824, 205.56447831836292], [-175.15, 175.15000000000003], [-172.48907794008826, 144.7355216816372], [-164.58716253065185, 115.24517189650913], [-151.68434947284447, 87.57500000000005], [-134.17268421228903, 62.565750163402654], [-112.5842498365974, 40.977315787711035], [-87.57500000000007, 23.46565052715559], [-59.90482810349099, 10.562837469348182], [-30.41447831836285, 2.660922059911769], [-3.2174533030598837e-14, 0], [30.414478318362786, 2.6609220599117407], [59.90482810349078, 10.562837469348125], [87.57500000000002, 23.46565052715559], [112.58424983659735, 40.97731578771098], [134.17268421228897, 62.5657501634026], [151.6843494728444, 87.57499999999993], [164.5871625306518, 115.24517189650899], [172.48907794008824, 144.73552168163715],],
    holes: [[150, 175], [125, 175], [100, 175], [75, 175], [50, 175], [25, 175], [0, 175]],
    shape: new PIXI.Graphics,
    init: function (initialPos) {
      this.scaleShape(0.50015);
      for (let i = 0; i < this.points.length; i++){
        this.points[i][0] += initialPos[0];
        this.points[i][1] += initialPos[1];
      }
       for (let i = 0; i < this.holes.length; i++){
        this.holes[i][0] += initialPos[0];
        this.holes[i][1] += initialPos[1];
      }
      app.stage.addChild(this.shape);
    },
    drawShape: function () {
      this.shape.clear();
      this.shape.beginFill(0x5E0B15);
      this.shape.drawCircle(this.holes[0][0], this.holes[0][1], 5);
      this.shape.beginFill(0x90323D);
      this.shape.drawCircle(this.holes[1][0], this.holes[1][1], 5);
      this.shape.beginFill(0x8C7A6B);
      this.shape.drawCircle(this.holes[2][0], this.holes[2][1], 5);
      
      this.shape.beginFill(TEMPLATECOLOR,0.3);
      this.shape.moveTo(this.points[0][0], this.points[0][1]);

      for (let i = 1; i < this.points.length; i++) {
        this.shape.lineTo(this.points[i][0], this.points[i][1]);
        if (i === this.points.length - 1) {
          this.shape.lineTo(this.points[0][0], this.points[0][1]);
        }
      }
    
      this.shape.beginFill(BACKGROUNDCOLOR);
      for (let i = 3; i < this.holes.length; i++) {
        this.shape.drawCircle( this.holes[i][0], this.holes[i][1], 5);
      }


    }, 
    rotatePoint: function (point, originX, originY, amount) { 
      let result = [];
      result.push( originX + (point[0] - originX) * Math.cos(amount) - (point[1] - originY) * Math.sin(amount) );
      result.push( originY + (point[0] - originX) * Math.sin(amount) + (point[1] - originY) * Math.cos(amount) );
      return result;
    },
    rotateShape: function (amount, originX, originY) {
      for (let i = 0; i < this.points.length; i++) { 
        this.points[i] = this.rotatePoint(this.points[i], originX, originY, amount);
      }
      for (let i = 0; i < this.holes.length; i++) { 
        this.holes[i] = this.rotatePoint(this.holes[i], originX, originY, amount);
      }
    },
    translate(translation) {
      for (let i = 0; i < this.points.length; i++) {
        this.points[i][0] += translation[0];
        this.points[i][1] += translation[1];
      }
      for (let i = 0; i < this.holes.length; i++) {
        this.holes[i][0] += translation[0];
        this.holes[i][1] += translation[1];
      }
    },
    getDistanceBetweenTwoPoints(p1x, p1y, p2x, p2y) {
      //D2 = X2 + Y2
      let X = p1x - p2x;
      let Y = p1y - p2y;
      X = Math.abs(X);
      Y = Math.abs(Y);
      return Math.sqrt((X*X)+(Y*Y));
    },
    getNearestPointOnACircle(circleCenterX, circleCenterY, circleRadius, pointX, pointY) {
      let result = [];
      let d = this.getDistanceBetweenTwoPoints(circleCenterX, circleCenterY, pointX, pointY);
      let t = circleRadius / d;
      
      let resX = (((1 - t) * circleCenterX) + t * pointX);
      let resY = (((1 - t) * circleCenterY) + t * pointY);

      result.push(resX);
      result.push(resY);

      return result;
    },
    scaleShape(scaleFactor) {
      for (let i = 0; i < this.points.length; i++) {
        this.points[i][0] *= scaleFactor;
        this.points[i][1] *= scaleFactor;
      }
      for (let i = 0; i < this.holes.length; i++) {
        this.holes[i][0] *= scaleFactor;
        this.holes[i][1] *= scaleFactor;
      }
    }
  }
}