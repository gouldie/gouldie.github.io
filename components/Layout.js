import PropTypes from 'prop-types'

export default function Layout({ children, ...customMeta }) {
  return (
    <main id='skip' className='my-container pb-8'>
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
