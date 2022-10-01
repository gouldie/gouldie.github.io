import { useState } from 'react'
import Link from 'next/link'
import { Layout } from '@/components'
import postsJSON from '@/posts.json'

const initialState = { name: '', email: '', message: '' }

export default function Posts() {
  return (
    <Layout>
      <h1 className='text-4xl mb-4'>Posts</h1>
      <hr className='w-24 mb-12 border-gray-400' />

      <div className='flex flex-wrap justify-between'>
        {Object.entries(postsJSON).map(([slug, post]) => {
          return (
            <article
              key={slug}
              className='dark:bg-slate-700 bg-white rounded-lg w-full md:w-[48%] mb-5 p-7 py-5'
            >
              <Link href={`/posts/${slug}`} passHref>
                <a className='block'>
                  <h2 className='font-bold text-lg mb-1'>{post.title}</h2>

                  {post.subtitle && (
                    <h2 className='mb-4 text-lightsubtitle dark:text-darksubtitle'>
                      {post.subtitle}
                    </h2>
                  )}

                  <h2 className='text-base mb-4'>{post.description}</h2>

                  <span className='font-bold'>Read more</span>
                </a>
              </Link>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}
