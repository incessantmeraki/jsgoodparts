// function that takes an argument and returns a function that returns the argument

var identity = function (x) {
  return function () {
    return x
  }
}

id = identity(3)
console.log(id())

