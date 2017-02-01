//write methodize, function that converts binary function into method

Number.prototype.add = methodize(add)
(3).add(4)

function methodize (bin) {
  return function (y) {
    return bin(this, y)
  }
}
