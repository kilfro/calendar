import React from 'react'
import PropTypes from 'prop-types'
import '@style/tasklist/date-input.less'

const DateInput = ({ label, value, changeHandler }) =>
    <label className='date-input'>
        {label}
        <input
            type='datetime-local'
            value={value}
            onChange={changeHandler}
        />
    </label>

DateInput.propTypes = {
    label: PropTypes.any,
    value: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
}

export default DateInput