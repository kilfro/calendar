import React from 'react'
import { connect } from 'react-redux'
import Calendar from './components/calendar/Calendar'
import Tasklist from './components/tasklist/Tasklist'
import '@style/app.less'
import TaskCreator from './components/tasklist/TaskCreator'

const App = ({ selected, tasksMap }) => {
    return (
        <div className='app-container'>
            <div>
                <Calendar />
                <TaskCreator />
            </div>
            <Tasklist tasks={tasksMap[selected.getString()]} />
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