'use client'
import { use, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { PasswordsContext } from '@/app/context/PasswordsContext'

export const SecretKey = ({ setViewSecretKey }) => {
  const [secretKeyView, setSecretKeyView] = useState('')
  const [viewKey, setViewKey] = useState(false)
  const { dispatch } = use(PasswordsContext)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'setSecretKey', payload: secretKeyView })
    setViewSecretKey(true)
  }

  return (
    <section className='h-screen w-full dark:bg-blue-900/1 bg-neutral-900/70 backdrop-blur-sm absolute inset-0 grid place-items-center'>
      <div className='max-w-md w-full dark:bg-gray-800 bg-white flex flex-col gap-2 rounded-lg p-6'>
        <p className='text-2xl font-bold dark:text-white'>Clave Secreta</p>
        <span className='text-sm dark:text-gray-300 text-gray-600'>
          La clave secreta es la que usaremos para cifrar tus contraseñas, sin
          ella no podrás acceder a tus contraseñas.
        </span>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className='relative flex items-center'>
            <input
              type={viewKey ? 'text' : 'password'}
              onChange={e => setSecretKeyView(e.target.value)}
              placeholder='Clave Secreta'
              className='p-2 w-full px-5 md:pr-12 pl-10 md:pl-4 dark:border-gray-600 dark:bg-gray-700 dark:text-white border border-gray-300 rounded'
              minLength={8}
              required
            />
            <button
              aria-label='Mostrar/ocultar clave secreta'
              type='button'
              onClick={() => setViewKey(!viewKey)}
              className='absolute md:mr-8 ml-3 md:left-92 md:ml-0 cursor-pointer hover:scale-105 transition-all'
            >
              {viewKey ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <button
            type='submit'
            className='font-semibold dark:bg-blue-700 dark:text-gray-300 bg-blue-600 text-white p-2 rounded cursor-pointer hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors'
          >
            Guardar
          </button>
        </form>
      </div>
    </section>
  )
}
