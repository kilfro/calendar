import React from 'react'
import PropTypes from 'prop-types'
import '@style/button.less'

const Button = ({ clickHandler, children, filled }) => {

    const getButtonClass = () => {
        const classes = ['button']

        if (filled) {
            classes.push('filled')
        }

        return classes.join(' ')
    }

    return (
        <div onClick={clickHandler} className={getButtonClass()}>
            {children}
        </div>
    )
}

Button.propTypes = {
    clickHandler: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    filled: PropTypes.bool
}

Button.defaultProps = {
    filled: false
}

export default Button