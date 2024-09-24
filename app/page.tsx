"use client"

import { useState, useEffect } from 'react'
import LoginPage from './login-page'
import { useAuth } from './useAuth'

export default function Home() {
  const { isAuthenticated } = useAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This effect will run after the initial render
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
return <LoginPage />; 
  }

  return (
    <main>
      <div className="flex justify-end p-4">
      </div>
    </main>
  )
}
