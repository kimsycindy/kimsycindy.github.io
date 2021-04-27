import React from 'react'
import styles from './SubmitButton.module.scss'
import Button from '../Button'
import { BUTTON_TYPES } from '../Button/constants'

interface SubmitButtonProps {
  submitting: boolean
  submittingText: string
  status: {
    ok: boolean
    msg: string
  }
  className?: string
  children: React.ReactNode
}

const SubmitButton = ({
  submitting,
  submittingText,
  status: { ok, msg },
  className,
  children,
}: SubmitButtonProps) => (
  <Button
    className={`${styles.SubmitButton} ${className}`}
    type={BUTTON_TYPES.SUBMIT}
    disabled={submitting || ok}
  >
    {submitting && submittingText}
    {ok && msg}
    {!submitting && !ok && children}
  </Button>
)

export default SubmitButton
