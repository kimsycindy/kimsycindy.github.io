import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
import IndexLayout from '../layouts'

const Bold = ({ children }: any) => <span className="bold">{children}</span>
const Text = ({ children }: any) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
  },
}

interface ProjectTemplateProps {
  data: {
    contentfulProject: {
      title: string
      body: { json: string }
    }
  }
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ data }) => {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <Link to="/projects">Go back</Link>
          <TextHeader priority={1}>{data.contentfulProject.title}</TextHeader>
          {/* eslint-disable react/no-danger */}
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulProject.body.json,
            }}
          />
          {/* eslint-enable react/no-danger */}
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
    }
  }
`
