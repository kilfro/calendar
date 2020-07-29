/**
 * Return array of days for selected month
 * @param {*} month number from 1 (January) to 12 (December)
 * @param {*} year  number
 */
export const getMonthDays = (month, year) => {
  const days = []
  const quantity = new Date(year, month, 0).getDate()

  for (let day = 1; day <= quantity; day++) {
    days.push(new Date(year, month - 1, day))
  }

  return days
}
