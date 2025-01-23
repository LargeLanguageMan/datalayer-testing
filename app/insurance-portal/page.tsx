"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import InsuranceMockup from '../insurance-mockup'

export default function InsurancePortal() {
  const router = useRouter()

  useEffect(() => {
    // Check if the authentication cookie exists
    if (!document.cookie.includes('session=authenticated-sessions')) {
      router.push('/') // Redirect to home page if not authenticated
    }
  }, [router])

  return (
    <main>
      <InsuranceMockup />
    </main>
  )
}
