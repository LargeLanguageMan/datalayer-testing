import InsuranceMockup from '../insurance-mockup'

// This is now a server component - authentication is handled by middleware
// Middleware will redirect to home if not authenticated
export default function InsurancePortal() {
  return (
    <main>
      <InsuranceMockup />
    </main>
  )
}
