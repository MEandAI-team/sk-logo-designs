import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'
import { expect, test, describe, vi } from 'vitest'

// Mock all the page components to avoid complex dependencies
vi.mock('../../pages/HomePage', () => ({
  default: () => <div data-testid="home-page">Home Page</div>
}))

vi.mock('../../pages/AboutPage', () => ({
  default: () => <div data-testid="about-page">About Page</div>
}))

vi.mock('../../pages/PortfolioPage', () => ({
  default: () => <div data-testid="portfolio-page">Portfolio Page</div>
}))

vi.mock('../../pages/TestimonialsPage', () => ({
  default: () => <div data-testid="testimonials-page">Testimonials Page</div>
}))

vi.mock('../../pages/ContactPage', () => ({
  default: () => <div data-testid="contact-page">Contact Page</div>
}))

vi.mock('../../pages/ProjectDetailPage', () => ({
  default: () => <div data-testid="project-detail-page">Project Detail Page</div>
}))

// Mock components
vi.mock('../../components/Navigation', () => ({
  Navigation: () => <nav data-testid="navigation">Navigation</nav>
}))

vi.mock('../../components/Footer', () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>
}))

vi.mock('../../components/ScrollToTop', () => ({
  ScrollToTop: () => <div data-testid="scroll-to-top">ScrollToTop</div>
}))

// Mock framer-motion
vi.mock('motion/react', () => ({
  motion: {
    div: 'div',
    nav: 'nav',
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}))

describe('App', () => {
  test('App routes render correctly', () => {
    // Test home route
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByTestId('navigation')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('scroll-to-top')).toBeInTheDocument()
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })

  test('About route renders correctly', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    expect(screen.getByTestId('navigation')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  test('Portfolio route renders correctly', () => {
    render(
      <MemoryRouter initialEntries={['/portfolio']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByTestId('portfolio-page')).toBeInTheDocument()
  })

  test('Testimonials route renders correctly', () => {
    render(
      <MemoryRouter initialEntries={['/testimonials']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByTestId('testimonials-page')).toBeInTheDocument()
  })

  test('Contact route renders correctly', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByTestId('contact-page')).toBeInTheDocument()
  })

  test('Project detail route renders correctly', () => {
    render(
      <MemoryRouter initialEntries={['/project/1']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByTestId('project-detail-page')).toBeInTheDocument()
  })

  test('Project detail with image route renders correctly', () => {
    render(
      <MemoryRouter initialEntries={['/project/1/image/0']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByTestId('project-detail-page')).toBeInTheDocument()
  })

  test('Unknown route redirects to home', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <App />
      </MemoryRouter>
    )

    // Should redirect to home page
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })

  test('App structure contains required elements', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    // Check for main structural elements
    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()

    // Check for minimum height class
    const appContainer = screen.getByTestId('navigation').closest('.min-h-screen')
    expect(appContainer).toBeInTheDocument()
  })
})