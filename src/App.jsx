import React from 'react'
import { connect } from 'react-redux'
import Calendar from './components/calendar/Calendar'
import Tasklist from './components/tasklist/Tasklist'
import '@style/app.less'

const App = ({ selected, tasksMap }) => {
    return (
        <div className='app-container'>
            <Calendar />
            <Tasklist tasks={tasksMap.get(selected.toString())} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selected: state.selected,
        tasksMap: state.tasksMap
    }
}

export default connect(mapStateToProps)(App)