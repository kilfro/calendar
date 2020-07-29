import React from 'react'
import PropTypes from 'prop-types'
import { getMonthDays } from '../functions'
import '@style/month.less'
import Week from './Week'
import WeekdayLabel from './WeekdayLabel'

const Month = ({ month, year }) => {
    const days = getMonthDays(month, year)
    const weeks = []
    let weekArray = []

    days.forEach((day, index, array) => {
        weekArray.push(day)
        if (day.getWeekDay() === 6 || index === array.length - 1) {
            weeks.push(weekArray)
            weekArray = []
        }
    })

    return (
        <div className='month'>
            <WeekdayLabel />
            {weeks.map(week => <Week days={week} key={week[0].getTime()} />)}
        </div>
    )
}

Month.propTypes = {
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
}

export default Month