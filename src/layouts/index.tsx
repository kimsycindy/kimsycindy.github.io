import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize.scss'

import { SiteMetadata } from '../../graphql-types'

import Navbar from '../components/Navbar'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import Footer from '../components/Footer'

interface StaticQueryProps {
  site: {
    siteMetadata: SiteMetadata
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
            keywords
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
            {
              rel: 'apple-touch-icon',
              sizes: '180x180',
              href: '/apple-touch-icon.png',
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: '/favicon-32x32.png',
            },
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '16x16',
              href: '/favicon-16x16.png',
            },
            {
              rel: 'manifest',
              href: '/site.webmanifest',
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
