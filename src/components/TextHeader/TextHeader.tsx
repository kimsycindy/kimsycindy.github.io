import React from 'react'
import styles from './TextHeader.module.scss'

interface Props {
  priority: 1 | 2 | 3 | 4 | 5 | 6
  children: string
}

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const TextHeader: React.FC<Props> = ({ priority, children }) => {
  const HeaderTag = `h${priority}` as Heading
  return (
    <HeaderTag className={styles.TextHeader}>
      <span className={styles[`h${priority}`]}>{children}</span>
    </HeaderTag>
  )
}

export default TextHeader
