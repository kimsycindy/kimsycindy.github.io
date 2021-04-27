import React from 'react'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import styles from './index.module.scss'
import { IndexImagesQuery } from '../../graphql-types'
import Page from '../components/Page'
import TextHeader from '../components/TextHeader'
import IndexLayout from '../layouts'
import 'animate.css'

interface IndexPageProps {
  data: IndexImagesQuery
}

const IndexPage = ({ data: { profile } }: IndexPageProps) => (
  <IndexLayout>
    <Page>
      <TextHeader priority={1}>Hi, I'm Cindy.</TextHeader>

      <div className={styles.Content}>
        <Img
          className={`${styles.ContentPhoto} animate__animated animate__fadeInLeft`}
          fluid={profile?.childImageSharp?.fluid as FluidObject}
        />

        <div
          className={`${styles.ContentText} animate__animated animate__fadeInRight`}
        >
          <p>
            I'm passionate about stories that facilitate intersectional social
            change, particularly about AI, VR, and other emerging technologies.
            I've written and directed a play about the intersection of
            automation and criminal processes in crisis that was performed at
            the 2019 Edinburgh Festival Fringe.
          </p>
          <p>
            With earnest urgency in mind, I create work with a thoughtful,
            conscientious approach to the implications of rapidly developing
            technology, and exploring the fascinating - and unexpected! - ways
            it permeates and cross-pollinates every aspect of our lives.
          </p>
        </div>
      </div>
    </Page>
  </IndexLayout>
)

export default IndexPage

export const query = graphql`
  query IndexImages {
    profile: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
