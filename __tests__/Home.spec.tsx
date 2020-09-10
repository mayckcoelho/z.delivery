import 'jsdom-global/register'
import React from 'react'
import '../config/setup'
import Home from '../src/containers/home'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { unmountComponentAtNode } from 'react-dom'

let container: HTMLDivElement | null = document.createElement('div')

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useLocation: jest.fn().mockReturnValue({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}))

beforeEach(() => {
  container && document.body.appendChild(container)
})

afterEach(() => {
  container && unmountComponentAtNode(container)
  container?.remove()
  container = null
})

describe('Home should render correctly', () => {
  it('snapshot match', () => {
    const home = shallow(<Home />)

    expect(toJson(home)).toMatchSnapshot()
  })

  it('should mount component', () => {
    mount(<Home />)
  })
})
