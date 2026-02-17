'use client'
import {
  FaLock,
  FaKey,
  FaDatabase,
  FaClipboard,
  FaDownload,
  FaUpload
} from 'react-icons/fa'

export default function HowPage () {
  return (
    <main className='dark:bg-gray-900 bg-white pt-4'>
      <div className='container max-w-6xl mx-auto p-4 min-h-[65vh] dark:bg-gray-900 bg-white'>
        <header className='mb-4'>
          <h1 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-3'>
            ¿Cómo funciona?
          </h1>
          <p className='text-base md:text-lg text-gray-600 dark:text-gray-300'>
            Descubre cómo funciona nuestro gestor de contraseñas local y seguro
          </p>
        </header>

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          <article className='bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700/50 hover:shadow-md transition-all duration-300'>
            <div className='flex items-center gap-3 mb-3'>
              <div className='w-10 h-10 bg-gray-600 dark:bg-gray-700 rounded-full flex items-center justify-center'>
                <FaKey className='w-5 h-5 text-white' />
              </div>
              <h2 className='text-lg font-semibold text-gray-900 dark:text-gray-200'>
                Configuración Inicial
              </h2>
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
              Establece una clave secreta para cifrar todas tus contraseñas. Fundamental para mantener tus datos seguros.
            </p>
          </article>

          <article className='bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700/50 hover:shadow-md transition-all duration-300'>
            <div className='flex items-center gap-3 mb-3'>
              <div className='w-10 h-10 bg-gray-700 dark:bg-gray-600 rounded-full flex items-center justify-center'>
                <FaLock className='w-5 h-5 text-white' />
              </div>
              <h2 className='text-lg font-semibold text-gray-900 dark:text-gray-200'>
                Almacenamiento Seguro
              </h2>
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
              Contraseñas cifradas en tu dispositivo, protegidas por tu clave secreta. Solo tú tienes acceso.
            </p>
          </article>

          <article className='bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700/50 hover:shadow-md transition-all duration-300'>
            <div className='flex items-center gap-3 mb-3'>
              <div className='w-10 h-10 bg-gray-800 dark:bg-gray-500 rounded-full flex items-center justify-center'>
                <FaClipboard className='w-5 h-5 text-white' />
              </div>
              <h2 className='text-lg font-semibold text-gray-900 dark:text-gray-200'>
                Gestión de Contraseñas
              </h2>
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
              Agrega, edita y elimina contraseñas fácilmente. Copia con un clic y organiza tus credenciales.
            </p>
          </article>

          <article className='bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700/50 hover:shadow-md transition-all duration-300'>
            <div className='flex items-center gap-3 mb-3'>
              <div className='w-10 h-10 bg-gray-900 dark:bg-gray-400 rounded-full flex items-center justify-center'>
                <FaDownload className='w-5 h-5 text-white' />
              </div>
              <h2 className='text-lg font-semibold text-gray-900 dark:text-gray-200'>
                Importación/Exportación
              </h2>
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
              Importa y exporta contraseñas en formato seguro (.gpass). Sincroniza entre dispositivos.
            </p>
          </article>

          <article className='bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700/50 hover:shadow-md transition-all duration-300'>
            <div className='flex items-center gap-3 mb-3'>
              <div className='w-10 h-10 bg-gray-800 dark:bg-gray-600 rounded-full flex items-center justify-center'>
                <FaDatabase className='w-5 h-5 text-white' />
              </div>
              <h2 className='text-lg font-semibold text-gray-900 dark:text-gray-200'>
                Seguridad
              </h2>
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
              Datos nunca enviados a Internet. Procesamiento local manteniendo tu privacidad y seguridad.
            </p>
          </article>

          <article className='bg-gray-200 dark:bg-gray-700 rounded-xl p-4 shadow-sm dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700/50 hover:shadow-md transition-all duration-300'>
            <div className='flex items-center gap-3 mb-3'>
              <div className='w-10 h-10 bg-gray-700 dark:bg-gray-500 rounded-full flex items-center justify-center'>
                <FaUpload className='w-5 h-5 text-white' />
              </div>
              <h2 className='text-lg font-semibold text-gray-900 dark:text-gray-200'>
                Sincronización
              </h2>
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
              Importa y exporta en formato .gpass para mantener datos sincronizados entre dispositivos.
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}
