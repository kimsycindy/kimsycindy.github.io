import React from 'react'

interface Props {
  width?: number
  height?: number
  className?: string
}

const FluidImageWrapper: React.FC<Props> = ({
  width,
  height,
  className,
  children,
}) => (
  <div
    className={className}
    style={{
      width,
      height,
      maxWidth: width,
      maxHeight: height,
    }}
  >
    {children}
  </div>
)

export default FluidImageWrapper
