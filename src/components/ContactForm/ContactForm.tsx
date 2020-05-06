import React, { useReducer } from 'react'

import styles from './ContactForm.module.scss'

import {
  GETFORM_ENDPOINT,
  SUCCESS_MESSAGE,
  FAILURE_MESSAGE,
  SUBMITTING_MESSAGE,
} from './constants'
import { reducer, initialState } from './reducer'
import { valueChanged, submitStart, submitStop } from './actions'

import { Text, FormControlsTextElement } from '../FormControls/Text'
import { Textarea, FormControlsTextareaElement } from '../FormControls/Textarea'
import SubmitButton from '../SubmitButton'

const ContactForm: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    dispatch(submitStart())

    fetch(GETFORM_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
    })
      .then(() => {
        dispatch(submitStop(true, SUCCESS_MESSAGE))
        form.reset()
      })
      .catch(() => {
        dispatch(submitStop(false, FAILURE_MESSAGE))
      })
  }

  const onTextChange = (
    e: React.ChangeEvent<FormControlsTextElement | FormControlsTextareaElement>
  ) => {
    const { name, value } = e.target
    dispatch(valueChanged(name, value))
  }

  return (
    <div className={styles.ContactForm}>
      <div className={styles.formContainer}>
        <form onSubmit={handleOnSubmit}>
          <Text
            onChange={onTextChange}
            value={state.email}
            type="email"
            name="email"
            label="Email"
            required
          />

          <Text
            onChange={onTextChange}
            value={state.name}
            type="text"
            name="name"
            label="Name"
            required
          />

          <Textarea
            onChange={onTextChange}
            value={state.message}
            name="message"
            label="Message"
            required
          />

          <SubmitButton
            submitting={state.submitting}
            submittingText={SUBMITTING_MESSAGE}
            status={state.status}
          >
            Send
          </SubmitButton>

          <div className={styles.failureMessage}>
            {state.status.msg === FAILURE_MESSAGE && state.status.msg}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
