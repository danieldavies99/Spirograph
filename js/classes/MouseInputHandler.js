let createMouseInputHandler = function () {
  return {
    init: function () {
      let canvas = document.getElementById("root");

      console.log('initialising mouse input');
      var canvasPosition = {
          x: canvas.offsetLeft,
          y: canvas.offsetTop
      };

      let mouseMarker = new PIXI.Graphics;
      mouseMarker.beginFill(0x000000, 0.5);
      mouseMarker.drawCircle(0, 0 , 10);
      mouseMarker.endFill();
      app.stage.addChild(mouseMarker);
      
      canvas.addEventListener('click', function(e) {
        e.preventDefault();
        // use pageX and pageY to get the mouse position
        // relative to the browser window

        var mouse = {
            x: e.pageX - canvasPosition.x,
            y: e.pageY - canvasPosition.y
        }
        // now you have local coordinates,
        // which consider a (0,0) origin at the
        // top-left of canvas element
        let xScale = WIDTH / canvas.clientWidth;
        let yScale = HEIGHT / canvas.clientHeight;
        let x = mouse.x * xScale;
        let y = mouse.y * yScale;
        mouseMarker.position.set(mouse.x, mouse.y);
      });

      canvas.addEventListener('mousemove', function(e) {
        var mouse = {
            x: e.pageX - canvasPosition.x,
            y: e.pageY - canvasPosition.y
        }
        // now you have local coordinates,
        // which consider a (0,0) origin at the
        // top-left of canvas element
        let xScale = WIDTH / canvas.clientWidth;
        let yScale = HEIGHT / canvas.clientHeight;
        let x = mouse.x * xScale;
        let y = mouse.y * yScale;
        //mouseMarker.position.set(x, y);
        mouseX = x;
        mouseY = y;
      }, false);
    }
  }
}
