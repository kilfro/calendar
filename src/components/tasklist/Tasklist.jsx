import React from 'react'
import '@style/tasklist/tasklist.less'
import Task from './Task'

const Tasklist = ({ tasks = [] }) =>
    <div className='task-list'>
        {tasks.length !== 0
            ? tasks.map(task =>
                <Task key={task.from.getTime()} task={task} />
            )
            : <h2>Нет задач</h2>
        }
    </div>

export default Tasklist