import { useTheme } from 'next-themes'
import { SEO, Layout, ClientOnly } from '@/components'

export default function Home() {
  const { resolvedTheme } = useTheme()

  return (
    <Layout>
      <SEO url='/' />

      <div className='mt-8 sm:mt-14 md:mt-28 max-w-4xl'>
        <h1 className='text-4xl mb-4'>Hi, I'm Matt.</h1>
        <h1 className='text-4xl mb-4 leading-tight'>
          I’m a full-stack software engineer specialising in React/Node, and I create interactive
          user experiences on the web.
        </h1>
        <p className='font-light mb-4'>
          Feel free to take a look at my recent projects, or connect with me using the links below.
        </p>

        <ClientOnly>
          <div className='flex'>
            <a
              className='mr-3'
              href='https://www.linkedin.com/in/matthew-gould/'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img
                className='w-8'
                src={`/linkedin-${resolvedTheme === 'dark' ? 'dark' : 'light'}.png`}
                alt='view my linkedin profile'
              />
            </a>

            <a href='https://github.com/gouldie' target='_blank' rel='noreferrer noopener'>
              <img
                className='w-8'
                src={`/github-${resolvedTheme === 'dark' ? 'dark' : 'light'}.png`}
                alt='view my github profile'
              />
            </a>
          </div>
        </ClientOnly>
      </div>
    </Layout>
  )
}
