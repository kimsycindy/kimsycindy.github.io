import React from 'react'
import { graphql, Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
import IndexLayout from '../layouts'

interface GroupItem {
  nodes: ProjectNode[]
}

interface ProjectNode {
  id: string
  slug: string
  title: string
  date: string
  year: number
}

interface Props {
  data: {
    allContentfulProject: {
      group: GroupItem[]
    }
  }
}

const projectsPath = '/projects/'

const ProjectsPage: React.FC<Props> = ({
  data: {
    allContentfulProject: { group },
  },
}) => (
  <IndexLayout>
    <Page>
      <Container>
        <TextHeader priority={1}>Projects</TextHeader>
        <p>Here's a list of my projects:</p>
        {[...group].reverse().map(item => {
          const { year } = item.nodes[0]

          return (
            <div key={`projects-${year}`}>
              <TextHeader priority={2}>{year.toString()}</TextHeader>
              <ul>
                {item.nodes.map(node => {
                  const { id, slug, title } = node

                  return (
                    <li key={id}>
                      <Link to={`${projectsPath}${slug}`}>{title}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </Container>
    </Page>
  </IndexLayout>
)

export default ProjectsPage

export const query = graphql`
  query ProjectsPage {
    allContentfulProject {
      group(field: year) {
        nodes {
          id
          year
          slug
          title
          date
        }
      }
    }
  }
`
