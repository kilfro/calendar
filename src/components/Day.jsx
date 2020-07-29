import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectDate } from '../store/actions'
import '@style/day.less'

const Day = ({ date, now, selected, selectDate }) => {

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
        selected: state.selected
    }
}

const mapDispatchToProps = {
    selectDate
}

export default connect(mapStateToProps, mapDispatchToProps)(Day)
