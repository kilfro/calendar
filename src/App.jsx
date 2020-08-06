import React from 'react'
import { connect } from 'react-redux'
import Calendar from './components/calendar/Calendar'
import Tasklist from './components/tasklist/Tasklist'
import '@style/app.less'

const App = ({ selected }) => {

    const tasks = new Map()
    tasks.set(new Date().toString(), [
        {
            from: new Date(2020, 7, 6, 15, 0),
            to: new Date(2020, 7, 6, 16, 0),
            color: 'green',
            title: 'Заголовок задачи'
        },
        {
            from: new Date(2020, 7, 6, 16, 0),
            to: new Date(2020, 7, 6, 18, 0),
            color: 'blue',
            title: 'Вторая задача'
        }
    ])
    tasks.set(new Date(2020, 7, 1).toString(), [
        {
            from: new Date(2020, 7, 1, 15, 0),
            to: new Date(2020, 7, 1, 16, 0),
            color: 'red',
            title: 'Заголовок задачи'
        }
    ])

    return (
        <div className='app-container'>
            <Calendar />
            <Tasklist tasks={tasks.get(selected.toString())} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selected: state.selected
    }
}

export default connect(mapStateToProps)(App)