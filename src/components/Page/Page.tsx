import React from 'react'
import styles from './Page.module.scss'
import Container from '../Container'

interface PageProps {
  children: React.ReactNode
  className?: string
}

const Page = ({ children, className }: PageProps) => (
  <div className={`${styles.Page} ${className}`}>
    <Container>{children}</Container>
  </div>
)

export default Page
