import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import PropTypes from 'prop-types'
import { ClientOnly } from '@/components'

const imagesToPreload = ['bfo', 'bfg', 'reddit']

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { resolvedTheme } = useTheme()

  const closeMobileMenu = () => {
    setShowMobileMenu(false)
  }

  return (
    <header className='my-container pt-8 pb-16'>
      <nav className='border-gray-200 px-2 sm:px-4 py-2.5 rounded'>
        <div className='flex flex-wrap justify-between items-center mx-auto'>
          <Link href='/'>
            <div className='w-20 h-8'>
              <ClientOnly>
                <img
                  className='w-full'
                  src={`/logo-${resolvedTheme === 'dark' ? 'dark' : 'light'}.png`}
                  alt=''
                />
              </ClientOnly>
            </div>
          </Link>

          <div className='md:hidden flex items-center'>
            <ClientOnly>
              <ThemeToggle />
            </ClientOnly>

            <button
              data-collapse-toggle='mobile-menu-4'
              type='button'
              className='inline-flex items-center ml-5 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='mobile-menu-4'
              aria-expanded='false'
              onClick={() => setShowMobileMenu(currentShowMobileMenu => !currentShowMobileMenu)}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <svg
                className='hidden w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`${
              !showMobileMenu ? 'hidden' : ''
            } justify-between items-center w-full md:flex md:w-auto`}
            id='mobile-menu-4'
          >
            <div className='flex flex-col mt-6 md:mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium'>
              <NavItem href='/' label='Home' onClick={closeMobileMenu} />
              <NavItem href='/projects' label='Projects' onClick={closeMobileMenu} />
              <NavItem href='/posts' label='Posts' onClick={closeMobileMenu} />
              <NavItem href='/contact' label='Contact' onClick={closeMobileMenu} />
            </div>
          </div>

          <div className='hidden md:block'>
            <ClientOnly>
              <ThemeToggle />
            </ClientOnly>
          </div>
        </div>
      </nav>
    </header>
  )
}

function NavItem({ href, label, onClick }) {
  const router = useRouter()
  // viewing a post should still highlight `Posts`
  const isSelected = href === '/' ? router.asPath === href : router.asPath?.includes(href)

  const selectedClasses =
    'block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
  const notSelectedClasses =
    'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseOver={() => {
        if (label === 'Projects') {
          imagesToPreload?.forEach(src => {
            const img = new Image()
            img.src = `/${src}.png`
          })
        }
      }}
    >
      <span className={isSelected ? selectedClasses : notSelectedClasses}>{label}</span>
    </Link>
  )
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

// https://codepen.io/PaulinaSurazynska/pen/bGVpBOb
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
      return
    }

    setTheme('dark')
  }

  return (
    <div>
      <input
        type='checkbox'
        className='checkbox'
        id='checkbox'
        onChange={toggleTheme}
        checked={resolvedTheme === 'dark'}
        aria-label={`Activate ${resolvedTheme === 'dark' ? 'dark' : 'light'} mode`}
      />
      <label htmlFor='checkbox' className='label cursor-pointer' aria-label='test'>
        <img className='sun' src='/sun.svg' alt='' />
        <img className='moon' src='/moon.svg' alt='' />
        <div className='ball' />
      </label>
    </div>
  )
}
