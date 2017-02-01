// demethodize, a function that converts a method into binary function

function demethodize(method) {
  return function(that, y) {
    return method.call(that,y)
  }
}
