//function twice that takes binary function and returns unary function that
//passes its argument to the binary function twice

var twice = function (binary) {
  return function (x) {
    return binary(x, x)
  }
}

