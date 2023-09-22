// eslint-disable-next-line camelcase
import { Fira_Sans } from '@next/font/google'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components'
import { useRouter } from 'next/router'

import '@/styles/global.css'

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700']
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  const is404 = router.route === '/_error'

  return (
    <ThemeProvider attribute='class'>
      <div className={`${firaSans.className} bg`}>
        {!router.pathname.includes('quizapp') && !is404 && <Header />}
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object
}

export default MyApp
