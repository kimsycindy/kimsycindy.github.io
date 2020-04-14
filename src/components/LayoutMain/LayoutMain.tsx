import React from 'react'
import cx from 'classnames'

import styles from './LayoutMain.module.scss'

interface Props {
  className?: string
}

const LayoutMain: React.FC<Props> = ({ children, className }) => (
  <div className={cx(styles.LayoutMain, className)}>{children}</div>
)

export default LayoutMain
