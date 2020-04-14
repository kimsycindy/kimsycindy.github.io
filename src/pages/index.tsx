import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Image } from '../../graphql-types'

import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
import FluidImageWrapper from '../components/FluidImageWrapper/FluidImageWrapper'
import IndexLayout from '../layouts'

interface Props {
  data: {
    image0: Image
    image1: Image
    image2: Image
  }
}

const IndexPage: React.FC<Props> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container>
        <TextHeader priority={1}>Hi, I'm Cindy.</TextHeader>
        <FluidImageWrapper width={500}>
          <Img fluid={data.image1?.childImageSharp?.fluid} />
        </FluidImageWrapper>
        <p>
          I am a writer and artist with experience in creative writing, social
          media, and copywriting.
        </p>
        <p>
          I create work with a thoughtful, conscientious approach to the
          implications of rapidly developing technology, and exploring the
          fascinating - and unexpected! - ways it permeates and cross-pollinates
          every aspect of our lives, for better or worse.
        </p>
        <p>
          We're all strapped into a rocket ship and we don't know where it will
          take us, but if we stare hard enough beyond the stars, we might be
          able to glimpse where we're going.
        </p>
        <p>Or something like that.</p>
        <TextHeader priority={2}>What do I do?</TextHeader>
        <FluidImageWrapper width={500}>
          <Img fluid={data.image2?.childImageSharp?.fluid} />
        </FluidImageWrapper>
        <p>
          My work deals with the <i>effective intersection</i> of theatre and
          technology.
        </p>

        <p>
          I also have a deep interest in virtual and augmented reality
          experiences powered by 360-degree video.
        </p>
        <p>
          Creative writing takes all forms - it can be a social media post or
          newsletter copy.
        </p>
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
  query {
    image0: file(relativePath: { eq: "0.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image1: file(relativePath: { eq: "1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    image2: file(relativePath: { eq: "2.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
