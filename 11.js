// function composeu that takes two unary funcvtions and return a unary function that calls them both

var composeu = function (un1, un2) {
  return function (x) {
    return un2(un1(x))
  }
}

