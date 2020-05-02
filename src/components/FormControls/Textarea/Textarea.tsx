import React from 'react'

import styles from './Textarea.module.scss'

interface Props {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  name: string
  label: string
  value: string
  placeholder?: string
  required?: boolean
}

export const Textarea: React.FC<Props> = ({
  onChange,
  name,
  label,
  value,
  placeholder,
  required = false,
}) => (
  <div>
    <label htmlFor={name}>
      {label}
      <br />
      <textarea
        className={styles.textarea}
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        rows={5}
        cols={33}
      />
    </label>
  </div>
)

export type FormControlsTextareaElement = HTMLTextAreaElement
