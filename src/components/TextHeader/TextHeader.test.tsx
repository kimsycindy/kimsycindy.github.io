import React from 'react'
import renderer from 'react-test-renderer'

import TextHeader from './TextHeader'

describe('TextHeader', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TextHeader priority={1}>Hello world!</TextHeader>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
