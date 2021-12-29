import { DefaultSeo } from 'next-seo';
import SEO from '../nextseo.config.js';
import '../styles/style.css'

function App({ Component, pageProps }) {
  return (
   <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
   </>
  )
}

export default App