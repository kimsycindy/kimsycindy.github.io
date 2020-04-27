import React from 'react'
import { graphql, Link } from 'gatsby'
import groupBy from 'lodash.groupby'

import { ProjectGroupNode } from '../../graphql-types'

import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
import IndexLayout from '../layouts'

interface Props {
  data: {
    allContentfulProject: {
      group: ProjectGroupNode[]
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
        <div>
          {[...group].map(category => {
            const { title: categoryTitle } = category.nodes[0].category

            const parsedCategory = category.nodes
              .map(node => {
                return {
                  ...node,
                  year: new Date(node.date).getFullYear(),
                }
              })
              .sort((a, b) => {
                // Sort by newest first
                return new Date(b.date).getTime() - new Date(a.date).getTime()
              })

            const groupedByYear = groupBy(parsedCategory, 'year')

            return (
              <>
                <TextHeader priority={2}>{categoryTitle}</TextHeader>
                <>
                  {Object.keys(groupedByYear)
                    .reverse()
                    .map(year => {
                      return (
                        <div>
                          <h3>{year}</h3>
                          <ul>
                            {groupedByYear[year].map(node => {
                              const { id, slug, title } = node

                              return (
                                <li key={id}>
                                  <Link to={`${projectsPath}${slug}`}>
                                    {title}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      )
                    })}
                </>
              </>
            )
          })}
        </div>
      </Container>
    </Page>
  </IndexLayout>
)

export default ProjectsPage

export const query = graphql`
  query ProjectsPage {
    allContentfulProject {
      group(field: category___slug) {
        nodes {
          id
          slug
          title
          date
          category {
            title
          }
        }
      }
    }
  }
`
