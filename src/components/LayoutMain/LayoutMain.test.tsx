import React from 'react'
import renderer from 'react-test-renderer'

import LayoutMain from './LayoutMain'

describe('LayoutMain', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <LayoutMain className="layoutMain-mock">
          <div>LayoutMain</div>
        </LayoutMain>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
