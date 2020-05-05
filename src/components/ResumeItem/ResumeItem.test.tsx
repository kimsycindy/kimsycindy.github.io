import React from 'react'
import renderer from 'react-test-renderer'

import ResumeItem from './ResumeItem'

describe('ResumeItem', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ResumeItem
          company="Mock Company"
          subtitle="Mock Subtitle"
          position="Mock Position"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly without position prop', () => {
    const tree = renderer
      .create(<ResumeItem company="Mock Company" subtitle="Mock Subtitle" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
