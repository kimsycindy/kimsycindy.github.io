import React from 'react'
import cx from 'classnames'

import styles from './Page.module.scss'

interface Props {
  className?: string
}

const Page: React.FC<Props> = ({ children, className }) => (
  <div className={cx(styles.Page, className)}>{children}</div>
)

export default Page
