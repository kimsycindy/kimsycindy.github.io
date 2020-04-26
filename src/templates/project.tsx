import React from 'react'
import { graphql, Link } from 'gatsby'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import {
  documentToReactComponents,
  RenderNode,
} from '@contentful/rich-text-react-renderer'

import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
import IndexLayout from '../layouts'
import FluidImageWrapper from '../components/FluidImageWrapper'

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
          <FluidImageWrapper width={width}>
            <img src={url} width={width} height={height} alt={title['en-US']} />
          </FluidImageWrapper>
        )
      }

      return null
    },
  },
}

interface ProjectTemplateProps {
  data: {
    contentfulProject: {
      title: string
      body: { json: Document }
    }
  }
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
  data: { contentfulProject },
}) => (
  <IndexLayout>
    <Page>
      <Container>
        <Link to="/projects">{'<'} all projects</Link>
        <TextHeader priority={1}>{contentfulProject.title}</TextHeader>
        {documentToReactComponents(contentfulProject.body.json, options)}
      </Container>
    </Page>
  </IndexLayout>
)

export default ProjectTemplate

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      body {
        json
      }
    }
  }
`
