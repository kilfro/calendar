import React from 'react'
import { connect } from 'react-redux'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import Button from '../Button'
import { prevMonth, nextMonth, goToToday } from '@store/actions'
import '@style/calendar/navigation.less'

export const Navigation = ({ month, prevMonth, nextMonth, goToToday }) => {
    return (
        <div className='navigation'>
            <Button clickHandler={() => prevMonth(month)}><ChevronLeft /></Button>
            <Button clickHandler={() => goToToday()} filled={true}>Сегодня</Button>
            <Button clickHandler={() => nextMonth(month)}><ChevronRight /></Button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        month: state.month
    }
}

const mapDispatchToProps = {
    prevMonth,
    nextMonth,
    goToToday
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
