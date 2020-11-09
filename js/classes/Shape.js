let CreateShape = function() {
  return {
    points: [],
    holes: [],
    shape: new PIXI.Graphics,
    init: function (initialPos, shapeCoords) {
      this.points = shapeCoords.points;
      this.holes = shapeCoords.holes;

      //this.scaleShape(2.00964 );
      let translation = [ initialPos[0] - this.points[0][0], initialPos[1] - this.points[0][1] ]; 
      this.translate(translation);
      this.logPoints();
      pageContainer.addChild(this.shape);
    },
    drawShape: function () {
      if (!SHOWSHAPES) {
        return false;
      }
      this.shape.clear();
      this.shape.beginFill(TEMPLATECOLOR,0.3);
      this.shape.moveTo(this.points[0][0], this.points[0][1]);

      for (let i = 1; i < this.points.length; i++) {
        this.shape.lineTo(this.points[i][0], this.points[i][1]);
        if (i === this.points.length - 1) {
          this.shape.lineTo(this.points[0][0], this.points[0][1]);
        }
      }
    
      this.shape.beginFill(BACKGROUNDCOLOR);
      for (let i = 0; i < this.holes.length; i++) {
        this.shape.drawCircle( this.holes[i][0], this.holes[i][1], 5);
      }
      return true;
    }, 
    rotatePoint: function (point, origin, amount) { 
      let result = [];
      result.push( origin[0] + (point[0] - origin[0]) * Math.cos(amount) - (point[1] - origin[1]) * Math.sin(amount) );
      result.push( origin[1] + (point[0] - origin[0]) * Math.sin(amount) + (point[1] - origin[1]) * Math.cos(amount) );
      return result;
    },
    rotateShape: function (amount, origin) {
      for (let i = 0; i < this.points.length; i++) { 
        this.points[i] = this.rotatePoint(this.points[i], origin, amount);
      }
      for (let i = 0; i < this.holes.length; i++) { 
        this.holes[i] = this.rotatePoint(this.holes[i], origin, amount);
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
    getDistanceBetweenTwoPoints(p1, p2) {
      //D2 = X2 + Y2
      let X = p1[0] - p2[0];
      let Y = p1[1] - p2[1];
      X = Math.abs(X);
      Y = Math.abs(Y);
      return Math.sqrt((X*X)+(Y*Y));
    },
    getNearestPointOnACircle(circleCenter, circleRadius, point) {
      let result = [];
      let d = this.getDistanceBetweenTwoPoints( circleCenter, point);
      let t = circleRadius / d;
      
      let resX = (((1 - t) * circleCenter[0]) + t * point[0]);
      let resY = (((1 - t) * circleCenter[1]) + t * point[1]);

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
    },
    logPoints() {
      let points = "points: [";
      for (let i = 0; i < this.points.length; i++) {
        points += "[" + this.points[i][0] + "," + this.points[i][1] + "],"
      }
      points += "],";
      console.log(points);
      let holes = "holes: [";
      for (let i = 0; i < this.holes.length; i++) {
        holes += "[" + this.holes[i][0] + "," + this.holes[i][1] + "],"
      }
      holes += "],";
      console.log(holes);
    }
  }
}