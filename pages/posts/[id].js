import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from '@/components'
import postsJSON from '@/posts.json'

function Post() {
  const router = useRouter()
  const { query, isReady } = router

  if (!isReady) {
    return null
  }

  const post = postsJSON[query.id]

  return (
    <Layout>
      <div className='mb-5' />
      <div className='mb-6'>
        <Link href='/posts'>← Back to posts</Link>
      </div>

      <div className='mb-14'>
        <h1 className='text-4xl mb-2'>{post.title}</h1>
        {post.subtitle && (
          <p className='text-lightsubtitle dark:text-darksubtitle'>{post.subtitle}</p>
        )}
      </div>

      {post.content.map(({ type, resource }, index) => (
        <>
          {type === 'header' && <h2 className='text-2xl mt-10 mb-6'>{resource}</h2>}
          {type === 'text' &&
            resource.map((r, i) => (
              <p key={i} className='mb-6'>
                {resource}
              </p>
            ))}
        </>
      ))}
    </Layout>
  )
}

export default Post
