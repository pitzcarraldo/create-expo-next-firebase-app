import React from 'react'
import renderer, { ReactTestRendererJSON } from 'react-test-renderer'
import Greeting from './Greeting'

describe('<Greeting />', () => {
  it('should render a greeting text', () => {
    const actual = renderer
      .create(<Greeting />)
      .toJSON() as ReactTestRendererJSON
    expect(actual.children[0]).toBe('Welcome to Expo + Next.js 👋')
  })
})
