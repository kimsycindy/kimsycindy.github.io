import React from 'react'
import styles from './Text.module.scss'

interface TextProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: 'email' | 'text'
  name: string
  label: string
  value: string
  placeholder?: string
  required?: boolean
}

export const Text = ({
  onChange,
  type,
  name,
  label,
  value,
  placeholder,
  required = false,
}: TextProps) => (
  <div>
    <label htmlFor={name}>
      {label}
      <br />
      <input
        className={styles.input}
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
      />
    </label>
  </div>
)

export type FormControlsTextElement = HTMLInputElement
