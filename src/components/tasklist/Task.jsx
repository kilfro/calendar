import React, { useState } from 'react'
import { connect } from 'react-redux'
import { X, PencilSquare } from 'react-bootstrap-icons'
import { removeTask } from '../../store/actions'
import '@style/tasklist/task.less'
import EditWindow from './EditWindow'

const Task = ({ task, removeTask }) => {
    const { from, to, color, title, description } = task
    const [editWindowIsOpen, setEditWindowIsOpen] = useState(false)

    const toggleEditWindow = () => setEditWindowIsOpen(!editWindowIsOpen)

    return (
        <div className={`task ${color}`}>
            <div className='top-row'>
                <div className='time'>{from.getTimeString()} - {to.getTimeString()}</div>
                <div className='title'>{title}</div>
                <div className='buttons'>
                    <PencilSquare onClick={toggleEditWindow} />
                    <X onClick={(() => removeTask(task.uid))} />
                </div>
            </div>
            <div>{description}</div>

            <EditWindow show={editWindowIsOpen} task={task} toggleFunction={toggleEditWindow} />
        </div>
    )
}

const mapDispatchToProps = {
    removeTask
}

export default connect(null, mapDispatchToProps)(Task)