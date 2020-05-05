import React from 'react'
import renderer from 'react-test-renderer'

import GalleryImageRenderer from './GalleryImageRenderer'

describe('GalleryImageRenderer', () => {
  it('renders correctly', () => {
    const fluid = {
      src: 'https://cindy.kim',
      srcSet: 'elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w',
      sizes: '(max-width: 600px) 480px, 800px',
      width: 500,
      height: 500,
    }

    const tree = renderer
      .create(
        <GalleryImageRenderer
          index={0}
          photo={fluid}
          onClick={jest.fn()}
          direction="row"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
