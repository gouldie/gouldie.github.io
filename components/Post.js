import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Layout } from '@/components'
import { MDXProvider } from '@mdx-js/react'

const components = {
  h1: ({ children }) => <h1 className='text-4xl mb-2'>{children}</h1>,
  h2: ({ children }) => (
    <h2 className='text-lightsubtitle dark:text-darksubtitle mb-12'>{children}</h2>
  ),
  h3: ({ children }) => <h1 className='text-2xl mt-10 mb-6 font-semibold'>{children}</h1>,
  p: ({ children }) => <p className='mb-6'>{children}</p>,
  li: ({ children }) => <li className='list-disc'>{children}</li>
}

function Post({ children }) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <div className='mb-6'>
          <Link href='/posts'>← Back to posts</Link>
        </div>

        {children}
      </Layout>
    </MDXProvider>
  )
}

export default Post
