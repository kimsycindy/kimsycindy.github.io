import React from 'react'
import styles from './Footer.module.scss'

const Footer: React.FC = () => (
  <footer className={styles.Footer}>
    <small>&copy;{new Date().getFullYear()} Cindy Kim</small> |{' '}
    <small>
      Created by{' '}
      <a target="_blank" rel="noopener noreferrer" href="http://iamryanlee.com">
        Ryan Lee
      </a>
    </small>
  </footer>
)

export default Footer
