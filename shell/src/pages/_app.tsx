import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import a from 'next/a'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <a href={"/react"}>React Home</a>
        <a href={"/react/dashboard"}>React Dashboard</a>
        <a href={"/react/404"}>React 404</a>
      </nav>
      <Component {...pageProps} />
    </>
  )
}
