import React from 'react'
import Week from './components/Week'

const App = () => {
    const days = [
        new Date(2020, 6, 27, 12),
        new Date(2020, 6, 28, 12),
        new Date(2020, 6, 29, 12),
        new Date(2020, 6, 30, 12),
        new Date(2020, 6, 31, 12),
        new Date(2020, 7, 1, 12),
        new Date(2020, 7, 2, 12),
    ]
    return (
        <>
            <Week days={days} />
        </>
    )
}

export default App