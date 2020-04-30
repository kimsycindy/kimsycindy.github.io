import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { BLOCKS } from '@contentful/rich-text-types'
import {
  documentToReactComponents,
  RenderNode,
} from '@contentful/rich-text-react-renderer'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import { ProjectBySlugQuery } from '../../graphql-types'

import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
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
          return {
            src: image.fluid.src,
            srcSet: image.fluid.srcSet,
            sizes: image.fluid.sizes,
            width: image.file.details.image.width,
            height: image.file.details.image.height,
            description: image.description,
            key: `${image.id}-${index}`,
          }
        }

        return null
      })

      return (
        <>
          <Gallery
            photos={galleryPhotos}
            onClick={(event, photos) => openLightbox(event, photos)}
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
        fluid(maxWidth: 2000) {
          src
          srcSet
          sizes
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
