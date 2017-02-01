//function composeb that takes two biary functions that retursn functions that calls them both

function composeb(f, g) {
  return function (a, b, c) {
    return g(f(a,b), c)
  }
}
