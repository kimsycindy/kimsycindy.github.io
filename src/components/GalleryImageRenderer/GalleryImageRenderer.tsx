import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { RenderImageProps } from 'react-photo-gallery'

import styles from './GalleryImageRenderer.module.scss'

interface OwnProps {
  photo: {
    aspectRatio: number
  }
}

type Props = OwnProps & RenderImageProps

const GalleryImageRenderer: React.FC<Props> = ({
  index,
  photo,
  margin,
  onClick,
}) => {
  const fluidObject: FluidObject = {
    aspectRatio: photo.aspectRatio,
    src: photo.src,
    srcSet: photo.srcSet.toString(),
    sizes: photo.sizes.toString(),
  }

  return (
    <button
      type="button"
      key={photo.key}
      onClick={event => onClick(event, { ...photo, index })}
      style={{ margin, width: photo.width, height: photo.height }}
      className={styles.GalleryImageRenderer}
    >
      <Img fluid={fluidObject} />
    </button>
  )
}

export default GalleryImageRenderer
