import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './store/reducer'
import { actionTypes } from './store/constants'
import '@style/index.less'
import './prototypes'
import App from './App'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.setInterval(() => {
  store.dispatch({ type: actionTypes.UPDATE_NOW })
}, 60000)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
