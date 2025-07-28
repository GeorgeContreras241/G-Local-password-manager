'use client'
import { useState, useEffect, use } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { PasswordsContext } from '@/app/context/PasswordsContext'
import { RiAiGenerate } from "react-icons/ri";
import { errorAlert, successAlert } from '@/app/lib/alert/alert'

export const Form = ({ editId, setEditId, generatedPassword ,generateRandomPassword}) => {
  const { dispatch, passwords } = use(PasswordsContext)
  const [inputForm, setInputForm] = useState({
    website: '',
    username: '',
    password: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    if (!inputForm.website || !inputForm.username || !inputForm.password) {
      errorAlert('Todos los campos son requeridos')
      return
    }
    const payload = {
      ...inputForm,
      id: editId || Date.now()
    }

    const operation = editId ? 'updatePassword' : 'addPassword'

    dispatch({
      type: operation,
      payload: payload
    })
    setTimeout(() => {
      setInputForm({ website: '', username: '', password: '' })
      setEditId(null)
    }, 100)
  }
  useEffect(() => {
    if (editId) {
      const passwordToEdit = passwords.find(password => password.id === editId)
      if (passwordToEdit) {
        setInputForm({
          website: passwordToEdit.website,
          username: passwordToEdit.username,
          password: passwordToEdit.password
        })
      }
    } else {
      setInputForm({
        website: '',
        username: '',
        password: ''
      })
    }
  }, [editId, passwords])

  useEffect(() => {
    // Actualizar el password cuando se genera una nueva contraseña
    if (generatedPassword) {
      setInputForm(prev => ({
        ...prev,
        password: generatedPassword
      }))
    }
  }, [generatedPassword])

  return (
    <form
      className='w-full md:w-2/3 flex flex-col gap-2 py-4'
      aria-label='Formulario de nueva contraseña'
      onSubmit={handleSubmit}
    >
      <Input
        label='Sitio Web/Aplicación'
        id='website'
        type='text'
        value={inputForm.website}
        onChange={e => setInputForm({ ...inputForm, website: e.target.value })}
        name='website'
        placeholder='Sitio Web/Aplicación'
        required
      />
      <Input
        label='Usuario'
        id='username'
        type='text'
        value={inputForm.username}
        onChange={e => setInputForm({ ...inputForm, username: e.target.value })}
        name='username'
        placeholder='Usuario'
        required
      />
      <div className='flex items-center justify-center w-full gap-2'>
        <div className='mb-2 w-full'>
          <label
            htmlFor='password'
            className='block w-full text-sm font-medium text-gray-700 dark:text-gray-200'
          >
            Contraseña
          </label>
          <input
            type='password'
            id='password'
            value={inputForm.password}
            onChange={e =>
              setInputForm({ ...inputForm, password: e.target.value })
            }
            name='password'
            placeholder='Contraseña'
            className='mt-1 w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 shadow-sm sm:text-sm dark:text-gray-200'
            required
          />
        </div>
        <button onClick={generateRandomPassword} className='flex items-center justify-center gap-2 mt-4 cursor-pointer hover:scale-105 transition-all' title='Generar contraseña aleatoria' type='button'>
          <RiAiGenerate  className='h-6 w-6'/>
        </button>
      </div>
      <Button
        text={editId ? 'Editar Contraseña' : 'Agregar Contraseña'}
        ariaLabel='Agregar nueva contraseña'
      />
    </form>
  )
}
