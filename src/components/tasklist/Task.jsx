import React from 'react'
import { connect } from 'react-redux'
import { X } from 'react-bootstrap-icons'
import { removeTask } from '../../store/actions'
import '@style/tasklist/task.less'

const Task = ({ task, removeTask }) => {
    const { from, to, color, title, description } = task

    return (
        <div className={`task ${color}`}>
            <div className='top-row'>
                <div className='time'>{from.getTimeString()} - {to.getTimeString()}</div>
                <div className='title'>{title}</div>
                <div className='buttons'>
                    <X onClick={(() => removeTask(task.uid))} />
                </div>
            </div>
            <div>{description}</div>
        </div>
    )
}

const mapDispatchToProps = {
    removeTask
}

export default connect(null, mapDispatchToProps)(Task)