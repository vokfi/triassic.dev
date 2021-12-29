import '../styles/style.css'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
   <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta property="og:site_name" content="Triassic's Website" />
      <meta property="og:title" content="Triassic" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://triassic.dev" />
      <meta property="og:image" content="/assets/img/triassic.png" />
      <meta property="og:description" content="Hello, I am Daniel, also known as Triassic, I am a front-end web developer and designer and this website is all about me!" />
      <meta name="description" content="Hello, I am Daniel, also known as Triassic, I am a front-end web developer and designer and this website is all about me!" />
      <meta name="theme-color" content="#74b3fa" />

      <title>Triassic</title>
    </Head>
    <Component {...pageProps} />
   </>
  )
}

export default App