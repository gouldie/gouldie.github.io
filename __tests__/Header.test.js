import { render, screen } from '@testing-library/react'
import { Header } from '@/components'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Header', () => {
  it('renders the nav links', () => {
    useRouter.mockReturnValue(() => ({
      asPath: '/',
      query: { product: 'coffee' }
    }))

    render(<Header />)

    const link = screen.getByRole('link', {
      name: /projects/i
    })

    expect(link).toBeInTheDocument()
  })
})
