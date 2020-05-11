import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
import ContactForm from '../components/ContactForm'
import IndexLayout from '../layouts'

const ContactPage: React.FC = () => (
  <IndexLayout>
    <Page>
      <Container>
        <TextHeader priority={1}>Contact</TextHeader>
        <p>
          You can email me at{' '}
          <OutboundLink href="mailto:hello@cindy.kim">
            hello@cindy.kim
          </OutboundLink>{' '}
          or use the form below.
        </p>
        {process.env.GATSBY_GETFORM_KEY && (
          <ContactForm getFormKey={process.env.GATSBY_GETFORM_KEY} />
        )}
      </Container>
    </Page>
  </IndexLayout>
)

export default ContactPage
