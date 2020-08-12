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
