import React from 'react'
import cx from 'classnames'

import styles from './SubmitButton.module.scss'
import Button from '../Button'
import { BUTTON_TYPES } from '../Button/constants'

interface Props {
  submitting: boolean
  submittingText: string
  status: {
    ok: boolean
    msg: string
  }
  className?: string
}

const SubmitButton: React.FC<Props> = ({
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

export default SubmitButton
