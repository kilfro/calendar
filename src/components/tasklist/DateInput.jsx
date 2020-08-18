import React from 'react'
import PropTypes from 'prop-types'

const DateInput = ({ label, value, changeHandler }) =>
    <label>
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