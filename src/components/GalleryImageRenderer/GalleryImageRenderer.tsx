import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { RenderImageProps } from 'react-photo-gallery'

import styles from './GalleryImageRenderer.module.scss'

const GalleryImageRenderer = ({
  index,
  photo,
  margin,
  onClick,
}: RenderImageProps) => {
  const fluidObject: FluidObject = {
    aspectRatio: photo.width / photo.height,
    src: photo.src,
    srcSet: photo.srcSet?.toString() ?? '',
    sizes: photo.sizes?.toString() ?? '',
  }

  return (
    <button
      type="button"
      key={photo.key}
      onClick={event => {
        if (onClick) {
          onClick(event, { ...photo, index })
        }
      }}
      style={{ margin, width: photo.width, height: photo.height }}
      className={styles.GalleryImageRenderer}
    >
      <Img fluid={fluidObject} />
    </button>
  )
}

export default GalleryImageRenderer
