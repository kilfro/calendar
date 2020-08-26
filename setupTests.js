import 'jest-localstorage-mock'
import '@testing-library/jest-dom/extend-expect'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

global.shallow = shallow
global.mount = mount
configure({ adapter: new Adapter() })
