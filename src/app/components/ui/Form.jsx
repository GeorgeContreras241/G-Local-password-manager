'use client'
import { useState, useEffect, use } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { PasswordsContext } from '@/app/context/PasswordsContext'
import { errorAlert, successAlert } from '@/app/lib/alert/alert'
export const Form = ({ editId, setEditId, generatedPassword }) => {
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
      <Input
        label='Contraseña'
        id='password'
        type='password'
        value={inputForm.password}
        onChange={e => setInputForm({ ...inputForm, password: e.target.value })}
        name='password'
        placeholder='Contraseña'
        required
      />
      <Button
        text={editId ? 'Editar Contraseña' : 'Agregar Contraseña'}
        ariaLabel='Agregar nueva contraseña'
      />
    </form>
  )
}
