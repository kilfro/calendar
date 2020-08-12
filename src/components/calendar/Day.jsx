import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectDate } from '@store/actions'
import '@style/calendar/day.less'

const Day = ({ date, now, selected, tasksMap, selectDate }) => {

    const isToday = date.toDateString() === now.toDateString()
    const isSelected = date.toDateString() === selected.toDateString()

    const dayStyle = () => {
        let classes = ['day']

        if (isSelected) {
            classes.push('selected')
        }

        if (isToday) {
            classes.push('today')
        }

        if ([5, 6].includes(date.getWeekDay())) {
            classes.push('weekend')
        }

        if (Object.keys(tasksMap).includes(date.getString())) {
            classes.push('has-task')
        }

        return classes.join(' ')
    }

    return (
        <div className={dayStyle()} onClick={() => selectDate(date)}>
            {date.getDate()}
        </div>
    )
}

Day.propTypes = {
    date: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        now: state.now,
        selected: state.selected,
        tasksMap: state.tasksMap
    }
}

const mapDispatchToProps = {
    selectDate
}

export default connect(mapStateToProps, mapDispatchToProps)(Day)
