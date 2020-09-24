import '@style/index.less'
import './prototypes'

import { applyMiddleware, createStore } from 'redux'

import App from './App'
import { Provider } from 'react-redux'
import React from 'react'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { reducer } from './store/reducer'
import { render } from 'react-dom'
import { rootSaga } from './store/saga'
import { updateNow } from './store/actions'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

window.setInterval(() => {
  store.dispatch(updateNow())
}, 60000)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
