import React from 'react'
import cx from 'classnames'

import styles from './Button.module.scss'
import { BUTTON_TYPES } from './constants'

interface Props {
  type: BUTTON_TYPES.SUBMIT | BUTTON_TYPES.RESET | BUTTON_TYPES.BUTTON
  disabled: boolean
  className?: string
}

const Button: React.FC<Props> = ({ type, disabled, className, children }) => (
  <button
    className={cx(styles.Button, className)}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
)

export default Button
