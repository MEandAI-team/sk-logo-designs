import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '../../components/ContactForm'
import { expect, test, describe, vi } from 'vitest'

// Mock framer-motion/react
vi.mock('motion/react', async () => {
  const actual = await vi.importActual('motion/react')
  return {
    ...actual,
    motion: {
      div: 'div',
      form: 'form',
    },
  }
})

describe('ContactForm', () => {
  test('Contact form validates inputs', async () => {
    const user = userEvent.setup()
    
    render(<ContactForm />)

    // Find and click submit button without filling required fields
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    // Check for validation errors
    await waitFor(() => {
      expect(screen.getByText('Full name is required')).toBeInTheDocument()
      expect(screen.getByText('Email is required')).toBeInTheDocument()
      expect(screen.getByText('Message is required')).toBeInTheDocument()
    })

    // Test invalid email validation
    const emailInput = screen.getByPlaceholderText('your@email.com')
    await user.type(emailInput, 'invalid-email')
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
    })

    // Test valid email format
    await user.clear(emailInput)
    await user.type(emailInput, 'test@example.com')

    // Fill other required fields
    const nameInput = screen.getByPlaceholderText('Your full name')
    const messageInput = screen.getByPlaceholderText(/Tell me about your project/i)

    await user.type(nameInput, 'John Doe')
    await user.type(messageInput, 'This is a test message')

    await user.click(submitButton)

    // Validation errors should be cleared
    await waitFor(() => {
      expect(screen.queryByText('Full name is required')).not.toBeInTheDocument()
      expect(screen.queryByText('Please enter a valid email')).not.toBeInTheDocument()
      expect(screen.queryByText('Message is required')).not.toBeInTheDocument()
    })
  })

  test('Contact form submits successfully', async () => {
    const user = userEvent.setup()
    
    render(<ContactForm />)

    // Fill out the form
    const nameInput = screen.getByPlaceholderText('Your full name')
    const emailInput = screen.getByPlaceholderText('your@email.com')
    const companyInput = screen.getByPlaceholderText('Your company name')
    const timelineInput = screen.getByPlaceholderText('e.g., 2-3 weeks')
    const messageInput = screen.getByPlaceholderText(/Tell me about your project/i)

    await user.type(nameInput, 'John Doe')
    await user.type(emailInput, 'john@example.com')
    await user.type(companyInput, 'Test Company')
    await user.type(timelineInput, '2 weeks')
    await user.type(messageInput, 'This is a detailed project description for testing purposes.')

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    // Check for submitting state
    await waitFor(() => {
      expect(screen.getByText('Sending...')).toBeInTheDocument()
    })

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Thank You!')).toBeInTheDocument()
      expect(screen.getByText(/Your message has been sent successfully/i)).toBeInTheDocument()
    }, { timeout: 2000 })
  })

  test('Budget and project type selects work correctly', async () => {
    const user = userEvent.setup()
    
    render(<ContactForm />)

    // Test budget range selection
    const budgetSelect = screen.getByText('Select budget range')
    expect(budgetSelect).toBeInTheDocument()

    // Test project type selection
    const projectTypeSelect = screen.getByText('Select project type')
    expect(projectTypeSelect).toBeInTheDocument()

    // The actual selection testing would require more complex mocking of Radix UI components
    // This test verifies the selects are rendered correctly
  })

  test('Contact information displays correctly', () => {
    render(<ContactForm />)

    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    expect(screen.getByText('hello@yoz.design')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('Response Time')).toBeInTheDocument()
    expect(screen.getByText('I respond within 24–48 hours')).toBeInTheDocument()
    expect(screen.getByText('Book a 15-min Intro Call')).toBeInTheDocument()
  })
})