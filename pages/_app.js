// pages/_app.js
import '../styles/globals.css'

// Import Google Font in JSX for Next.js 13+
// You can also do this via <link> in _document.js if you prefer

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
