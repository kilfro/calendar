import React from 'react'
import Navigation from './Navigation'
import MonthLabel from './MonthLabel'
import WeekdayLabel from './WeekdayLabel'
import Month from './Month'
import '@style/calendar/calendar.less'

const Calendar = () => {
    return (
        <div className='calendar'>
            <Navigation />
            <MonthLabel />
            <WeekdayLabel />
            <Month />
        </div>
    )
}

export default Calendar