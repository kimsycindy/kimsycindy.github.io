import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize.scss'

import Navbar from '../components/Navbar'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import Footer from '../components/Footer'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
          link={[
            {
              href:
                'https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Righteous&display=swap',
              rel: 'stylesheet',
            },
          ]}
        />
        <Navbar />
        <LayoutMain>{children}</LayoutMain>
        <Footer />
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
