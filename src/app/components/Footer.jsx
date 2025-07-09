import React from 'react'

export const Footer = () => {
  return (
    <footer className='w-full bg-gray-900 text-white py-8'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Columna 1: Información General */}
          <div>
            <h3 className='text-xl font-bold mb-4'>
              Gestor de Contraseñas Local
            </h3>
            <p className='text-gray-200 mb-4'>
              Una aplicación segura y local para gestionar tus contraseñas
            </p>
            <div className='flex gap-4'>
              <a
                href='https://github.com/GeorgeContreras241'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-300 dark:text-blue-300 dark:hover:text-blue-400'
              >
                GitHub
              </a>
              <span className='text-gray-200'>|</span>
              <a
                href='https://github.com/GeorgeContreras241/G-Password_manager'
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-400 hover:text-blue-300 dark:text-blue-300 dark:hover:text-blue-400'
              >
                Repositorio
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Enlaces Rápidos</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#home'
                  className='text-gray-200 hover:text-white transition-colors'
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href='#contraseñas'
                  className='text-gray-200 hover:text-white transition-colors'
                >
                  Tus Contraseñas
                </a>
              </li>
              <li>
                <a
                  href='#como-funciona'
                  className='text-gray-200 hover:text-white transition-colors'
                >
                  ¿Cómo funciona?
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Contacto</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='mailto:georgecontreras241@gmail.com'
                  className='text-gray-200 hover:text-white transition-colors'
                >
                  georgecontreras241@gmail.com
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/GeorgeContreras241'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-200 hover:text-white transition-colors'
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className='border-t border-gray-700 my-8'></div>

        {/* Pie de página */}
        <div className='text-center text-gray-200'>
          <p>
            &copy; {new Date().getFullYear()} George Contreras. Todos los
            derechos reservados.
          </p>
          <p>Version 1.0.0</p>
        </div>
      </div>
    </footer>
  )
}
