import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ImageWithFallback } from '../../components/figma/ImageWithFallback'
import { expect, test, describe, vi } from 'vitest'

// Mock the Skeleton component
vi.mock('../../components/ui/skeleton', () => ({
  Skeleton: ({ className, ...props }: any) => (
    <div data-testid="skeleton" className={className} {...props} />
  )
}))

describe('ImageWithFallback', () => {
  test('ImageWithFallback shows skeleton while loading', () => {
    render(
      <ImageWithFallback
        src="test-image.jpg"
        alt="Test image"
        data-testid="test-image"
      />
    )

    // Skeleton should be visible initially
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
    
    // Image should be present but not loaded yet
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'test-image.jpg')
    expect(image).toHaveAttribute('alt', 'Test image')
  })

  test('ImageWithFallback hides skeleton after image loads', async () => {
    render(
      <ImageWithFallback
        src="test-image.jpg"
        alt="Test image"
        data-testid="test-image"
      />
    )

    const image = screen.getByRole('img')
    
    // Simulate image load
    fireEvent.load(image)

    await waitFor(() => {
      expect(screen.queryByTestId('skeleton')).not.toBeInTheDocument()
    })
  })

  test('ImageWithFallback shows error fallback on image error', async () => {
    render(
      <ImageWithFallback
        src="broken-image.jpg"
        alt="Test image"
        data-testid="test-image"
      />
    )

    const image = screen.getByRole('img')
    
    // Simulate image error
    fireEvent.error(image)

    await waitFor(() => {
      expect(screen.queryByTestId('skeleton')).not.toBeInTheDocument()
      // Error image should be displayed
      const errorImage = screen.getByAltText('Error loading image')
      expect(errorImage).toBeInTheDocument()
      expect(errorImage).toHaveAttribute('data-original-url', 'broken-image.jpg')
    })
  })

  test('ImageWithFallback applies correct loading attributes', () => {
    render(
      <ImageWithFallback
        src="test-image.jpg"
        alt="Test image"
      />
    )

    const image = screen.getByRole('img')
    
    // Should have default loading and decoding attributes
    expect(image).toHaveAttribute('loading', 'lazy')
    expect(image).toHaveAttribute('decoding', 'async')
  })

  test('ImageWithFallback allows custom loading attributes', () => {
    render(
      <ImageWithFallback
        src="test-image.jpg"
        alt="Test image"
        loading="eager"
        decoding="sync"
      />
    )

    const image = screen.getByRole('img')
    
    // Should use custom loading and decoding attributes
    expect(image).toHaveAttribute('loading', 'eager')
    expect(image).toHaveAttribute('decoding', 'sync')
  })

  test('ImageWithFallback passes through additional props', () => {
    render(
      <ImageWithFallback
        src="test-image.jpg"
        alt="Test image"
        className="custom-class"
        width="100"
        height="100"
        data-custom="custom-value"
      />
    )

    const image = screen.getByRole('img')
    
    expect(image).toHaveClass('custom-class')
    expect(image).toHaveAttribute('width', '100')
    expect(image).toHaveAttribute('height', '100')
    expect(image).toHaveAttribute('data-custom', 'custom-value')
  })

  test('ImageWithFallback wrapper applies error styling', async () => {
    const { container } = render(
      <ImageWithFallback
        src="broken-image.jpg"
        alt="Test image"
        style={{ width: '200px', height: '200px' }}
      />
    )

    const image = screen.getByRole('img')
    
    // Simulate image error
    fireEvent.error(image)

    await waitFor(() => {
      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass('bg-gray-100')
    })
  })
})