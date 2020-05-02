import React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
import ContactForm from '../components/ContactForm'
import IndexLayout from '../layouts'

const ContactPage: React.FC = () => {
  console.log(process.env.GETFORM_KEY)
  return (
    <IndexLayout>
      <Page>
        <Container>
          <TextHeader priority={1}>Contact</TextHeader>
          <ContactForm />
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default ContactPage
