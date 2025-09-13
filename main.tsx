import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

// Remove splash screen after React mounts
function Root() {
  useEffect(() => {
    const el = document.getElementById('splash-screen')
    if (!el) return

    // ⏳ keep splash for at least 2000ms (2 seconds)
    const showTime = 2000

    const delay = setTimeout(() => {
      el.style.opacity = '0'
      // remove after transition (300ms)
      const fadeOut = setTimeout(() => {
        el.parentElement?.removeChild(el)
      }, 300)
      return () => clearTimeout(fadeOut)
    }, showTime)

    return () => clearTimeout(delay)
  }, [])

  return <App />
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
