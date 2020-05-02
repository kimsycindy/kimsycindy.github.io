import React from 'react'

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
          <a href="mailto:hello@cindy.kim">hello@cindy.kim</a> or use the form
          below.
        </p>
        <ContactForm />
      </Container>
    </Page>
  </IndexLayout>
)

export default ContactPage
