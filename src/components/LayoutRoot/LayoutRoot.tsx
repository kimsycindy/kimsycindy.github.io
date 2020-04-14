import React from 'react'
import cx from 'classnames'

import styles from './LayoutRoot.module.scss'

interface Props {
  className?: string
}

const LayoutRoot: React.FC<Props> = ({ children, className }) => (
  <div className={cx(styles.LayoutRoot, className)}>{children}</div>
)

export default LayoutRoot
