import React, { useState } from 'react'
import { connect } from 'react-redux'
import '@style/tasklist/taskcreator.less'
import Button from '../Button'
import { addTask } from '../../store/actions'

const TaskCreator = ({ selected, addTask }) => {
    const [fromDate, setFromDate] = useState(selected)
    const [toDate, setToDate] = useState(selected)
    const [color, setColor] = useState('green')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (event) => {
        const task = {
            from: fromDate,
            to: toDate,
            color,
            title,
            description
        }

        addTask(task)
        clearHandler()
    }

    const clearHandler = () => {
        setFromDate(selected)
        setToDate(selected)
        setColor('green')
        setTitle('')
        setDescription('')
    }

    console.log(fromDate.toISOString())

    return (
        <div className='create-from'>
            <h3>Новая задача</h3>
            <label>
                Начало
            <input type='datetime-local' value={fromDate.toLocalISOString()} onChange={event => setFromDate(new Date(event.target.value))} id='from' />
            </label>
            <label>
                Конец
            <input type='datetime-local' value={toDate.toLocalISOString()} onChange={event => setToDate(new Date(event.target.value))} />
            </label>
            <label>
                Цвет
                <select value={color} onChange={event => setColor(event.target.value)}>
                    <option value='green'>Зеленый</option>
                    <option value='red'>Красный</option>
                    <option value='orange'>Желтый</option>
                    <option value='blue'>Синий</option>
                </select>
            </label>
            <input placeholder='Заголовок' value={title} onChange={event => setTitle(event.target.value)} />
            <textarea placeholder='Описание' value={description} onChange={event => setDescription(event.target.value)} />

            <Button clickHandler={clearHandler}>Очистить</Button>
            <Button clickHandler={submitHandler} filled={true} >Сохранить</Button>
            {/* <Button clickHandler={() => formRef.current.submit()} filled={true} >Сохранить</Button> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selected: state.selected
    }
}

const mapDispatchToProps = {
    addTask
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator)