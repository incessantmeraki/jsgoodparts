//write a function that allows another function to be called only once

function once(func) {
  return function() {
    var f = func
    func = null
    return f.apply(this, arguments)
  }
}
