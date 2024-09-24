"use client"

import { useState, useEffect } from 'react'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if the user is authenticated (e.g., by checking a token in localStorage)
    const token = localStorage.getItem('authToken')
    setIsAuthenticated(!!token)
  }, [])

  const login = (username: string, password: string) => {
    if (username === 'tal2024' && password === 'monks2024') {
      localStorage.setItem('authToken', 'dummy_token')
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    setIsAuthenticated(false)
  }

  return { isAuthenticated, login, logout }
}
