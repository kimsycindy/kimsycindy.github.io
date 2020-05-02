import React, { useState, FormEvent } from 'react'
import styles from './ContactForm.module.scss'

interface ServerState {
  submitting: boolean
  status?: {
    ok: boolean
    msg: string
  }
}

const ContactForm: React.FC = () => {
  const [serverState, setServerState] = useState<ServerState>({
    submitting: false,
    status: {
      ok: false,
      msg: '',
    },
  })

  const handleServerResponse = (
    ok: boolean,
    msg: string,
    form: HTMLFormElement
  ) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })

    if (ok) {
      form.reset()
    }
  }

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    setServerState({ submitting: true })

    fetch(`https://getform.io/f/${process.env.GETFORM_KEY}`, {
      method: 'POST',
      body: new FormData(form),
    })
      .then(() => {
        handleServerResponse(true, 'Thanks!', form)
      })
      .catch(res => {
        handleServerResponse(false, res.response.data.error, form)
      })
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-group">
        <label htmlFor="email">
          Email
          <input type="email" name="email" placeholder="Enter email" required />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={serverState.submitting}
      >
        Submit
      </button>

      {serverState.status && <p>{serverState.status.msg}</p>}
    </form>
  )
}

export default ContactForm
