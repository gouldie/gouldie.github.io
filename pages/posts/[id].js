import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Link from 'next/link'
import { Layout, PostImage } from '@/components'
import { getFileData, getPaths } from '@/utils/posts'
import Head from 'next/head'

const components = {
  PostImage,
  h1: ({ children }) => <h1 className='text-4xl mb-2'>{children}</h1>,
  h2: ({ children }) => (
    <h2 className='text-lightsubtitle dark:text-darksubtitle mb-12'>{children}</h2>
  ),
  h3: ({ children }) => <h1 className='text-2xl mt-10 mb-6 font-semibold'>{children}</h1>,
  p: ({ children }) => <p className='mb-6'>{children}</p>,
  li: ({ children }) => <li className='list-disc'>{children}</li>
}

const Post = ({ mdxSource, frontMatter }) => {
  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name='description' content={frontMatter.description} />
        <meta name='og:description' content={frontMatter.description} />
        <meta name='twitter:description' content={frontMatter.description} />
      </Head>
      <div className='mb-6'>
        <Link href='/posts'>← Back to posts</Link>
      </div>

      <MDXRemote {...mdxSource} components={components} />
    </Layout>
  )
}

export default Post

export const getStaticProps = async context => {
  const { id } = context.params

  const source = getFileData(id)
  const { content, data } = matter(source)
  const mdxSource = await serialize(content)

  return {
    props: {
      mdxSource,
      frontMatter: data
    }
  }
}

export const getStaticPaths = () => {
  const paths = getPaths()

  return {
    paths,
    fallback: false
  }
}
