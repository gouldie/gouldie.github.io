import Head from 'next/head'

function SEO({
  url,
  title = 'Matthew Gould',
  description = 'I’m a full-stack software engineer specialising in React/Node and I create interactive user experiences on the web.',
  image = '/og.png',
  keywords = ''
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta content={description} name='description' />
      <meta property='og:url' content={`https://matthewgould.dev${url}`} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='Matthew Gould' />
      <meta property='og:description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:image' content={image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@gouldieweb' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Head>
  )
}

export default SEO
