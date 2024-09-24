"use client"

import { useState, useEffect } from 'react'
import InsuranceMockup from './insurance-mockup'
import LoginPage from './login-page'
import { useAuth } from './useAuth'
import { Button } from "@/components/ui/button"

export default function Home() {
  const { isAuthenticated, login, logout } = useAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // This effect will run after the initial render
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return <LoginPage onLogin={login} />
  }

  return (
    <main>
      <div className="flex justify-end p-4">
        <Button onClick={logout}>Logout</Button>
      </div>
      <InsuranceMockup />
    </main>
  )
}
