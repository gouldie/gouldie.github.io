import { Html, Head, Main, NextScript } from 'next/document'
import { getSandpackCssText } from '@codesandbox/sandpack-react'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.16.2/styles/night-owl.min.css'
          rel='stylesheet'
        />

        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#445384' />
        <meta name='msapplication-TileColor' content='#2b5797' />
        <meta name='theme-color' content='#ffffff' />

        <style
          dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
          id='sandpack'
          key='sandpack-css'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
