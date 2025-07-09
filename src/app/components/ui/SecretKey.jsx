'use client'
import { use, useState } from 'react'
import { PasswordsContext } from '@/app/context/PasswordsContext'

export const SecretKey = ({setViewSecretKey}) => {
  const [secretKeyView, setSecretKeyView] = useState('')
  const { dispatch } = use(PasswordsContext)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'setSecretKey', payload: secretKeyView })
    setViewSecretKey(true)
  }

  return (
    <section className='h-screen w-full dark:bg-neutral-900/70 bg-neutral-800/70 backdrop-blur-sm absolute inset-0 grid place-items-center'>
      <div className='max-w-md w-full dark:bg-gray-800 bg-white flex flex-col gap-2 rounded-lg p-6'>
        <p className='text-2xl font-bold dark:text-white'>Clave Secreta</p>
        <span className='text-sm dark:text-gray-300 text-gray-600'>
          La clave secreta es la que usaremos para cifrar tus contraseñas, sin
          ella no podrás acceder a tus contraseñas.
        </span>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={e => setSecretKeyView(e.target.value)}
            placeholder='Clave Secreta'
            className='p-2 px-5 dark:border-gray-600 dark:bg-gray-700 dark:text-white border border-gray-300 rounded'
            minLength={8}
            required
          />
          <button
            type='submit'
            className='dark:bg-neutral-900 dark:text-gray-300 bg-neutral-800 text-white p-2 rounded cursor-pointer hover:bg-neutral-700 dark:hover:bg-neutral-800 transition-colors'
          >
            Guardar
          </button>
        </form>
      </div>
    </section>
  )
}
