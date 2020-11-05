let CreateBrush = function (color, size) { 
  return {
    color: color,
    size: size,
    brush: new PIXI.Graphics(),
    init: function () {
      this.brush.beginFill(this.color);
      this.brush.drawCircle(0, 0, this.size);
      this.brush.endFill();
    },
    setPosition: function (positions) {
      this.brush.position.set(positions[0], positions[1]);
    },
    render: function () {
      app.renderer.render(this.brush, renderTexture, false, null, false);
    }
  }
}