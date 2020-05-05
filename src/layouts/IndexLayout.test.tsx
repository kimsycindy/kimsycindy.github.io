import React from 'react'
import renderer from 'react-test-renderer'

import IndexLayout from './index'

describe('IndexLayout', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <IndexLayout>
          <div>IndexLayout</div>
        </IndexLayout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
