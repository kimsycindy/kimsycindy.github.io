import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { BLOCKS } from '@contentful/rich-text-types'
import {
  documentToReactComponents,
  RenderNode,
} from '@contentful/rich-text-react-renderer'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import { ProjectBySlugQuery } from '../../graphql-types'

import styles from './project.module.scss'
import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
import GalleryImageRenderer from '../components/GalleryImageRenderer'
import IndexLayout from '../layouts'

interface RichTextRendererOptions {
  renderNode: RenderNode
}

const options: RichTextRendererOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const {
        title,
        file: {
          'en-US': {
            contentType,
            url,
            details: {
              image: { width, height },
            },
          },
        },
      } = node.data.target.fields

      if (contentType.includes('image')) {
        return (
          <img src={url} width={width} height={height} alt={title['en-US']} />
        )
      }

      return null
    },
  },
}

interface Props {
  data: ProjectBySlugQuery
}

const ProjectTemplate: React.FC<Props> = ({ data: { contentfulProject } }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openLightbox = (event, { index }) => {
    setCurrentImage(index)
    setModalIsOpen(true)
  }

  const closeLightbox = () => {
    setCurrentImage(0)
    setModalIsOpen(false)
  }

  const renderGallery = () => {
    if (contentfulProject.media && contentfulProject.media.length > 0) {
      const galleryPhotos = contentfulProject.media.map((image, index) => {
        if (image) {
          const {
            id,
            fluid: { aspectRatio, src, srcSet, sizes },
            file: {
              details: {
                image: { width, height },
              },
            },
            description,
          } = image

          return {
            key: `${id}-${index}`,
            aspectRatio,
            src,
            srcSet,
            sizes,
            width,
            height,
            description,
          }
        }

        return null
      })

      return (
        <>
          <Gallery
            photos={galleryPhotos}
            renderImage={GalleryImageRenderer}
            onClick={(event, photo) => openLightbox(event, photo)}
            margin={2}
          />
          <ModalGateway>
            {modalIsOpen && (
              <Modal onClose={() => closeLightbox()}>
                <Carousel
                  currentIndex={currentImage}
                  views={galleryPhotos.map(photo => ({
                    source: photo.src,
                    caption: photo.description,
                  }))}
                />
              </Modal>
            )}
          </ModalGateway>
        </>
      )
    }

    return null
  }

  return (
    <IndexLayout>
      <Page>
        <Container>
          <Link to="/projects">{'<'} all projects</Link>
          <TextHeader priority={1}>{contentfulProject?.title ?? ''}</TextHeader>
          {documentToReactComponents(contentfulProject?.body?.json, options)}
          {renderGallery()}
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      body {
        json
      }
      media {
        id
        description
        fluid(maxWidth: 1500) {
          ...GatsbyContentfulFluid
        }
        file {
          details {
            image {
              height
              width
            }
          }
        }
      }
    }
  }
`
