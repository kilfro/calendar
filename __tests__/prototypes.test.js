import '../src/prototypes'

describe('Date prototype function', () => {
  test("'getWeekDay' has to return correct day index", () => {
    const monday = new Date(2020, 7, 24)

    expect(monday.getWeekDay()).toEqual(0)
  })

  test("'getTimeString' has to return short time string", () => {
    const time = new Date(2020, 2, 1, 12, 34)

    expect(time.getTimeString()).toEqual('12:34')
  })

  test("'getString' has to return date string", () => {
    const date = new Date(2020, 4, 22)

    expect(date.getString()).toEqual('2020-5-22')
  })

  test("'toLocalISOString' has to return correct string", () => {
    const date = new Date(2020, 4, 22, 12, 34)

    expect(date.toLocalISOString()).toEqual('2020-05-22T12:34')
  })
})
