import React from 'react'
import styles from './Container.module.scss'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => (
  <div className={`${styles.Container} ${className}`}>{children}</div>
)

export default Container
