import React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
import IndexLayout from '../layouts'

const ContactPage: React.FC = () => {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <TextHeader priority={1}>Contact</TextHeader>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default ContactPage
