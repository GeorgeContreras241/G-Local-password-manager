'use client'
import { ThemeContext } from '@/app/context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa6'
import { use, useEffect } from 'react'
import Link from 'next/link'

export const Navbar = () => {
  const { theme, toggleTheme } = use(ThemeContext)

  useEffect(() => {
    if (theme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <header
      className='w-full h-14 flex md:justify-between justify-center items-center bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-200 shadow-lg dark:shadow-none
        border border-gray-300 dark:border-gray-700 xl:px-60 lg:px-46  md:px-12  px-6'
    >
      <p className='text-xl font-bold hidden md:block'>Gestor de Contraseñas Local</p>
      <nav className='flex gap-4 flex-row text-white dark:text-black '>
        <button
          onClick={toggleTheme}
          className='cursor-pointer text-gray-900 dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-300 transition-colors'
        >
          {theme ? (
            <FaMoon className='h-5 w-5 cursor-pointer hover:scale-105 transition-all' />
          ) : (
            <FaSun className='h-5 w-5 cursor-pointer hover:scale-105 transition-all' />
          )}
        </button>
        <Link
          href='/'
className='text-[0.9rem] bg-gray-900 dark:bg-gray-700 px-4 py-1 hover:bg-gray-800 dark:hover:bg-gray-600 rounded text-gray-200 dark:text-gray-200'
        >
          Inicio
        </Link>
        <Link
          href='/passwords'
className='text-[0.9rem] bg-gray-900 dark:bg-gray-700 px-4 py-1 hover:bg-gray-800 dark:hover:bg-gray-600 rounded text-gray-200 dark:text-gray-200'
        >
          Tus Contraseñas
        </Link>
        <Link
          href='/how'
className='text-[0.9rem] bg-gray-900 dark:bg-gray-700 px-4 py-1 hover:bg-gray-800 dark:hover:bg-gray-600 rounded text-gray-200 dark:text-gray-200'
        >
          ¡Como funciona!
        </Link>
      </nav>
    </header>
  )
}
