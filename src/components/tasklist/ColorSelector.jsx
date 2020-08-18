import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ChevronDown } from 'react-bootstrap-icons'
import OutsideCleckHandler from 'react-outside-click-handler'
import '@style/tasklist/color-selector.less'

const ColorSelector = ({ value, changeHandler }) => {
    const [showOptions, setShowOptions] = useState(false)
    const colors = {
        green: <div className='green' />,
        red: <div className='red' />,
        orange: <div className='orange' />,
        blue: <div className='blue' />,
    }

    const toggleShowOptions = () => {
        setShowOptions(!showOptions)
    }

    return (<label className='color-selector'>
        Цвет
        <span onClick={toggleShowOptions} className='option'>{colors[value]}<ChevronDown /></span>

        {showOptions &&
            <OutsideCleckHandler onOutsideClick={toggleShowOptions}>
                <div className='options' onClick={toggleShowOptions}>
                    {Object.keys(colors).map(key =>
                        <div key={key} className='option' onClick={() => changeHandler(key)}>{colors[key]}</div>
                    )}
                </div>
            </OutsideCleckHandler>
        }
    </label>)
}

ColorSelector.propTypes = {
    value: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
}

export default ColorSelector