import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className='my-container pt-8'>
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

        <button
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
        >
          Toggle theme
        </button>
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
          className={`py-1.5 px-2.5 rounded-lg hover:bg-gray-800 ${
            !isSelected ? 'text-gray-500' : ''
          }`}
        >
          {label}
        </span>
      </a>
    </Link>
  )
}
