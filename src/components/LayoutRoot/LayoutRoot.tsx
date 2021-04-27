import React from 'react'
import styles from './LayoutRoot.module.scss'

interface LayoutRootProps {
  children: React.ReactNode
  className?: string
}

const LayoutRoot = ({ children, className }: LayoutRootProps) => (
  <div className={`${styles.LayoutRoot} ${className}`}>{children}</div>
)

export default LayoutRoot
