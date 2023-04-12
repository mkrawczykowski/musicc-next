import '@/styles/globals.css'
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import CookieConsent from '../components/structure/CookieConsent/CookieConsent'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <CookieConsent/>
    <Component {...pageProps} />
    </>
  )
  
}
