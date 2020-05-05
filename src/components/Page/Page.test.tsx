import React from 'react'
import renderer from 'react-test-renderer'

import Page from './Page'

describe('Page', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Page className="page-mock">
          <div>Page</div>
        </Page>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
