let CreateCogPathTracker = function () {
  return {
    circle: function (centerX, centerY, radius, angle) {
      /*
      x = cx + r * cos(a)
      y = cy + r * sin(a)
      */
      let result = [];
      result[0] = centerX + (radius * Math.cos(angle));
      result[1] = centerY + (radius * Math.sin(angle));  
      return result;
    },
    elipse: function (centerX, centerY, radiusX, radiusY, towardsX, towardsY, angle) {
      let rotateAngle = Math.atan((towardsY - centerY) / (towardsX - centerX));;
      if (centerX < towardsX) {
        angle -= Math.PI;
      }
      let result = [];
      result[0] = centerX + (radiusX * Math.cos(angle) * Math.cos(rotateAngle)) - (radiusY * Math.sin(angle) * Math.sin(rotateAngle));
      result[1] = centerY + (radiusY * Math.sin(angle) * Math.cos(rotateAngle)) + (radiusX * Math.cos(angle) * Math.sin(rotateAngle));
      return result;
    },
    logCirclePoints: function (noPoints, radius) {
      let circleString = "";
        for (let i = 0; i < noPoints; i++) {
          circleString += "[" + cogPathTracker.circle(0, radius, radius, ((2 * Math.PI) / noPoints)*i)[0] + ", " + cogPathTracker.circle(0, radius, radius, ((2 * Math.PI) / noPoints)*i)[1] + "], " ;
        }
      console.log(circleString);
    }
    
  };
};
