import React from 'react'
import Day from './components/Day'

const App = () => {
    return (
        <>
            <Day date={new Date(2020, 6, 29, 12)} />
            <Day date={new Date(2020, 6, 30, 12)} />
            <Day date={new Date(2020, 6, 31, 12)} />
            <Day date={new Date(2020, 7, 1, 12)} />
            <Day date={new Date(2020, 7, 2, 12)} />
        </>
    )
}

export default App