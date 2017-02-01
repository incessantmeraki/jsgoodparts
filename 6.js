//function that takes a function and and argument,and returns a function that can supply a second argument

var curry = function (func, x) {
  return function (y) {
    return func(x,y)
  }
}

function add (x, y) { 
  return x + y 
}

var add3 = curry(add,3)
console.log(add3(4))
