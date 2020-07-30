import React from 'react'
import Month from './components/Month'
import WeekdayLabel from './components/WeekdayLabel'
import Navigation from './components/Navigation'
import MonthLabel from './components/MonthLabel'

const App = () => {

    return (
        <div style={{ width: 'fit-content' }}>
            <Navigation />
            <MonthLabel />
            <WeekdayLabel />
            <Month />
        </div>
    )
}

export default App