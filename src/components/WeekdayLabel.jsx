import React from 'react'
import '@style/day.less'
import '@style/week.less'

const WeekdayLabel = () => {
    const labels = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
    return (
        <div className='week label'>
            {labels.map(lab =>
                <div className='day label' key={lab}>{lab}</div>
            )}
        </div>
    )
}

export default WeekdayLabel