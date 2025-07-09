import React from 'react'

export const Input = ({label, id, type, value, onChange, name, placeholder}) => {
  return (
    <div className='mb-2'>
        <label
          htmlFor={id}
          className='block text-sm font-medium text-gray-700 dark:text-gray-200'
        >
          {label}
        </label>
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          className='mt-1 block w-full px-4 py-2  rounded-md border border-gray-300 dark:border-gray-600 shadow-sm sm:text-sm dark:text-gray-200'
          required
        />
      </div>
  )
}
