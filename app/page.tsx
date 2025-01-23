"use client"

import { useState, useEffect } from 'react'
import LoginPage from './login-page'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This effect will run after the initial render
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!document.cookie.includes('session=authenticated-sessions')) {
    return <LoginPage />
  }

  return (
    <main>
      <div className="flex justify-end p-4">
      </div>
    </main>
  )
}
