import React from 'react'

interface Props {
  company: string
  subtitle: string
  position?: string
}

const ResumeItem: React.FC<Props> = ({ company, subtitle, position }) => (
  <p>
    <strong>{company}</strong> | {subtitle}
    {position && (
      <>
        <br />
        {position}
      </>
    )}
  </p>
)

export default ResumeItem
