import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import { Roboto } from '@next/font/google'
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { pathname } = router
  let showNavbar = true

  if (pathname === '/login' || pathname === '/signup' || pathname === '/forgot-password') {
    showNavbar = false
  }

  return (
    <SessionProvider session={pageProps.session}>
      <main className={roboto.className}>
        {showNavbar && <Navbar />}
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}
