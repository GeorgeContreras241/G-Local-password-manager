"use client"
import { useState } from 'react'
import { FaCopy, FaRandom } from 'react-icons/fa'

export const PasswordGenerator = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
      .then(() => {
        // Copied successfully
      })
      .catch(err => {
        console.error('Error copying text:', err)
      })
  }

  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let chars = ''
    if (includeLowercase) chars += lowercase
    if (includeUppercase) chars += uppercase
    if (includeNumbers) chars += numbers
    if (includeSymbols) chars += symbols

    if (!chars) return

    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setPassword(result)
  }

  return (
    <div className='max-w-md h-full border border-gray-300 dark:border-gray-700 mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-none p-6 dark:ring-1 dark:ring-gray-700/50'>
      <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4'>Generador de Contraseñas</h2>
      
      <div className='space-y-4'>
        <div className='flex items-center gap-4'>
          <input
            type='number'
            min='4'
            max='32'
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className='w-24 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50'
            placeholder='Longitud'
          />
          <button
            onClick={generatePassword}
            className='px-4 py-2 bg-neutral-800 text-white rounded-lg  transition-colors'
          >
            <FaRandom className='inline-block mr-2' /> Generar
          </button>
          <button
            onClick={copyToClipboard}
            className='px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors'
          >
            <FaCopy className='inline-block mr-2' /> Copiar
          </button>
        </div>

        <div className='flex flex-row flex-wrap gap-4 dark:bg-gray-800 dark:ring-1 dark:ring-gray-700/50'>
          <div className='flex items-center gap-4'>
            <input
              type='checkbox'
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
              className='w-4 h-4 text-neutral-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600'
            />
            <label className='text-gray-700 dark:text-gray-300'>Minúsculas</label>
          </div>
          <div className='flex items-center gap-4'>
            <input
              type='checkbox'
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              className='w-4 h-4 text-neutral-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600'
            />
            <label className='text-gray-700 dark:text-gray-300'>Mayúsculas</label>
          </div>
          <div className='flex items-center gap-4'>
            <input
              type='checkbox'
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600'
            />
            <label className='text-gray-700 dark:text-gray-300'>Números</label>
          </div>
          <div className='flex items-center gap-4'>
            <input
              type='checkbox'
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600'
            />
            <label className='text-gray-700 dark:text-gray-300'>Símbolos</label>
          </div>
        </div>

        <div className='mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center text-gray-900 dark:text-gray-200 font-mono text-lg'>
          {password || 'Contraseña generada aparecerá aquí'}
        </div>
      </div>
    </div>
  )
}
