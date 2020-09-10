import 'jsdom-global/register'
import React from 'react'
import '../../config/setup'
import Footer from '../../src/containers/_layout/footer'
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

describe('Footer should render correctly', () => {
  it('snapshot match', () => {
    const footer = shallow(<Footer />)

    expect(toJson(footer)).toMatchSnapshot()
  })

  it('should mount component', () => {
    mount(<Footer />)
  })
})
