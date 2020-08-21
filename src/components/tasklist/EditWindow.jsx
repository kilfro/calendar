import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from '../Button'
import DateInput from './DateInput'
import ColorSelector from './ColorSelector'
import { editTask } from '../../store/actions'
import '@style/tasklist/edit-window.less'

const EditWindow = ({ show, task, toggleFunction, editTask }) => {
    const [fromDate, setFromDate] = useState(task.from),
        [toDate, setToDate] = useState(task.to),
        [color, setColor] = useState(task.color),
        [title, setTitle] = useState(task.title),
        [description, setDescription] = useState(task.description)

    const saveEditedTask = () => {
        const editedTask = {
            uid: task.uid,
            from: fromDate,
            to: toDate,
            color,
            title,
            description
        }

        editTask(editedTask)
        toggleFunction()
    }

    return (<Modal
        show={show}
        onHide={toggleFunction}
        backdrop="static"
        keyboard={false}
    >
        <Modal.Header closeButton>
            <Modal.Title>Изменить задачу</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <DateInput
                label='Начало'
                value={fromDate.toLocalISOString()}
                changeHandler={event => setFromDate(new Date(event.target.value))}
            />
            <DateInput
                label='Конец'
                value={toDate.toLocalISOString()}
                changeHandler={event => setToDate(new Date(event.target.value))}
            />

            <ColorSelector
                value={color}
                changeHandler={setColor}
            />
            <div className='fields-block'>
                <input
                    placeholder='Заголовок'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <textarea
                    placeholder='Описание'
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                />
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Button clickHandler={toggleFunction}>Отменить</Button>
            <Button filled={true} clickHandler={saveEditedTask}>Сохранить</Button>
        </Modal.Footer>
    </Modal>)
}

EditWindow.propTypes = {
    show: PropTypes.bool.isRequired,
    task: PropTypes.object.isRequired,
    toggleFunction: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    editTask
}

export default connect(null, mapDispatchToProps)(EditWindow)