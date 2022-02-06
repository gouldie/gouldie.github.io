import { Layout } from '@/components'

export default function Home() {
  return (
    <Layout>
      <div className='mt-20 max-w-3xl'>
        <h1 className='text-4xl mb-4'>Hi, I'm Matt.</h1>
        <h1 className='text-4xl mb-4'>
          I’m a full-stack software engineer specialising in React/Node, and I create interactive
          user experiences on the web.
        </h1>
        <h1 className='font-light'>
          Feel free to take a look at my recent projects, or connect with me using the links below.
        </h1>
      </div>
    </Layout>
  )
}
