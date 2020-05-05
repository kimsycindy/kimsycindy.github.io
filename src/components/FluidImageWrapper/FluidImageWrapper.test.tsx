import React from 'react'
import renderer from 'react-test-renderer'

import Img from 'gatsby-image'
import FluidImageWrapper from './FluidImageWrapper'

describe('FluidImageWrapper', () => {
  it('renders correctly', () => {
    const fluid = {
      aspectRatio: 1,
      src: 'https://cindy.kim',
      srcSet: 'elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w',
      sizes: '(max-width: 600px) 480px, 800px',
    }

    const tree = renderer
      .create(
        <FluidImageWrapper
          width={500}
          height={500}
          className="fluidImageWrapper-mock"
        >
          <Img fluid={fluid} />
        </FluidImageWrapper>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
