import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import EditWindow from '../../../src/components/tasklist/EditWindow'
import { shallow } from 'enzyme'

describe('EditWindow', () => {
  test('should ', () => {
    const store = configureStore([])({ editTask: () => {} })
    const component = mount(
      <Provider store={store}>
        <EditWindow
          show={true}
          task={{ from: new Date(), to: new Date(), color: 'green' }}
          toggleFunction={() => {}}
        />
      </Provider>
    )
  })
})
