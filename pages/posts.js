import Link from 'next/link'
import { Layout } from '@/components'
import { getPosts } from '@/utils/posts'

export default function Posts({ postMetadata }) {
  return (
    <Layout>
      <h1 className='text-4xl mb-4'>Posts</h1>
      <hr className='w-24 mb-12 border-gray-400' />

      <div className='flex flex-wrap justify-between'>
        {postMetadata.map(({ slug, title, subtitle, description }) => {
          return (
            <article
              key={slug}
              className='dark:bg-slate-700 bg-white rounded-lg w-full md:w-[48%] mb-5 p-7 py-5'
            >
              <Link href={`/posts/${slug}`} passHref className='block'>
                <h2 className='font-bold text-lg mb-1'>{title}</h2>

                <h2 className='mb-4 text-lightsubtitle dark:text-darksubtitle'>{subtitle}</h2>

                <h2 className='text-base mb-4'>{description}</h2>

                <span className='font-bold'>Read more</span>
              </Link>
            </article>
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
