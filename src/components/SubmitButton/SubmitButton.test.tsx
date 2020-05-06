import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

import SubmitButton from './SubmitButton'

describe('SubmitButton', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SubmitButton
          submitting={false}
          submittingText="Submitting..."
          status={{ ok: false, msg: 'message' }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('shows submittingText on click', () => {
    const submittingText = 'Submitting...'

    const { getByText } = render(
      <SubmitButton
        submitting
        submittingText={submittingText}
        status={{ ok: false, msg: 'message' }}
      />
    )

    expect(getByText(submittingText)).toBeInTheDocument()
  })
})
