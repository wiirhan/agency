import React, { ReactNode } from 'react'

interface TypographyProps {
  children: ReactNode
  className?: string
}

export const H1: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return <h1 className={`font-epilogue font-extra-bold text-h1 leading-h1 tracking-h1 ${className}`}>{children}</h1>
}

export const H2: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return <h2 className={`font-epilogue font-extra-bold text-h2 leading-h2 tracking-h2 ${className}`}>{children}</h2>
}

export const H3: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return <h3 className={`font-epilogue font-extra-bold text-h3 leading-h3 ${className}`}>{children}</h3>
}

export const H4: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return <h4 className={`font-epilogue font-bold text-h4 leading-h4 ${className}`}>{children}</h4>
}

export const H5: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return <h5 className={`font-epilogue font-normal text-h5 leading-h5 tracking-h5 uppercase ${className}`}>{children}</h5>
}

export const Label: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return <span className={`font-epilogue font-bold text-label leading-label uppercase ${className}`}>{children}</span>
}

export const TextBig: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return <p className={`font-epilogue font-normal text-text-big leading-text-big ${className}`}>{children}</p>
}

export const Text: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return <p className={`font-epilogue font-normal text-text leading-text ${className}`}>{children}</p>
}

export const TextSmall: React.FC<TypographyProps> = ({ children, className = '' }) => {
  return <p className={`font-epilogue font-normal text-text-small leading-text-small ${className}`}>{children}</p>
}
