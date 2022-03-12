import { Layout } from '@/components'

const projects = [
  {
    name: 'Breaking Free Group',
    image: 'bfg.png',
    description:
      'Customer-facing website with a CMS for news posts, latest research, and a contact form.',
    tech: ['Node.js', 'KeystoneJS', 'Express', 'Pug', 'SASS'],
    url: 'http://breakingfreegroup.com'
  },
  {
    name: 'Breaking Free Online',
    image: 'bfo.png',
    description: 'Evidence-based recovery support programme for alcohol & drug addictions.',
    tech: ['React', 'SASS', 'Node.js', 'Express', 'MongoDB'],
    url: 'https://breakingfreeonline.com'
  },
  {
    name: 'Reddit Clone',
    image: 'reddit.png',
    description:
      'A clone of reddit in the style of Vuetify. Create, read, update, and delete posts. Vote and comment.',
    tech: ['VueJS', 'SASS', 'NodeJS', 'Express', 'MongoDB', 'JWT'],
    url: 'https://redditmg.herokuapp.com'
  }
]

export default function Projects() {
  return (
    <Layout>
      <h1 className='text-4xl mb-4'>Projects</h1>

      <hr className='w-24 mb-12 border-gray-400' />

      <p className='mb-8'>
        Here are some of the latest projects I've worked on, or currently working on.
      </p>

      <div className='flex justify-center flex-wrap'>
        {projects.map(project => (
          <div
            key={project.name}
            className='flex flex-col max-w-xs bg-white m-5 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'
          >
            <a href={project.url} target='_blank' rel='noreferrer noopener'>
              <img className='rounded-t-lg' src={project.image} alt={`go to ${project.name}`} />
            </a>
            <div className='p-5 flex flex-col justify-between items-start grow'>
              <div>
                <a href={project.url} target='_blank' rel='noreferrer noopener'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {project.name}
                  </h5>
                </a>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                  {project.description}
                </p>

                <div className='flex flex-wrap mb-2'>
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className='bg-gray-300 text-gray-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.url}
                rel='noreferrer noopener'
                target='_blank'
                className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Go to site
                <svg
                  className='ml-2 -mr-1 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
