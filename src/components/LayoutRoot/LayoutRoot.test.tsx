import React from 'react'
import renderer from 'react-test-renderer'

import LayoutRoot from './LayoutRoot'

describe('LayoutRoot', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <LayoutRoot className="layoutRoot-mock">
          <div>LayoutRoot</div>
        </LayoutRoot>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
