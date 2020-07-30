import React from 'react'
import { connect } from 'react-redux'
import { getMonthDays } from '../functions'
import '@style/month.less'
import Week from './Week'

const Month = ({ date }) => {
    const days = getMonthDays(date.getMonth(), date.getFullYear())
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
            {weeks.map(week => <Week days={week} key={week[0].getTime()} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        date: state.month
    }
}

export default connect(mapStateToProps)(Month)