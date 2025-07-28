'use client'
import { FaMoon, FaSun } from 'react-icons/fa6'
import { BiSolidLock } from "react-icons/bi";
import { useEffect, useState   } from 'react'
import Link from 'next/link'

export const Navbar = () => {
  const [theme, setTheme] = useState(false)
  //true Dark
  //false Light

  const toggleTheme = () => {
    setTheme((prev) => !prev)
    localStorage.setItem('theme', theme ? 'light' : 'dark')
    console.log(localStorage.getItem('theme'))
    console.log(theme)
  }

  useEffect(() => {
    if (theme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setTheme(true)
    } else {
      setTheme(false)
    }
  }, [])

  return (
    <header className='h-18 max-w-7xl mx-auto flex items-center justify-between px-2'>
      <p className='flex items-center gap-0.5'>
        <BiSolidLock className='h-8 w-8 text-blue-600' />
        <Link href='/' className='font-bold lg:text-3xl text-2xl text-text-light dark:text-text-dark'>Lockora</Link>
      </p>
      <nav className='flex flex-row-reverse items-center justify-center  lg:gap-8 gap-6 text-text-light dark:text-text-dark'>
        <button onClick={toggleTheme} className='bg-blue-600 p-2 rounded-md' aria-label='Cambiar tema'>
          {theme ? (
            <FaMoon className='h-5 w-5 text-white cursor-pointer hover:scale-105 transition-all' />
          ) : (
            <FaSun className='h-5 w-5 text-white cursor-pointer hover:scale-105 transition-all' />
          )}
        </button>
        <Link href='/passwords' className='lg:text-lg md:text-sm text-[.7rem] font-semibold '>
          Contraseñas
        </Link>
        <Link href='/how' className='lg:text-lg md:text-sm text-[.7rem] font-semibold'>
          Como funciona
        </Link>
      </nav>
    </header>
  )
}
