import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

// Remove splash screen after React mounts
function Root() {
  useEffect(() => {
    const el = document.getElementById('splash-screen')
    if (!el) return
    // fade out
    el.style.opacity = '0'
    // remove after transition
    const timeout = setTimeout(() => {
      el.parentElement?.removeChild(el)
    }, 300)
    return () => clearTimeout(timeout)
  }, [])
  return <App />
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)