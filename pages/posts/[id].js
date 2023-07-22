import Link from 'next/link'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { remarkCodeHike } from '@code-hike/mdx'
import { CH } from '@code-hike/mdx/components'
import theme from '@/themes/night-owl'
import { Layout, PostImage, CodeEditors, SEO } from '@/components'
import { getFileData, getPaths } from '@/utils/posts'

import '@code-hike/mdx/dist/index.css'

const components = {
  CH,
  PostImage,
  ...CodeEditors,
  h1: ({ children }) => <h1 className='text-4xl mb-2'>{children}</h1>,
  h2: ({ children }) => (
    <h2 className='text-lightsubtitle dark:text-darksubtitle mb-12'>{children}</h2>
  ),
  h3: ({ children }) => <h1 className='text-2xl mt-10 mb-6 font-semibold'>{children}</h1>,
  p: ({ children }) => <p className='mb-6'>{children}</p>,
  ul: ({ children }) => <ul className='mb-6 list-disc'>{children}</ul>,
  li: ({ children }) => <li className='mb-2'>{children}</li>
}

const Post = ({ mdxSource, frontMatter }) => {
  return (
    <Layout>
      <SEO
        url={`/posts/${frontMatter.slug}`}
        title={frontMatter.title}
        description={frontMatter.description}
      />

      <div className='max-w-[50rem] mx-auto'>
        <div className='mb-6'>
          <Link href='/posts' className='unstyled-a'>
            ← Back to posts
          </Link>
        </div>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </Layout>
  )
}

export default Post

export const getStaticProps = async context => {
  const { id } = context.params

  const source = getFileData(id)
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [[remarkCodeHike, { autoImport: false, theme }]],
      useDynamicImport: true
    }
  })

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
