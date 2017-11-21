var createCircle = require('./index.js')
var plask = require('plask')

plask.simpleWindow({
  settings: {
    type: '2d',
    width: 1024,
    height: 1024
  },
  init: function () {
    var circle = createCircle(this.width / 4, 16)
    var canvas = this.canvas
    var paint = this.paint

    paint.setAntiAlias(true)
    paint.setFill()
    paint.setColor(255, 255, 255, 255)
    canvas.drawRect(paint, 0, 0, this.width, this.height)

    var w = this.width
    var h = this.height

    var prevX
    var prevY
    var half = circle.positions.length / 2
    circle.positions.forEach((p, i) => {
      paint.setColor(0, 0, 0, 255)
      var x = w / 2 + p[0]
      var y = h / 2 + p[1]
      var nx = w / 2 + circle.positions[(i + 1) % circle.positions.length][0]
      var ny = h / 2 + circle.positions[(i + 1) % circle.positions.length][1]
      canvas.drawRect(paint, x - 5, y - 5, x + 5, y + 5)
      canvas.drawLine(paint, x, y, nx, ny)
      var tx = (i < half / 2 || i > circle.positions.length - half / 2) ? x + 10 : x - 20
      var ty = (i < half) ? y + 20 : y - 10

      paint.setTextSize(20)
      canvas.drawText(paint, '' + i, tx, ty)
    })
  }
})
