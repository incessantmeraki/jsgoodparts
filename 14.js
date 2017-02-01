// write factory function that returns two function that implement an up/down counter

function counterf(x) {
  return {
    inc: function () {
      value += 1
      return value
    },
    dec: function () {
      value -= 1
      return value
    }
  }
}
