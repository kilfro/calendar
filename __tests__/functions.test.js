import '../src/prototypes'
import { getMonthDays } from '../src/functions'

test("Function 'getMonthDay' has to work correctly", () => {
  const mustBe29 = getMonthDays(1, 2012)

  expect(mustBe29.length).toEqual(29)
  expect(mustBe29[0].getString()).toEqual('2012-2-1')
  expect(mustBe29[mustBe29.length - 1].getString()).toEqual('2012-2-29')
})
