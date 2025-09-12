import { render } from '@testing-library/react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { ScrollToTop } from '../../components/ScrollToTop'
import { expect, test, describe, vi } from 'vitest'

// Mock useLocation hook
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useLocation: vi.fn(),
  }
})

const mockUseLocation = vi.mocked(useLocation)

describe('ScrollToTop', () => {
  test('ScrollToTop component works', () => {
    const mockScrollTo = vi.fn()
    Object.defineProperty(window, 'scrollTo', {
      value: mockScrollTo,
      writable: true
    })

    // Mock location
    mockUseLocation.mockReturnValue({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    })

    const { rerender } = render(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    )

    // Verify initial scroll to top
    expect(mockScrollTo).toHaveBeenCalledWith(0, 0)
    expect(mockScrollTo).toHaveBeenCalledTimes(1)

    // Change location
    mockUseLocation.mockReturnValue({
      pathname: '/about',
      search: '',
      hash: '',
      state: null,
      key: 'about'
    })

    rerender(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    )

    // Verify scroll to top was called again on route change
    expect(mockScrollTo).toHaveBeenCalledTimes(2)
    expect(mockScrollTo).toHaveBeenLastCalledWith(0, 0)
  })

  test('ScrollToTop returns null', () => {
    mockUseLocation.mockReturnValue({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: 'default'
    })

    const { container } = render(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    )

    // Component should render null
    expect(container.firstChild).toBeNull()
  })
})