import React from 'react'
import Day from './Day'
import '@style/week.less'

const Week = ({ days }) =>
    <div className='week'>
        {days.map(day => <Day date={day} key={day.getTime()} />)}
    </div>

export default Week