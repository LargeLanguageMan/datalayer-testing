import LoginPage from './login-page'

// This is now a server component - authentication is handled by middleware
export default function Home() {
  return <LoginPage />
}
