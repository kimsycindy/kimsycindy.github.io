import React from 'react'
import styles from './Button.module.scss'
import { BUTTON_TYPES } from './constants'

interface ButtonProps {
  type: BUTTON_TYPES.SUBMIT | BUTTON_TYPES.RESET | BUTTON_TYPES.BUTTON
  disabled: boolean
  className?: string
  children: React.ReactNode
}

const Button = ({ type, disabled, className, children }: ButtonProps) => (
  <button
    className={`${styles.Button} ${className}`}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
)

export default Button
