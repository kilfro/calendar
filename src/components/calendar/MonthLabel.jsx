import React from 'react'
import { connect } from 'react-redux'
import '@style/calendar/monthLabel.less'

const MonthLabel = ({ month }) => {
    return (
        <div className='month-label'>
            {month.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' }).replace(' г.', '')}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        month: state.month
    }
}

export default connect(mapStateToProps)(MonthLabel)