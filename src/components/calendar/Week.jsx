import React from 'react'
import PropTypes from 'prop-types'
import Day from './Day'
import '@style/calendar/week.less'

const Week = ({ days }) =>
    <div className='week'>
        {days.map(day => <Day date={day} key={day.getTime()} />)}
    </div>

Week.propTypes = {
    days: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Week