// Import Next-SEO and it's configuration.
import { DefaultSeo } from 'next-seo';
import SEO from '../nextseo.config.js';

// Import TailwindCSS.
import '../styles/tailwind.css'

// Import Custom CSS for modifying things outside of Tailwind.
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