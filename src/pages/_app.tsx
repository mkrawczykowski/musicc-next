import '@/styles/globals.css'
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import type {AppProps} from 'next/app';
import CookieConsent from '../components/structure/CookieConsent/CookieConsent'
import Store from '../components/structure/Store/Store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <CookieConsent/>
      <Component {...pageProps} />
    </Store>
  )
  
}
