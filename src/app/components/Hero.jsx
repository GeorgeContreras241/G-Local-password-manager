import {
  FaLinkedinIn,
  FaGithub,
  FaLock,
  FaShieldAlt,
  FaUserShield
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Link  from 'next/link'

const features = [
  {
    icon: <FaLock className='h-8 w-8 text-blue-600' />,
    title: 'Encriptación AES-256',
    description:
      'Tus contraseñas están protegidas con el estándar de encriptación avanzado AES-256.'
  },
  {
    icon: <FaShieldAlt className='h-8 w-8 text-blue-600' />,
    title: 'Almacenamiento Local',
    description:
      'Tus contraseñas se guardan únicamente en tu dispositivo, sin enviar datos a la nube.'
  },
  {
    icon: <FaUserShield className='h-8 w-8 text-blue-600' />,
    title: 'Acceso Seguro',
    description:
      'Protege tu colección de contraseñas con una contraseña maestra segura.'
  }
]

const projects = [
  {
    id: 1,
    name: 'Nube - Gestor de Contraseñas',
    description:
      'Aplicación Full Stack segura para gestionar contraseñas. Las contraseñas se encriptan en el frontend antes de almacenarse en la base de datos, garantizando que solo el usuario pueda desencriptarlas con su clave maestra.',
    technologies: [
      { name: 'React', icon: 'React' },
      { name: 'Tailwind', icon: 'Tailwind' },
      { name: 'ExpressJS', icon: 'Express' },
      { name: 'MongoDB', icon: 'Mongo' }
    ],
    url: null,
    github: 'https://github.com/GeorgeContreras241/G-Password_manager',
    image: './images/project07.webp'
  }
]

const FeatureCard = ({ icon, title, description }) => (
  <article className='flex flex-col items-start gap-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-md p-6 cursor-pointer hover:border-blue-400 hover:dark:border-blue-600 transition-all duration-300 hover:shadow-lg'>
    <div className='p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full'>
      {icon}
    </div>
    <div className='flex-1'>
      <h3 className='text-xl font-semibold text-text-light dark:text-text-dark mb-2'>
        {title}
      </h3>
      <p className='text-text-secondary-light dark:text-text-secondary-dark text-sm'>
        {description}
      </p>
    </div>
  </article>
)

export const Hero = () => {
  return (
    <section className='w-full'>
      <div className='flex lg:flex-row flex-col mt-10'>
        <div className='flex flex-col lg:w-2/4 px-2 w-full'>
          <h1 className='text-2xl md:text-3xl lg:text-[2.4rem] font-bold text-text-light dark:text-text-dark mb-4 md:mb-6 leading-tight'>
            Tu herramienta para gestionar tus contraseñas de manera segura
          </h1>
          <p className='text-base sm:text-lg text-text-secondary-light dark:text-text-secondary-dark mb-6 md:px-2 max-w-3xl leading-relaxed'>
            Gestor de Contraseñas Local es una aplicación segura para gestionar
            tus contraseñas de manera local. Protege tus credenciales con encriptación
            avanzada y acceso seguro.
          </p>
          <span className='text-gray-800 dark:text-blue-500 font-semibold font-italic px-2 text-sm sm:text-base'>
            Desarrollado por George Contreras
          </span>
          <div className='flex gap-8 ml-auto px-6 mt-4'>
            <a
              href='https://www.linkedin.com/in/georgecontreras241/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn className='h-8 w-8 hover:scale-110 transition-all' />
            </a>
            <a
              href='https://github.com/GeorgeContreras241'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='h-8 w-8 hover:scale-110 transition-all' />
            </a>
            <a href='https://x.com/' target='_blank' rel='noopener noreferrer'>
              <FaXTwitter className='h-8 w-8 hover:scale-110 transition-all' />
            </a>
          </div>
          <div className='flex sm:flex-row flex-col justify-end p-6 gap-4 '>
            <Link href='/passwords' className='bg-blue-700 flex items-center gap-2 px-8 h-10 rounded-md text-white font-semibold cursor-pointer hover:bg-blue-600 transition-all'>
              Comenzar
            </Link>
            <a href='https://porta-tau.vercel.app/' target='_blank' rel='noopener noreferrer' className='bg-blue-700 flex items-center gap-2 px-8 h-10 rounded-md text-white font-semibold cursor-pointer hover:bg-blue-600 transition-all'>
              Visitar Portfolio
            </a>
          </div>
        </div>
        <div className='lg:w-2/4 h-[400px] overflow-hidden rounded-lg w-full'>
          <img
            src='./images/hero-img.webp'
            className='w-full h-full object-cover aspect-square'
          />
        </div>
      </div>
      <section className='flex flex-col w-full lg:mt-20 mt-10'>
        <h2 className='text-4xl font-bold text-text-light dark:text-text-dark mb-6 text-center'>
          Características
        </h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-10'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
      <section>
        <h4 className='text-4xl font-bold text-text-light dark:text-text-dark mb-4'>
          Otros proyectos
        </h4>
        <div className='grid grid-cols-1 gap-4 my-10 w-full '>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className='flex flex-col gap-4 md:flex-row md:gap-8'
            >
              <div
                className='relative z-900 w-full md:w-3/6 border border-gray-800 rounded-lg h-full 
            backdrop-blur-2xl overflow-hidden bg-neutral-800/90'
              >
                <div className='bg-neutral-800 p-2 flex gap-2 align-center rounded-t-lg'>
                  <span className='w-2 h-2 rounded-full bg-red-500' />
                  <span className='w-2 h-2 rounded-full bg-yellow-500' />
                  <span className='w-2 h-2 rounded-full bg-green-500' />
                </div>
                <img
                  src='https://porta-tau.vercel.app/images/project07.webp'
                  alt='Imagen de proyecto'
                  loading='lazy'
                  className='w-full h-full object-cover aspect-auto rounded-b-lg border border-gray-700 cursor-pointer
                relative z-1100 top-5 left-5 hover:top-0 hover:left-0 transition-all duration-1200 hover:border-transparent'
                />
              </div>
              <div className='full md:w-3/6 grow h-full'>
                <h3 className='text-2xl font-bold text-text-light dark:text-text-dark drop-shadow-md transition-colors duration-500 hover:text-[#8fe3ff]'>
                  {project.name}
                </h3>
                <ul className='mt-2 flex flex-wrap items-center gap-4 text-[.75rem] font-semibold text-gray-100'>
                  {project.technologies.map(tech => {
                    return (
                      <li key={tech.name} className='flex justify-center items-center gap-x-1.5 text-text-secondary-light dark:text-text-secondary-dark'>
                        {tech.name}
                      </li>
                    )
                  })}
                </ul>
                <p className='mt-2 text-text-secondary-light dark:text-text-secondary-dark'>
                  {project.description}
                </p>
                <nav className='flex flex-row gap-x-4 mt-4 justify-end items-center'>
                  <a
                    href={project.github}
                    aria-label={`Ver código fuente de ${project.name} en GitHub`}
                    title={`Ver código fuente de ${project.name} en GitHub`}
                    target='_blank'
                    className='bg-[#052530] hover:bg-[#253d46] text-gray-100 font-semibold flex items-center gap-3 py-1 px-3 rounded-md text-sm transition-all duration-300 hover:scale-[1.02]'
                    rel='noreferrer'
                  >
                    Ver código fuente en GitHub
                  </a>
                  <a
                    href='./login'
                    target='_blank'
                    className='bg-[#052530] hover:bg-[#253d46] text-white font-semibold flex items-center gap-3 py-1 px-3 rounded-md text-sm transition-all duration-300 hover:scale-[1.02]'
                    rel='noreferrer'
                  >
                    Ver demostración
                  </a>
                </nav>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
