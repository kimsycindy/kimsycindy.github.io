import React from 'react'

interface Props {
  width?: number
  height?: number
}

const FluidImageWrapper: React.FC<Props> = ({ width, height, children }) => (
  <div
    style={{
      maxWidth: width,
      maxHeight: height,
    }}
  >
    {children}
  </div>
)

export default FluidImageWrapper
