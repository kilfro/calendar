/**
 * Returns the number of the day in the week where Monday is the first
 */
Date.prototype.getWeekDay = function () {
  return this.getDay() > 0 ? this.getDay() - 1 : 6
}

/**
 *  Returns time string in format HH:mm
 */
Date.prototype.getTimeString = function () {
  return this.toTimeString().slice(0, 5)
}

/**
 *  Returns date-time string in format yyyy-MM-dd
 */
Date.prototype.getString = function () {
  return this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate()
}

/**
 *  Returns date-time string in format yyyy-MM-ddTHH:mm for dateTime input
 */
Date.prototype.toLocalISOString = function () {
  var pad = function (num) {
    var norm = Math.floor(Math.abs(num))
    return (norm < 10 ? '0' : '') + norm
  }

  return (
    this.getFullYear() +
    '-' +
    pad(this.getMonth() + 1) +
    '-' +
    pad(this.getDate()) +
    'T' +
    pad(this.getHours()) +
    ':' +
    pad(this.getMinutes())
  )
}
