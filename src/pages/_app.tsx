import '@/styles/globals.css'
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import CookieConsent from '../components/structure/CookieConsent/CookieConsent'
import type { AppProps } from 'next/app'
import GTM from '../components/structure/GTM/GTM'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <CookieConsent/>
    <Component {...pageProps} />
    </>
  )
  
}
