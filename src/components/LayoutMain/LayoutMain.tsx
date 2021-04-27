import React from 'react'
import styles from './LayoutMain.module.scss'

interface LayoutMainProps {
  children: React.ReactNode
  className?: string
}

const LayoutMain = ({ children, className }: LayoutMainProps) => (
  <div className={`${styles.LayoutMain} ${className}`}>{children}</div>
)

export default LayoutMain
