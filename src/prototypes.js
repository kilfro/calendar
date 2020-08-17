/**
 * Returns the number of the day in the week where Monday is the first
 */
Date.prototype.getWeekDay = function () {
  return this.getDay() > 0 ? this.getDay() - 1 : 6
}

Date.prototype.getTimeString = function () {
  return this.toTimeString().slice(0, 5)
}

Date.prototype.getString = function () {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  return this.toLocaleDateString('ru-RU', options)
}

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
