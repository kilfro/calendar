import React from 'react'
import Month from './components/Month'
import WeekdayLabel from './components/WeekdayLabel'
import Navigation from './components/Navigation'


const App = () => {

    return (
        <div style={{width: 'fit-content'}}>
            <Navigation />
            <WeekdayLabel />
            <Month />
        </div>
    )
}

export default App