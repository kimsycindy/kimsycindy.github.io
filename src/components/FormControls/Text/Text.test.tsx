import React from 'react'
import renderer from 'react-test-renderer'

import { Text } from './Text'

describe('FormControls Text', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Text
          onChange={jest.fn()}
          type="text"
          name="mock"
          label="Mock"
          value=""
          placeholder="Placeholder"
          required
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
