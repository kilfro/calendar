import '@style/tasklist/taskcreator.less'

import React, { useState } from 'react'

import Button from '../Button'
import ColorSelector from './ColorSelector'
import DateInput from './DateInput'
import { connect } from 'react-redux'
import { createTask } from '../../store/actions'

export const TaskCreator = ({ selected, createTask }) => {
    const [fromDate, setFromDate] = useState(selected)
    const [toDate, setToDate] = useState(selected)
    const [color, setColor] = useState('green')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = () => {
        const task = {
            from: fromDate,
            to: toDate,
            color,
            title,
            description
        }

        createTask(task)
        clearHandler()
    }

    const clearHandler = () => {
        setFromDate(selected)
        setToDate(selected)
        setColor('green')
        setTitle('')
        setDescription('')
    }

    return (
        <div className='create-from'>
            <h3>Новая задача</h3>
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

            <input placeholder='Заголовок' value={title} onChange={event => setTitle(event.target.value)} />
            <textarea placeholder='Описание' value={description} onChange={event => setDescription(event.target.value)} />

            <div className='buttons'>
                <Button clickHandler={clearHandler}>Очистить</Button>
                <Button clickHandler={submitHandler} filled={true} >Сохранить</Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selected: state.selected
    }
}

const mapDispatchToProps = {
    createTask
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator)