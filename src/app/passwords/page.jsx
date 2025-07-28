'use client'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { MdContentCopy } from 'react-icons/md'
import { SecretKey } from '@/app/components/ui/SecretKey'
import { use, useState, useMemo } from 'react'
import { PasswordsContext } from '@/app/context/PasswordsContext'
import { Form } from '@/app/components/ui/Form'
import { Search } from '@/app/components/ui/Search'
import { Button } from '@/app/components/ui/Button'
import { useHandlePasswords } from '@/app/lib/hooks/useHandlePasswords'
import { useGeneratePasswords } from '@/app/lib/hooks/useGeneratePasswords'
import { successAlert } from '@/app/lib/alert/alert'

const PasswordsPage = () => {
  const { passwords, dispatch, secretKey } = use(PasswordsContext)
  const { handleDownload, handleImport } = useHandlePasswords(
    passwords,
    secretKey
  )
  const { generateRandomPassword, generatedPassword } = useGeneratePasswords()
  const [sortedWebsite, setSortedWebsite] = useState(false)
  const [viewSecretKey, setViewSecretKey] = useState(false)
  const [searchData, setSearchData] = useState('')
  const [editId, setEditId] = useState(null)

  const handleGenerateRandomPassword = () => {
    generateRandomPassword()
    navigator.clipboard.writeText(generatedPassword)
    successAlert('Contraseña generada y copiada al portapapeles')
  }

  const copyToClipboard = text => {
    navigator.clipboard.writeText(text)
    successAlert('Texto copiado al portapapeles')
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
              generateRandomPassword={handleGenerateRandomPassword}
            />
            <aside className='w-full md:w-1/3 flex flex-col items-center justify-center gap-2 p-2'>
              <Button
                text='Descargar Contraseñas'
                ariaLabel='Descargar todas las contraseñas'
                onClick={handleDownload}
              />
              <label
                htmlFor='import-file'
                className='w-full inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
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
                        <tr
                          key={password.id}
                          className='hover:bg-gray-100 dark:hover:bg-gray-700'
                        >
                          <td className='flex flex-row-reverse gap-4 items-center px-4 py-4 whitespace-nowrap text-sm dark:text-gray-300 max-w-[250px] truncate'>
                            <span className='w-full'>{password.website}</span>
                            <img
                              src={
                                `https://icons.duckduckgo.com/ip3/${password.website}.com.ico` ||
                                './webIcon.svg'
                              }
                              alt={password.website}
                              className='h-5 w-5'
                            />
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
                                <MdContentCopy className='w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-100 hover:scale-105 cursor-pointer' />
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
                              <MdContentCopy className='w-3.5 h-3.5 text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-100 hover:scale-105 cursor-pointer' />
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
                              onClick={() => setEditId(password.id)}
                            >
                              <FaEdit className='w-5 h-5 text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-100 hover:scale-105 cursor-pointer' />
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
                              <FaTrash className='w-5 h-5 text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-100 hover:scale-105 cursor-pointer' />
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
