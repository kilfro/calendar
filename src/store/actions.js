import { actionTypes } from './constants'

export const selectDate = (date) => {
  return {
    type: actionTypes.SELECT_DATE,
    date,
  }
}
