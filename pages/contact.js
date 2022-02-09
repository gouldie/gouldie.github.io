import { useState } from 'react'
import { Layout } from '@/components'

const initialState = { name: '', email: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState({ ...initialState })
  const [submitting, setSubmitting] = useState()
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState()

  const onChange = (field, value) => {
    setError(null)
    setSuccess(false)

    setValues(currentValues => ({
      ...currentValues,
      [field]: value
    }))
  }

  const onSubmit = async e => {
    e.preventDefault()

    const { name, email, message } = values

    if (!name || !email || !message) {
      setError('Please complete all fields')
      return
    }

    setSubmitting(true)

    const response = await fetch('https://formspree.io/f/xayveleo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    setSubmitting(false)

    response
      .json()
      .then(() => {
        setSuccess(true)
        setValues({ ...initialState })
      })
      .catch(() => {
        setError('Failed to send message. Please try again')
      })
  }

  return (
    <Layout>
      <h1 className='text-4xl mb-4'>Contact</h1>

      <hr className='w-24 mb-12 border-gray-400' />

      <p className='mb-8'>
        Want to get in touch, talk about a project or just say hi? Send me a message directly here.
      </p>

      <form className='max-w-lg mx-auto' onSubmit={onSubmit}>
        <div className='mb-4'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your name
          </label>
          <input
            type='text'
            id='name'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Marnie'
            value={values.name}
            onChange={e => onChange('name', e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your email
          </label>
          <input
            type='email'
            id='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='marnie@gmail.com'
            value={values.email}
            onChange={e => onChange('email', e.target.value)}
          />
        </div>

        <div className='mb-4'>
          <label
            htmlFor='message'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
          >
            Your message
          </label>
          <textarea
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            name='message'
            type='text'
            placeholder="Let's connect!"
            value={values.message}
            onChange={e => onChange('message', e.target.value)}
          ></textarea>
        </div>

        {error ? (
          <p className='text-red-500 mb-3' role='alert'>
            {error}
          </p>
        ) : success ? (
          <p className='text-green-600 mb-3' role='alert'>
            Your message has been sent! 🎉
          </p>
        ) : null}

        <div className='flex justify-end'>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            {submitting ? 'Submitting..' : 'Submit'}
          </button>
        </div>
      </form>
    </Layout>
  )
}
