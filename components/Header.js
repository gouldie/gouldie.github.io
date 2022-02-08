import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import PropTypes from 'prop-types'
import { ClientOnly } from '@/components'

export default function Header() {
  return (
    <header className='my-container pt-8 pb-16'>
      <nav className='flex justify-center items-center'>
        <a href='#skip' className='sr-only'>
          Skip to content
        </a>

        <Link href='/'>
          <a>
            <img className='w-12' src='/logo.png' />
          </a>
        </Link>

        <div className='grow flex justify-center items-center'>
          <NavItem href='/' label='Home' />
          <NavItem href='/projects' label='Projects' />
          <NavItem href='/contact' label='Contact' />
        </div>

        <ClientOnly>
          <ThemeToggle />
        </ClientOnly>
      </nav>
    </header>
  )
}

function NavItem({ href, label }) {
  const router = useRouter()
  const isSelected = router.asPath === href

  return (
    <Link passHref href={href}>
      <a>
        <span
          className={`py-1.5 px-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 ${
            !isSelected ? 'text-gray-500' : ''
          }`}
        >
          {label}
        </span>
      </a>
    </Link>
  )
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

// https://codepen.io/PaulinaSurazynska/pen/bGVpBOb
function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'dark') {
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
        checked={theme === 'dark'}
      />
      <label htmlFor='checkbox' className='label'>
        <span className='moon'>&#9790;</span>
        <span className='sun'>&#9728;</span>
        <div className='ball' />
      </label>
    </div>
  )
}
