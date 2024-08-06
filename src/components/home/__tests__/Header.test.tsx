import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import Header from '../Header'

// Mock child components
vi.mock('../Logo', () => ({
  default: () => <div data-testid="mock-logo">Logo</div>,
}))

vi.mock('../Menu', () => ({
  default: () => <div data-testid="mock-menu">Menu</div>,
}))

vi.mock('../../common/Button', () => ({
  default: ({ children }: { children: React.ReactNode }) => <button data-testid="mock-button">{children}</button>,
}))

describe('Header', () => {
  it('renders the logo, menu, and contact button', () => {
    render(<Header />)

    expect(screen.getByTestId('mock-logo')).toBeInTheDocument()
    expect(screen.getByTestId('mock-menu')).toBeInTheDocument()
    expect(screen.getByTestId('mock-button')).toBeInTheDocument()
    expect(screen.getByText('CONTACT')).toBeInTheDocument()
  })

  it('has the correct background color', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-bg-dark')
  })

  it('has a container with correct classes', () => {
    render(<Header />)
    const container = screen.getByRole('banner').firstChild
    expect(container).toHaveClass('container p-4 mx-auto flex justify-between')
  })
})
