function primitiveCircle (r, segments) {
  r = typeof r !== 'undefined' ? r : 1
  segments = typeof segments !== 'undefined' ? segments : 32

  const positions = []
  const cells = []

  for (let i = 0; i < segments; i++) {
    const x = Math.cos(i / segments * Math.PI * 2)
    const y = Math.sin(i / segments * Math.PI * 2)
    positions.push([r * x, r * y])
    if (i > 0) {
      cells.push([i - 1, i])
    }
  }

  return {
    positions: positions,
    cells: cells,
  }
}
module.exports = primitiveCircle
