import '@style/calendar/calendar.less'

import React, { useEffect } from 'react'

import Month from './Month'
import MonthLabel from './MonthLabel'
import Navigation from './Navigation'
import WeekdayLabel from './WeekdayLabel'
import { connect } from 'react-redux'
import { goToToday } from '../../store/actions'

export const Calendar = ({ goToToday }) => {
    useEffect(() => { goToToday() }, [])

    return (
        <div className='calendar'>
            <Navigation />
            <MonthLabel />
            <WeekdayLabel />
            <Month />
        </div>
    )
}

const mapDispatchToProps = {
    goToToday
}

export default connect(null, mapDispatchToProps)(Calendar)