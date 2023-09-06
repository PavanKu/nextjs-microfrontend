import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="inline-flex items-center space-x-4 rounded bg-secondary-50 px-4 py-2 text-sm font-medium">
          <li className="inline-flex items-center">
            <a href={"/react"} className="text-secondary-500 hover:text-secondary-600">React-Home</a>
          </li>
          <li className="inline-flex items-center space-x-4">
            <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
            </svg>
            <a href={"/react/dashboard"} className="text-secondary-500 hover:text-secondary-600">React-Dashboard</a>
          </li>
          <li className="inline-flex items-center space-x-4" aria-current="page">
            <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
            </svg>
            <Link className="text-secondary-700 hover:text-secondary-700" href={"/react/404"}>React-404</Link>
          </li>
        </ol>
      </nav>

      <Component {...pageProps} />
    </>
  )
}
