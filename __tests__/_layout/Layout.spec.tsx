import 'jsdom-global/register'
import React from 'react'
import '../../config/setup'
import Layout from '../../src/containers/_layout'
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

describe('Layout should render correctly', () => {
  it('snapshot match', () => {
    const layout = shallow(<Layout />)

    expect(toJson(layout)).toMatchSnapshot()
  })

  it('should mount component', () => {
    mount(<Layout />)
  })
})
