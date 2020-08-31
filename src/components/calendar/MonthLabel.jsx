import React from 'react'
import { connect } from 'react-redux'
import '../../prototypes'
import '@style/calendar/monthLabel.less'

export const MonthLabel = ({ month }) => {
    return (
        <div className='month-label'>
            {month.toMonthYearString('ru-RU', { month: 'long', year: 'numeric' }).replace(' г.', '')}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        month: state.month
    }
}

export default connect(mapStateToProps)(MonthLabel)