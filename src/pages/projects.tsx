import React from 'react'
import { graphql, Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
import IndexLayout from '../layouts'

interface ProjectNode {
  node: {
    id: string
    slug: string
    title: string
  }
}

interface Props {
  data: {
    allContentfulProject: {
      edges: ProjectNode[]
    }
  }
}

const projectsPath = '/projects/'

const ProjectsPage: React.FC<Props> = ({
  data: {
    allContentfulProject: { edges: projects },
  },
}) => {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <TextHeader priority={1}>Projects</TextHeader>
          <p>Here's a list of my projects:</p>
          <ul>
            {projects.map(project => {
              const { id, slug, title } = project.node

              return (
                <li>
                  <Link to={`${projectsPath}${slug}`} key={id}>
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default ProjectsPage

export const query = graphql`
  query ProjectsPage {
    allContentfulProject {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
