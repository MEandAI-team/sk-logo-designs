import React, { useState } from 'react'
import { Skeleton } from "../ui/skeleton"

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

// Shared image component with:
// - Lazy loading by default (loading="lazy")
// - Skeleton placeholder shown until the image loads
// - Error fallback graphic when image fails to load
export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const handleError = () => setDidError(true)
  const handleLoad = () => setLoaded(true)

  const { src, alt, style, className, loading, decoding, ...rest } = props

  // Wrapper ensures the skeleton overlays correctly without changing layout
  return (
    <div className={`relative w-full h-full ${didError ? 'bg-gray-100' : ''}`} style={style}>
      {!didError && !loaded && (
        <Skeleton aria-hidden className="absolute inset-0 w-full h-full" />
      )}

      {didError ? (
        <div className={`flex items-center justify-center w-full h-full text-center align-middle`}>
          <img
            src={ERROR_IMG_SRC}
            alt="Error loading image"
            data-original-url={src}
          />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={className}
          // Default to lazy + async if not provided by caller
          loading={loading ?? 'lazy'}
          decoding={decoding ?? 'async'}
          onLoad={handleLoad}
          onError={handleError}
          {...rest}
        />
      )}
    </div>
  )
}
