import React from 'react'
import renderer from 'react-test-renderer'

import Button from './Button'
import { BUTTON_TYPES } from './constants'

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Button type={BUTTON_TYPES.BUTTON} disabled={false}>
          Button Mock
        </Button>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
