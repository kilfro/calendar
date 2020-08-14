import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import Input from 'react-bootstrap/InputGroup'
import '@style/tasklist/taskcreator.less'
import Button from '../Button'

const TaskCreator = ({ selected }) => {
    const formRef = useRef()

    const [fromDate, setFromDate] = useState(selected)
    const [toDate, setToDate] = useState(selected)
    const [color, setColor] = useState('green')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <form className='create-from' ref={formRef}>
            <h3>Новая задача</h3>
            <label>
                Начало
            <input type='datetime-local' value={fromDate.toISOString().slice(0, 16)} onChange={event => setFromDate(new Date(event.target.value))} id='from' />
            </label>
            <label>
                Конец
            <input type='datetime-local' value={toDate.toISOString().slice(0, 16)} onChange={event => setToDate(new Date(event.target.value))} />
            </label>
            <label>
                Цвет
                <select value={color} onChange={event => setColor(event.target.value)}>
                    <option value='green'>Зеленый</option>
                    <option value='red'>Красный</option>
                    <option value='yellow'>Желтый</option>
                    <option value='blue'>Синий</option>
                </select>
            </label>
            <input placeholder='Заголовок' value={title} onChange={event => setTitle(event.target.value)} />
            <textarea placeholder='Описание' value={description} onChange={event => setDescription(event.target.value)} />

            <Button clickHandler={() => formRef.current.reset()}>Очистить</Button>
            <Button clickHandler={() => formRef.current.submit()} filled={true} >Сохранить</Button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        selected: state.selected
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreator)