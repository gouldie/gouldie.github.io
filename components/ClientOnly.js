import { useState, useEffect } from 'react'

export default function ClientOnly({ children, width = '40px' }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ width }} />
  }

  return children
}
