import Link from 'next/link'
import { Layout, SEO } from '@/components'
import { getPosts } from '@/utils/posts'

export default function Posts({ postMetadata }) {
  return (
    <Layout>
      <SEO url='/posts' title='Posts | Matthew Gould' />

      <h1 className='text-4xl mb-4'>Posts</h1>
      <hr className='w-24 mb-12 border-gray-400' />

      <div className='flex flex-wrap justify-between max-w-[95%] mx-auto'>
        {postMetadata.map(({ slug, title, subtitle, description }) => {
          return (
            <Link key={slug} href={`/posts/${slug}`} passHref className='w-full md:w-[48%]'>
              <article className='dark:bg-slate-700 bg-white rounded-lg mb-5 p-7 py-5 border-slate-600/50 border-[1px]'>
                <h2 className='font-bold text-lg mb-1'>{title}</h2>

                <h2 className='mb-4 text-lightsubtitle dark:text-darksubtitle'>{subtitle}</h2>

                <h2 className='text-base mb-4'>{description}</h2>

                <span className='font-medium'>Read more</span>
              </article>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const postMetadata = getPosts()

  return {
    props: { postMetadata }
  }
}
