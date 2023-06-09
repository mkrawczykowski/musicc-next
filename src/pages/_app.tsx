import '@/styles/globals.scss'
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import type {AppProps} from 'next/app';
import Layout from '../components/structure/Layout/Layout';
import CookieConsent from '../components/structure/CookieConsent/CookieConsent';
import Store from '../components/structure/Store/Store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Layout>
        <CookieConsent/>
        <Component {...pageProps} />  
      </Layout>
    </Store>
  )
  
}
