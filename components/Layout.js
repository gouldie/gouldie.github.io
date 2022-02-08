import PropTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Layout({ children, ...customMeta }) {
  const router = useRouter()
  const meta = {
    title: 'Full-Stack Web Developer Portfolio, React/Node.js specialist',
    description: `I’m a full-stack software engineer specialising in React/Node and I create interactive user experiences on the web.`,
    image: 'todo',
    type: 'website',
    ...customMeta
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:url' content={`https://gouldie.github.io${router.asPath}`} />
        <link rel='canonical' href={`https://gouldie.github.io${router.asPath}`} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Matthew Gould' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        {/* <meta property='og:image' content={meta.image} /> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@gouldieweb' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        {/* <meta name='twitter:image' content={meta.image} /> */}
      </Head>
      <main id='skip' className='my-container pb-8'>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
