import React from 'react'
import cx from 'classnames'

import styles from './Button.module.scss'
import { BUTTON_TYPES } from './constants'

interface ButtonProps {
  type: BUTTON_TYPES.SUBMIT | BUTTON_TYPES.RESET | BUTTON_TYPES.BUTTON
  disabled: boolean
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  type,
  disabled,
  className,
  children,
}) => (
  <button
    className={cx(styles.Button, className)}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
)

interface SubmitButtonProps {
  submitting: boolean
  submittingText: string
  status: {
    ok: boolean
    msg: string
  }
  className?: string
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  submitting,
  submittingText,
  status: { ok, msg },
  className,
  children,
}) => (
  <Button
    className={cx(styles.SubmitButton, className)}
    type={BUTTON_TYPES.SUBMIT}
    disabled={submitting || ok}
  >
    {submitting && submittingText}
    {ok && msg}
    {!submitting && !ok && children}
  </Button>
)
