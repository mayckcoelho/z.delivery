import 'jsdom-global/register'
import React from 'react'
import '../../config/setup'
import App from '../../src/containers/_app/App'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { unmountComponentAtNode } from 'react-dom'

let container: HTMLDivElement | null = document.createElement('div')

beforeEach(() => {
  container && document.body.appendChild(container)
})

afterEach(() => {
  container && unmountComponentAtNode(container)
  container?.remove()
  container = null
})

describe('App should render correctly', () => {
  it('snapshot match', () => {
    const app = shallow(<App />)

    expect(toJson(app)).toMatchSnapshot()
  })

  it('should mount component', () => {
    mount(<App />)
  })
})
