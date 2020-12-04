import React from 'react'
import { graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

import { IndexImagesQuery } from '../../graphql-types'

import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
import FluidImageWrapper from '../components/FluidImageWrapper/FluidImageWrapper'
import IndexLayout from '../layouts'

interface Props {
  data: IndexImagesQuery
}

const IndexPage: React.FC<Props> = ({ data: { image0, image1 } }) => (
  <IndexLayout>
    <Page>
      <Container>
        <TextHeader priority={1}>Hi, I'm Cindy.</TextHeader>

        <FluidImageWrapper width={500}>
          <Img fluid={image0?.childImageSharp?.fluid as FluidObject} />
        </FluidImageWrapper>

        <p>
          I am a recent Drama graduate of Queen Mary University of London with
          experience in playwriting and working at a London-based VR theatre
          startup, looking for avenues to develop experience with immersive
          storytelling.
        </p>
        <p>
          I'm passionate about stories that facilitate intersectional social
          change, particularly about AI, VR, and other emerging technologies.
          Recently, I’ve written and directed a play about the intersection of
          automation and criminal processes in crisis that was performed at the
          2019 Edinburgh Festival Fringe.
        </p>
        <p>
          With earnest urgency in mind, I create work with a thoughtful,
          conscientious approach to the implications of rapidly developing
          technology, and exploring the fascinating - and unexpected! - ways it
          permeates and cross-pollinates every aspect of our lives.
        </p>
        <p />

        <TextHeader priority={2}>What do I do?</TextHeader>

        <FluidImageWrapper width={500}>
          <Img fluid={image1?.childImageSharp?.fluid as FluidObject} />
        </FluidImageWrapper>

        <p>
          In Hong Kong, I've worked as a creative intern at HKELD, where my
          responsibilities included community outreach, content acquisition, and
          writing reviews.
        </p>
        <p>
          In London, I've written for Peopling the Palace(s) Festival, as well
          as worked as an account executive at LIVR, the world's first VR
          theatre streaming service startup. I'm always looking for
          opportunities to challenge myself.
        </p>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage

export const query = graphql`
  query IndexImages {
    image0: file(relativePath: { eq: "1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image1: file(relativePath: { eq: "2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
