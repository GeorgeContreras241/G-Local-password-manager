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
    <main className='dark:bg-gray-900 bg-white'>
      <div className='container max-w-6xl mx-auto p-4 min-h-[82vh] dark:bg-gray-900 bg-white'>
        <header className='mb-6'>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-200 mb-4'>
            ¿Cómo funciona?
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300'>
            Descubre cómo funciona nuestro gestor de contraseñas local y seguro
          </p>
        </header>

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <article className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700/50'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-blue-500 dark:bg-blue-500 rounded-full flex items-center justify-center'>
                <FaKey className='w-6 h-6 text-white' />
              </div>
              <h2 className='text-xl font-semibold text-gray-900 dark:text-gray-200'>
                Configuración Inicial
              </h2>
            </div>
            <p className='text-gray-600 dark:text-gray-300'>
              Comienza estableciendo una clave secreta que usaremos para cifrar
              todas tus contraseñas. Esta clave es fundamental para mantener tus
              datos seguros.
            </p>
          </article>

          <article className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700/50'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-green-500 dark:bg-green-500 rounded-full flex items-center justify-center'>
                <FaLock className='w-6 h-6 text-white' />
              </div>
              <h2 className='text-xl font-semibold text-gray-900 dark:text-gray-200'>
                Almacenamiento Seguro
              </h2>
            </div>
            <p className='text-gray-600 dark:text-gray-300'>
              Tus contraseñas se almacenan de forma cifrada en tu dispositivo,
              protegidas por tu clave secreta. Solo tú podrás acceder a ellas.
            </p>
          </article>

          <article className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700/50'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-yellow-500 dark:bg-yellow-500 rounded-full flex items-center justify-center'>
                <FaClipboard className='w-6 h-6 text-white' />
              </div>
              <h2 className='text-xl font-semibold text-gray-900 dark:text-gray-200'>
                Gestión de Contraseñas
              </h2>
            </div>
            <p className='text-gray-600 dark:text-gray-300'>
              Agrega, edita y elimina contraseñas fácilmente. Copia contraseñas
              con un solo clic y organiza tus credenciales de manera eficiente.
            </p>
          </article>

          <article className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700/50'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-purple-500 dark:bg-purple-500 rounded-full flex items-center justify-center'>
                <FaDownload className='w-6 h-6 text-white' />
              </div>
              <h2 className='text-xl font-semibold text-gray-900 dark:text-gray-200'>
                Importación/Exportación
              </h2>
            </div>
            <p className='text-gray-600 dark:text-gray-300'>
              Importa y exporta tus contraseñas en formato seguro (.gpass).
              Mantén tus datos sincronizados entre dispositivos.
            </p>
          </article>

          <article className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700/50'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-red-500 dark:bg-red-500 rounded-full flex items-center justify-center'>
                <FaDatabase className='w-6 h-6 text-white' />
              </div>
              <h2 className='text-xl font-semibold text-gray-900 dark:text-gray-200'>
                Seguridad
              </h2>
            </div>
            <p className='text-gray-600 dark:text-gray-300'>
              Tus datos nunca se envían a Internet. Todo el procesamiento se
              realiza localmente, manteniendo tu privacidad y seguridad.
            </p>
          </article>

          <article className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-none ring-1 ring-gray-200 dark:ring-gray-700/50'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-pink-500 dark:bg-pink-500 rounded-full flex items-center justify-center'>
                <FaUpload className='w-6 h-6 text-white' />
              </div>
              <h2 className='text-xl font-semibold text-gray-900 dark:text-gray-200'>
                Sincronización
              </h2>
            </div>
            <p className='text-gray-600 dark:text-gray-300'>
              Importa y exporta tus contraseñas en formato .gpass para mantener
              tus datos sincronizados entre dispositivos.
            </p>
          </article>
        </section>
      </div>
    </main>
  )
}
