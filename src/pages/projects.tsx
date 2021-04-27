import React from 'react'
import { graphql, Link } from 'gatsby'
import groupBy from 'lodash.groupby'
import styles from './projects.module.scss'
import { ProjectsPageQuery } from '../../graphql-types'
import Page from '../components/Page'
import TextHeader from '../components/TextHeader'
import IndexLayout from '../layouts'

interface ProjectsPageProps {
  data: ProjectsPageQuery
}

const projectsPath = '/projects/'

const ProjectsPage = ({
  data: {
    allContentfulProject: { group },
  },
}: ProjectsPageProps) => (
  <IndexLayout>
    <Page>
      <TextHeader priority={1}>Projects</TextHeader>
      <div className={styles.categories}>
        {[...group].map(category => {
          const categoryTitle = category?.nodes[0]?.category?.title ?? ''

          const parsedCategory = category.nodes
            .map(node => ({
              ...node,
              year: new Date(node.date).getFullYear(),
            }))
            .sort(
              (a, b) =>
                // Sort by newest first
                new Date(b.date).getTime() - new Date(a.date).getTime()
            )

          const groupedByYear = groupBy(parsedCategory, 'year')

          return (
            <div className={styles.category} key={categoryTitle}>
              <TextHeader priority={2}>{categoryTitle}</TextHeader>
              <>
                {Object.keys(groupedByYear)
                  .reverse()
                  .map(year => (
                    <div key={`projects-${year}`}>
                      <h3>{year}</h3>
                      <ul>
                        {groupedByYear[year].map(node => {
                          const { id, slug, title } = node

                          return (
                            <li key={id}>
                              <Link to={`${projectsPath}${slug}`}>{title}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ))}
              </>
            </div>
          )
        })}
      </div>
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
