import { PasswordGenerator } from './PasswordGenerator'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export const Hero = () => {
  return (
    <section className='w-full min-h-[82vh]  flex flex-col items-center justify-center py-12 bg-white dark:bg-gray-900'>
      <div className='max-w-5xl w-full bg-white dark:bg-gray-900 px-2'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-200 mb-4'>
            Bienvenido a Gestor de Contraseñas Local
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-4'>
            Una aplicación segura para gestionar tus contraseñas de manera local
          </p>
          <p className='text-gray-500 dark:text-gray-400'>
            Desarrollado por{' '}
            <a
              href='https://github.com/GeorgeContreras241'
              className='text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400'
              target='_blank'
              rel='noopener noreferrer'
            >
              George Contreras
            </a>
          </p>
          <div className='flex flex-row gap-4 items-center justify-center mt-4'>
            <a
              href='https://www.linkedin.com/in/georgecontreras241/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn className='h-12 w-12 hover:scale-110 transition-all' />
            </a>
            <a
              href='https://github.com/GeorgeContreras241'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='h-12 w-12 hover:scale-110 transition-all' />
            </a>
            <a
              href='https://x.com/'
              target='_blank'
              rel='noopener noreferrer'
              >
              <FaXTwitter className='h-12 w-12 hover:scale-110 transition-all' />
            </a>
          </div>
        </div>
        <section className='flex flex-col md:flex-row gap-4 bg-white dark:bg-gray-900'>
          <div className='bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-none mb-12 ring-1 ring-gray-200 dark:ring-gray-700'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-200 mb-6'>
              ¿Cómo funciona?
            </h2>
            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-blue-500 dark:bg-blue-500 rounded-full flex items-center justify-center'>
                  <span className='text-white'>1</span>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-gray-200 mb-2'>
                    Configuración Inicial
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Establece una clave secreta que usaremos para cifrar tus
                    contraseñas
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-green-500 dark:bg-green-500 rounded-full flex items-center justify-center'>
                  <span className='text-white'>2</span>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-gray-200 mb-2'>
                    Almacenamiento Seguro
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Tus contraseñas se almacenan de forma cifrada en tu
                    dispositivo
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-yellow-500 dark:bg-yellow-500 rounded-full flex items-center justify-center'>
                  <span className='text-white'>3</span>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 dark:text-gray-200 mb-2'>
                    Acceso Rápido
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Accede a tus contraseñas de manera rápida y segura cuando
                    las necesites
                  </p>
                </div>
              </div>
            </div>
          </div>
          <PasswordGenerator />
        </section>
      </div>
    </section>
  )
}
