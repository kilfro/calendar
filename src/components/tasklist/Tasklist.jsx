import '@style/tasklist/tasklist.less'

import React from 'react'
import Task from './Task'

const Tasklist = ({ tasks = [] }) =>
    <div className='task-list'>
        {tasks.length !== 0
            ? tasks.sort((one, two) => one.from.getTime() - two.from.getTime())
                .map(task =>
                    <Task key={task.uid} task={task} />
                )
            : <h2>Нет задач</h2>
        }
    </div>

export default Tasklist