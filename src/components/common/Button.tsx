import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      className={`text-text-light font-extra-bold text-sm rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
