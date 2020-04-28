import React from 'react'

import styles from './resume.module.scss'

import Page from '../components/Page'
import Container from '../components/Container'
import TextHeader from '../components/TextHeader'
import ResumeItem from '../components/ResumeItem'
import IndexLayout from '../layouts'

const ResumePage: React.FC = () => (
  <IndexLayout>
    <Page>
      <Container>
        <TextHeader priority={1}>Resume</TextHeader>
        <p>I have a fairly versatile skillset! I'm perfectly comfortable either adjusting stage lighting from the rafters or sipping coffee at my desk.</p>
        <p>
          Here's what I've done so far, with more info on my{' '}
          <a href="https://www.linkedin.com/in/cindy-kim-924b48132/">
            LinkedIn.
          </a>
        </p>
        <div className={styles.contentContainer}>
          <div>
            <TextHeader priority={2}>Experience</TextHeader>
            <ResumeItem
              company="LIVR"
              subtitle="Jul 2019 - Sept 2019"
              position="Account Executive"
            />
            <ResumeItem
              company="Queen Mary Theatre Company"
              subtitle="2018 - 2019"
              position="Technical Manager"
            />
            <ResumeItem
              company="The Yard Theatre"
              subtitle="2018 - 2019"
              position="Duty Technician"
            />
            <ResumeItem
              company="Peopling the Palace(s) Festival"
              subtitle="2018"
              position="Social Media Intern"
            />
            <ResumeItem
              company="Queen Mary Student Union"
              subtitle="2018 - 2019"
              position="Peer Assisted Study Support Mentor"
            />
            <ResumeItem
              company="Queen Mary Theatre Company"
              subtitle="2016-2018"
              position="Theatre Technician"
            />
            <ResumeItem
              company="HKELD"
              subtitle="2014 - 2016"
              position="Creative Intern and Reviewer"
            />
          </div>
          <div>
            <TextHeader priority={2}>Volunteering</TextHeader>
            <ResumeItem
              company="Bow Arts Trust, Nunnery Gallery"
              subtitle="2018 - 2019"
              position="Gallery Volunteer"
            />
            <ResumeItem
              company="TheatreCraft"
              subtitle="2017 - 2018"
              position="Volunteer"
            />
            <TextHeader priority={2}>Languages</TextHeader>
            <ResumeItem company="English" subtitle="Native" />
            <ResumeItem company="Korean" subtitle="Conversational" />
            <ResumeItem
              company="Mandarin Chinese"
              subtitle="Basic - but learning!"
            />
          </div>
        </div>
      </Container>
    </Page>
  </IndexLayout>
)

export default ResumePage
