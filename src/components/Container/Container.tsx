import React from 'react'
import cx from 'classnames'

import styles from './Container.module.scss'

interface Props {
  className?: string
}

const Container: React.FC<Props> = ({ children, className }) => (
  <div className={cx(styles.Container, className)}>{children}</div>
)

export default Container
