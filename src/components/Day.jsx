import React from 'react'
import PropTypes from 'prop-types'
import '@style/day.less'

const Day = ({ date, isToday, isSelected }) => {
    const dayStyle = () => {
        let classes = ['day']

        if (isSelected) {
            classes.push('selected')
        }

        if (isToday) {
            classes.push('today')
        }

        return classes.join(' ')
    }

    return (
        <div className={dayStyle()}>
            {date.getDate()}
        </div>
    )
}

Day.propTypes = {
    date: PropTypes.object.isRequired,
    isToday: PropTypes.bool,
    isSelected: PropTypes.bool
}

export default Day
