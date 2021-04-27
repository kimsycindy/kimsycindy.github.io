import React from 'react'

interface ResumeItemProps {
  company: string
  subtitle: string
  position?: string
}

const ResumeItem = ({ company, subtitle, position }: ResumeItemProps) => (
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
