import '@/styles/global.css'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object
}

export default MyApp
