import React from 'react'
import Calendar from './components/calendar/Calendar'
import Tasklist from './components/tasklist/Tasklist'
import '@style/app.less'

const App = () => {

    return (
        <div className='app-container'>
            <Calendar />
            <Tasklist />
        </div>
    )
}

export default App