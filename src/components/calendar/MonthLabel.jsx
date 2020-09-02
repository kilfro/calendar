import React from 'react'
import { connect } from 'react-redux'
import '../../prototypes'
import '@style/calendar/monthLabel.less'

export const MonthLabel = ({ month }) => {
    return (
        <div className='month-label'>
<<<<<<< HEAD
            {month.toMonthYearString('ru-RU', { month: 'long', year: 'numeric' }).replace(' г.', '')}
=======
            {month.toMonthYearString()}
>>>>>>> 0db6c544274a79f31327e45c545155621041b7fc
        </div>
    )
}

const mapStateToProps = state => {
    return {
        month: state.month
    }
}

export default connect(mapStateToProps)(MonthLabel)