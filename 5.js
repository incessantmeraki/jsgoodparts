//function that takes a binary function and makes it callable with two invocations

var applyf = function (bin) {
  return function (x)  {
    return function (y) {
      return  bin(x,y)
    }
  }
}

function add(x,y) {
  return x + y
}

addf = applyf(add)
console.log(addf(3) (4))
