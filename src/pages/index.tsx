import React from 'react'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import styles from './index.module.scss'
import { IndexImagesQuery } from '../../graphql-types'

import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
import IndexLayout from '../layouts'

interface Props {
  data: IndexImagesQuery
}

const IndexPage: React.FC<Props> = ({ data: { profile } }) => (
  <IndexLayout>
    <Page>
      <Container>
        <TextHeader priority={1}>Hi, I'm Cindy.</TextHeader>

        <div className={styles.Content}>
          <Img
            className={styles.ContentPhoto}
            fluid={profile?.childImageSharp?.fluid as FluidObject}
          />

          <div className={styles.ContentText}>
            <p>
              I am a recent Drama graduate of Queen Mary University of London
              with experience in playwriting and working at a London-based VR
              theatre startup, looking for avenues to develop experience with
              immersive storytelling.
            </p>
            <p>
              I'm passionate about stories that facilitate intersectional social
              change, particularly about AI, VR, and other emerging
              technologies. Recently, I’ve written and directed a play about the
              intersection of automation and criminal processes in crisis that
              was performed at the 2019 Edinburgh Festival Fringe.
            </p>
            <p>
              With earnest urgency in mind, I create work with a thoughtful,
              conscientious approach to the implications of rapidly developing
              technology, and exploring the fascinating - and unexpected! - ways
              it permeates and cross-pollinates every aspect of our lives.
            </p>
          </div>
        </div>
      </Container>
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
