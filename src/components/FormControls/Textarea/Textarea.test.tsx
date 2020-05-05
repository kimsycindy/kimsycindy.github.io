import React from 'react'
import renderer from 'react-test-renderer'

import { Textarea } from './Textarea'

describe('FormControls Textarea', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Textarea
          onChange={jest.fn()}
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
