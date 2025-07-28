import { PasswordsContext } from '@/app/context/PasswordsContext'
import { compress, decompress } from '@/app/lib/helpers/covert'
import { encrypt, decrypt } from '@/app/lib/helpers/crypto'
import { successAlert, errorAlert } from '@/app/lib/alert/alert'
import { use, useCallback } from 'react'
export const useHandlePasswords = (passwords, secretKey) => {
  const { dispatch } = use(PasswordsContext)

  const handleDownload = useCallback(() => {
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
  }, [passwords, secretKey])
  const handleImport = useCallback(e => {
    const file = e.target.files[0]
    if (!file) return errorAlert('No se seleccionó ningún archivo')

    const reader = new FileReader()
    reader.onload = async event => {
      try {
        const contenido = event.target.result
        const decryptedData = await decrypt(contenido, secretKey)

        if (decryptedData === false) {
          e.target.value = ''
          return errorAlert('Datos corruptos o clave incorrecta')
        }

        const decompressedData = await decompress(decryptedData)
        if (!decompressedData) {
          e.target.value = ''
          return errorAlert('Error al descomprimir los datos')
        }

        dispatch({ type: 'defaultPasswords', payload: decompressedData })
        successAlert('Importación exitosa')
        e.target.value = ''
      } catch (error) {
        console.error('Error en la importación:', error)
        errorAlert('Error al importar los datos')
        e.target.value = ''
      }
    }

    reader.onerror = () => {
      errorAlert('Error al leer el archivo')
    }

    reader.readAsText(file)
  }, [secretKey])
  return {
    handleDownload,
    handleImport
  }
}
