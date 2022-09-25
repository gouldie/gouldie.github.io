import '@/styles/global.css'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const is404 = router.route === '/_error'

  return (
    <ThemeProvider attribute='class'>
      {!router.pathname.includes('quizapp') && !is404 && <Header />}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object
}

export default MyApp
