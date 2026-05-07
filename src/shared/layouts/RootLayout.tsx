import { Outlet } from 'react-router-dom'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'

export function RootLayout() {
  return (
    <main className="site-shell">
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

