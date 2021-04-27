import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Page from '../components/Page'
import TextHeader from '../components/TextHeader'
import ContactForm from '../components/ContactForm'
import IndexLayout from '../layouts'

const ContactPage = () => (
  <IndexLayout>
    <Page>
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
    </Page>
  </IndexLayout>
)

export default ContactPage
