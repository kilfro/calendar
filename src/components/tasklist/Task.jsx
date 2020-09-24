import '@style/tasklist/task.less'

import { PencilSquare, X } from 'react-bootstrap-icons'
import React, { useState } from 'react'

import EditWindow from './EditWindow'
import { connect } from 'react-redux'
import { deleteTask } from '../../store/actions'

const Task = ({ task, deleteTask }) => {
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
                    <X onClick={(() => deleteTask(task.uid))} />
                </div>
            </div>
            <div>{description}</div>

            <EditWindow show={editWindowIsOpen} task={task} toggleFunction={toggleEditWindow} />
        </div>
    )
}

const mapDispatchToProps = {
    deleteTask
}

export default connect(null, mapDispatchToProps)(Task)