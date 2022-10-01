import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from '@/components'
import postsJSON from '@/posts.json'

function Post() {
  const router = useRouter()
  const { post } = router.query

  return (
    <Layout>
      <h1 className='text-4xl mb-4'>Post</h1>
      <hr className='w-24 mb-12 border-gray-400' />
    </Layout>
  )
}

export default Post
