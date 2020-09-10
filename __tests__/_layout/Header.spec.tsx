import 'jsdom-global/register'
import React from 'react'
import '../../config/setup'
import Header from '../../src/containers/_layout/header'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { unmountComponentAtNode } from 'react-dom'

let container: HTMLDivElement | null = document.createElement('div')

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useLocation: jest.fn().mockReturnValue({
    pathname: '/products',
    search: '',
    hash: '',
    state: null,
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

describe('Header should render correctly', () => {
  it('snapshot match', () => {
    const header = shallow(<Header />)

    expect(toJson(header)).toMatchSnapshot()
  })

  it('should mount component', () => {
    mount(<Header />)
  })
})
