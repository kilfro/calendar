import React from 'react'
import { render } from 'react-dom'
import Day from './components/Day'
import '@style/index.less'

const App = () => (
  <div>
    <Day date={new Date()} isToday={true} isSelected={true} />
    <Day date={new Date()} isToday={true} isSelected={false} />
    <Day date={new Date()} isToday={false} isSelected={true} />
    <Day date={new Date()} isToday={false} isSelected={false} />
  </div>
)

render(<App />, document.getElementById('root'))
