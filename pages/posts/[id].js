import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from '@/components'
import postsJSON from '@/posts.json'
import { Stock } from 'posts-code'

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
          {type === 'header' && <h2 className='text-2xl mt-10 mb-6 font-semibold'>{resource}</h2>}
          {type === 'image' && (
            <figure className='text-center pt-4 pb-6'>
              <img
                className={`inline w-[${resource.maxWidth}] max-w-[90%]`}
                src={resource.src}
                alt={resource.alt}
              />
              <figcaption className='text-xs pt-2'>Image: {resource.alt}</figcaption>
            </figure>
          )}
          {type === 'text' &&
            resource.map((element, i) =>
              typeof element === 'string' ? (
                <p key={i} className='mb-6'>
                  {element}
                </p>
              ) : (
                <ul>
                  {element.map((listItem, i2) => (
                    <li key={i2}>{listItem}</li>
                  ))}
                </ul>
              )
            )}
        </>
      ))}

      {/* <Stock /> */}
    </Layout>
  )
}

export default Post
