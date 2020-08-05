import React from 'react'
import '@style/tasklist/task.less'

const Task = ({ task }) => {
    const { from, to, color, title, description } = task

    return (
        <div className={`task ${color}`}>
            <h3>{`${from.getTimeString()} - ${to.getTimeString()} ${title}`}</h3>
            <div>{description}</div>
        </div>
    )
}

export default Task