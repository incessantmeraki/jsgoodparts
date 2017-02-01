//function that adds from two invocations

var addf = function (x) {
  return function (y) {
    return x+y
  }
}

console.log(addf(3) (4))
