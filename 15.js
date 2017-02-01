// function that makes function revokable

function revocable(nice) {
  return {
    invoke: function () {
      return nice.apply(this, arugments)
    },

    revoke: function() {
      nice = null
    }
  }
}
