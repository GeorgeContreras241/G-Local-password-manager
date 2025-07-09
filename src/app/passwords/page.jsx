'use client'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { MdContentCopy } from 'react-icons/md'
import { SecretKey } from '@/app/components/ui/SecretKey'
import { use, useState, useMemo } from 'react'
import { PasswordsContext } from '@/app/context/PasswordsContext'
import { Form } from '@/app/components/ui/Form'
import { compress, decompress } from '@/app/lib/helpers/covert'
import { encrypt, decrypt } from '@/app/lib/helpers/crypto'
import { errorAlert, successAlert, copyAlert } from '@/app/lib/alert/alert'
import { Search } from '@/app/components/ui/Search'
import { Button } from '@/app/components/ui/Button'

const PasswordsPage = () => {
  //Uso de Contextos de contraseñas y clave secreta
  const { passwords, dispatch, secretKey } = use(PasswordsContext)
  //Uso de useState para ordenar y ver la clave secreta
  const [sortedWebsite, setSortedWebsite] = useState(false)
  const [viewSecretKey, setViewSecretKey] = useState(false)
  const [generatedPassword, setGeneratedPassword] = useState('')


  const generateRandomPassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 40; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    setGeneratedPassword(password);
    copyToClipboard(password);
    successAlert('Contraseña generada y copiada al portapapeles');
  }

  const [searchData, setSearchData] = useState('')
  const [editId, setEditId] = useState(null)

  const copyToClipboard = async text => {
    try {
      await navigator.clipboard.writeText(text)
      copyAlert('Texto copiado al portapapeles')
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }
  const handleEdit = id => {
    setEditId(id)
  }

  const handleDownload = () => {
    const data = compress(passwords)
    const encryptedData = encrypt(data, secretKey)
    const blob = new Blob([encryptedData], { type: 'application/octet-stream' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = 'contraseñas.gpass'
    link.click()
    URL.revokeObjectURL(url)
    successAlert('Contraseñas descargadas correctamente')
  }

  const handleImport = e => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = async event => {
      const contenido = event.target.result
      const decryptedData = await decrypt(contenido, secretKey)
      const decompressedData = await decompress(decryptedData)
      if (decryptedData === false) {
        return errorAlert('Datos corruptos o clave incorrecta')
      }
      dispatch({ type: 'defaultPasswords', payload: decompressedData })
    }
    reader.readAsText(file)
  }

  const handleChangeSecretKey = () => {
    setViewSecretKey(!viewSecretKey)
    dispatch({ type: 'clearState' })
  }

  const datosFiltrados = useMemo(() => {
    return passwords.filter(pass =>
      searchData
        ? pass.website.toLowerCase().includes(searchData.toLowerCase())
        : pass
    )
  }, [searchData, passwords])

  const sortedData = useMemo(() => {
    return sortedWebsite
      ? datosFiltrados.sort((a, b) => a.website.localeCompare(b.website))
      : datosFiltrados
  }, [sortedWebsite, datosFiltrados])

  return (
    <main className='min-h-screen dark:bg-gray-900 bg-white/50 backdrop-blur-md'>
      
      <div className='max-w-7xl mx-auto p-6 md:p-8 lg:p-10 dark:bg-gray-900/90 bg-white rounded-lg shadow-lg'>
        <header className='mb-8'>
          <div className='flex items-center flex-col md:flex-row justify-between gap-4'>
            <h1 className='text-3xl w-10/12  font-bold text-gray-900 dark:text-white'>
              Administrador de Contraseñas
            </h1>
            <Button 
              onClick={generateRandomPassword} 
              title='Generar una contraseña aleatoria de 40 caracteres'
              text='Generar Contraseña'
            /> 
          </div>
          <p className='text-sm text-gray-600 dark:text-gray-300 mt-2'>
            Gestiona tus credenciales de manera segura.
          </p>
        </header>
        <section className='flex flex-col gap-4'>
          <div className='flex md:flex-row flex-col gap-4'>
            <Form 
              editId={editId} 
              setEditId={setEditId} 
              generatedPassword={generatedPassword}
            />
            <aside className='w-full md:w-1/3 flex flex-col items-center justify-center gap-2 p-2'>
              <Button
                text='Descargar Contraseñas'
                ariaLabel='Descargar todas las contraseñas'
                onClick={handleDownload}
              />
              <label
                htmlFor='import-file'
                className='w-full inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Importar
              </label>
              <input
                type='file'
                id='import-file'
                accept='.gpass'
                className='hidden'
                onChange={handleImport}
              />
              <Button
                text='Guardar en Drive'
                ariaLabel='Guardar contraseñas en Google Drive (funcionalidad pendiente)'
                disabled
              />
              <Button
                text='Cambiar Clave Secreta'
                ariaLabel='Cambiar clave secreta'
                onClick={handleChangeSecretKey}
              />
            </aside>
          </div>
          <article className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 dark:shadow-none'>
            <Search setDataFiltrada={setSearchData} dataFiltrada={searchData} />
            <div className='overflow-x-auto'>
              <table className='min-w-full overflow-hidden'>
                <caption className='sr-only'>
                  Lista de contraseñas guardadas
                </caption>
                <thead className='bg-gray-50 dark:bg-gray-700 [&_th]:text-gray-500 dark:[&_th]:text-gray-200'>
                  <tr>
                    <th
                      className='px-4 py-3 text-left text-xs font-medium uppercase cursor-pointer'
                      scope='col'
                      title='Ordenar por Sitio Web'
                      onClick={() => setSortedWebsite(!sortedWebsite)}
                    >
                      Sitio Web
                    </th>
                    <th
                      className='px-4 py-3 text-left text-xs font-medium  uppercase cursor-pointer'
                      scope='col'
                      title='Ordenar por Usuario'
                    >
                      Usuario
                    </th>
                    <th
                      className='px-4 py-3 text-left text-xs font-medium uppercase cursor-pointer'
                      scope='col'
                      title='Ordenar por Contraseña'
                    >
                      Contraseña
                    </th>
                    <th
                      className='px-4 py-3 text-left text-xs font-medium uppercase cursor-pointer'
                      scope='col'
                      title='Ordenar por Fecha de Creación'
                    >
                      Fecha de Creación
                    </th>
                    <th
                      className='px-4 py-3 text-left text-xs font-medium uppercase cursor-pointer'
                      scope='col'
                    >
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700'>
                  {Array.isArray(sortedData) && sortedData.length > 0 ? (
                    sortedData.map(password => {
                      const fechaFormateada = new Date(
                        password.id
                      ).toLocaleDateString()
                      return (
                        <tr key={password.id} className='hover:bg-gray-100'>
                          <td className='px-4 py-4 whitespace-nowrap text-sm dark:text-gray-300 max-w-[250px] inline-block  truncate'>
                            {password.website}
                          </td>
                          <td className='px-4 py-4 text-sm dark:text-gray-300 '>
                            <div className='flex flex-row items-center justify-between max-w-[250px]  truncate'>
                              <span className='truncate'>
                                {password.username}
                              </span>
                              <button
                                onClick={() =>
                                  copyToClipboard(password.username)
                                }
                              >
                                <MdContentCopy className='w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-700 hover:scale-105 cursor-pointer' />
                              </button>
                            </div>
                          </td>
                          <td className='flex flex-row items-center justify-between px-4 py-4 text-sm dark:text-gray-300 max-w-[250px]  truncate'>
                            <span className='truncate'>
                              *********************
                            </span>
                            <button
                              onClick={() => copyToClipboard(password.password)}
                            >
                              <MdContentCopy className='w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-700 hover:scale-105 cursor-pointer' />
                            </button>
                          </td>
                          <td className='px-4 py-4 whitespace-nowrap text-sm  dark:text-gray-300'>
                            {fechaFormateada}
                          </td>
                          <td className='px-4 py-4 whitespace-nowrap text-sm dark:text-gray-300'>
                            <button
                              className='text-blue-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 mr-2'
                              aria-label={`Editar contraseña de ${password.website}`}
                              title='Editar'
                              onClick={() => handleEdit(password.id)}
                            >
                              <FaEdit className='w-5 h-5 text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-700 hover:scale-105 cursor-pointer' />
                            </button>
                            <button
                              className='text-red-400 dark:text-red-300 hover:text-red-600 dark:hover:text-red-400'
                              aria-label={`Eliminar contraseña de ${password.website}`}
                              title='Eliminar'
                              onClick={() =>
                                dispatch({
                                  type: 'deletePassword',
                                  payload: password.id
                                })
                              }
                            >
                              <FaTrash className='w-5 h-5 text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-700 hover:scale-105 cursor-pointer' />
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  ) : (
                    <tr>
                      <td
                        colSpan={5}
                        className='text-center py-4 dark:text-gray-300'
                      >
                        No hay contraseñas guardadas
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </article>
        </section>
        {viewSecretKey ? null : (
          <SecretKey setViewSecretKey={setViewSecretKey} />
        )}
      </div>
    </main>
  )
}

export default PasswordsPage
