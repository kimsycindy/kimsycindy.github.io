import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { isFilled } from 'ts-is-present'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import Gallery, { renderImageClickHandler } from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import styles from './project.module.scss'
import { ProjectBySlugQuery } from '../../graphql-types'
import Page from '../components/Page'
import TextHeader from '../components/TextHeader'
import GalleryImageRenderer from '../components/GalleryImageRenderer'
import IndexLayout from '../layouts'

const options: Options = {
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
    [INLINES.HYPERLINK]: node => {
      if (node.data.uri.includes('youtube.com/embed/')) {
        return (
          <span className={styles.iframeWrapper}>
            <iframe
              // value "doesn't exist" on content so ignoring it for now
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              title={node.content[0].value ?? 'YouTube embedded video'}
              src={node.data.uri}
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </span>
        )
      }

      return (
        <OutboundLink href={node.data.uri}>
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            node.content[0].value
          }
        </OutboundLink>
      )
    },
  },
}

interface ProjectTemplateProps {
  data: ProjectBySlugQuery
}

const ProjectTemplate = ({ data }: ProjectTemplateProps) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { contentfulProject } = data

  const openLightbox: renderImageClickHandler = (_event, { index }) => {
    setCurrentImage(index)
    setModalIsOpen(true)
  }

  const closeLightbox = () => {
    setCurrentImage(0)
    setModalIsOpen(false)
  }

  const renderGallery = () => {
    if (
      contentfulProject &&
      contentfulProject.media &&
      contentfulProject.media.length > 0
    ) {
      const galleryPhotos = contentfulProject.media
        .map((image, index) => {
          if (image && image.fluid && image.file?.details?.image) {
            const {
              id,
              description,
              fluid: { src, srcSet, sizes },
              file: {
                details: {
                  image: { width, height },
                },
              },
            } = image

            return {
              description,
              src,
              srcSet,
              sizes,
              width: width ?? 0,
              height: height ?? 0,
              key: `${id}-${index}`,
            }
          }

          return null
        })
        .filter(isFilled)

      return (
        <>
          <Gallery
            photos={galleryPhotos}
            renderImage={GalleryImageRenderer}
            onClick={(event, photo) => openLightbox(event, photo)}
            margin={2}
          />
          {modalIsOpen && (
            <Lightbox
              mainSrc={galleryPhotos[currentImage].src}
              nextSrc={
                galleryPhotos[(currentImage + 1) % galleryPhotos.length].src
              }
              prevSrc={
                galleryPhotos[
                  (currentImage === 0 ? 0 : currentImage - 1) %
                    galleryPhotos.length
                ].src
              }
              onCloseRequest={closeLightbox}
              onMovePrevRequest={() =>
                setCurrentImage(
                  (currentImage + galleryPhotos.length - 1) %
                    galleryPhotos.length
                )
              }
              onMoveNextRequest={() =>
                setCurrentImage((currentImage + 1) % galleryPhotos.length)
              }
            />
          )}
        </>
      )
    }

    return null
  }

  return (
    <IndexLayout>
      <Page>
        <Link to="/projects">{'<'} all projects</Link>
        <TextHeader priority={1}>{contentfulProject?.title ?? ''}</TextHeader>
        {documentToReactComponents(contentfulProject?.body?.json, options)}
        {renderGallery()}
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
