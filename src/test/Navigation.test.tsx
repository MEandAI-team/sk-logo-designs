import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from '../../components/Navigation'
import { expect, test, describe, vi } from 'vitest'

// Mock framer-motion/react to avoid animation issues in tests
vi.mock('motion/react', async () => {
  const actual = await vi.importActual('motion/react')
  return {
    ...actual,
    motion: {
      nav: 'nav',
      div: 'div',
      button: 'button',
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  }
})

const NavigationWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
)

describe('Navigation', () => {
  test('Navigation renders correctly', () => {
    // Mock scrollY to simulate scrolled state
    Object.defineProperty(window, 'scrollY', {
      value: 150,
      writable: true
    })

    render(
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
    )

    expect(screen.getByText('SK LOGO Design')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('Hire Me')).toBeInTheDocument()
  })

  test('Mobile menu toggles properly', async () => {
    // Mock scrollY to simulate scrolled state
    Object.defineProperty(window, 'scrollY', {
      value: 150,
      writable: true
    })

    render(
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
    )

    // Find mobile menu button
    const menuButton = screen.getByRole('button', { name: /menu/i })
    expect(menuButton).toBeInTheDocument()

    // Click to open menu
    fireEvent.click(menuButton)

    await waitFor(() => {
      // Menu should be open now, check for close button
      expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument()
    })

    // Click to close menu
    const closeButton = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeButton)

    await waitFor(() => {
      // Menu should be closed now
      expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument()
    })
  })

  test('Navigation scroll behavior works', () => {
    // Test when not scrolled (should return null on home page)
    Object.defineProperty(window, 'scrollY', {
      value: 50,
      writable: true
    })

    const { container } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )

    // Should render null when on home page and not scrolled
    expect(container.firstChild).toBeNull()

    // Test when scrolled
    Object.defineProperty(window, 'scrollY', {
      value: 150,
      writable: true
    })

    // Trigger scroll event
    fireEvent.scroll(window)

    // Re-render with scrolled state
    const { rerender } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )

    rerender(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    )

    // Should render navigation when scrolled
    expect(screen.getByText('SK LOGO Design')).toBeInTheDocument()
  })
})