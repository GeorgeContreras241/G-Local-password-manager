import {
  FaLinkedinIn,
  FaGithub,
  FaLock,
  FaShieldAlt,
  FaUserShield
} from 'react-icons/fa'
import Link from 'next/link'

const features = [
  {
    icon: <FaLock className='h-8 w-8 text-blue-600' />,
    title: 'Encriptación AES-256',
    description:
      'Tus contraseñas están protegidas con el estándar de encriptación AES-256, el más seguro del mercado.'
  },
  {
    icon: <FaShieldAlt className='h-8 w-8 text-blue-600' />,
    title: 'Almacenamiento Local',
    description:
      'Tus datos se guardan exclusivamente en tu dispositivo. Sin envío a la nube, total privacidad.'
  },
  {
    icon: <FaUserShield className='h-8 w-8 text-blue-600' />,
    title: 'Acceso Seguro',
    description:
      'Protege tus contraseñas con una clave maestra. Solo tú tienes acceso a tus credenciales.'
  }
]

const projects = [
  {
    id: 1,
    name: 'Nube - Gestor de Contraseñas',
    description:
      'Aplicación full-stack con encriptación cliente-servidor. Las contraseñas se encriptan en el frontend antes de almacenarse, garantizando que solo el usuario pueda desencriptarlas con su clave maestra.',
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
  <article className='flex flex-row items-center gap-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm p-4 
  cursor-pointer hover:border-gray-600 hover:dark:border-gray-500 transition-all duration-300 hover:shadow-md hover:scale-[1.02] bg-white dark:bg-gray-800/50 backdrop-blur-sm'>
    <div className='p-1 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/30 dark:to-gray-700/30 rounded-lg border border-gray-200 dark:border-gray-600'>
      {icon}
    </div>
    <div className='flex-1'>
      <h3 className='text-sm md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1'>
        {title}
      </h3>
      <p className='text-gray-700 dark:text-gray-400 text-xs md:text-md leading-relaxed'>
        {description}
      </p>
    </div>
  </article>
)

export const Hero = () => {
  return (
    <section className='w-full'>
      <div className='flex lg:flex-row flex-col mt-6 lg:mt-8 gap-2'>
        <div className='flex flex-col justify-center lg:w-2/4 px-2 w-full'>
          <h1 className='text-xl md:text-2xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight'>
            GESTOR DE CONTRASEÑAS
          </h1>
          <p className='text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 md:px-2 max-w-2xl leading-relaxed'>
            Gestiona tus contraseñas localmente con encriptación de alta seguridad. Total privacidad y protección en tu dispositivo.
          </p>

          <div className='flex  sm:flex-row justify-between  gap-3 p-2'>
            <div className='flex gap-2'>
              <Link href='/passwords'
                className='bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 flex items-center justify-center gap-2 
            px-6 h-9 rounded-lg text-white text-sm font-semibold transition-all transform  shadow-lg'>
                Comenzar
              </Link>
              <a href='https://porta-tau.vercel.app/'
                target='_blank'
                aria-label='Portfolio'
                rel='noopener noreferrer'
                className='bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 flex items-center justify-center 
            gap-2 px-6 h-9 rounded-lg text-white text-sm font-semibold transition-all transform shadow-lg'>
                Porfolio
              </a>
            </div>
            <div className='flex gap-2 md:mr-8 mr-2'>
              <a
                href='https://www.linkedin.com/in/georgecontreras241/'
                target='_blank'
                rel='noopener noreferrer'
                className='grid place-items-center text-white  transition-all duration-300 hover:scale-110'
                aria-label='LinkedIn'
                title='LinkedIn'
              >
                <FaLinkedinIn className='h-7 w-7' />
              </a>
              <a
                href='https://github.com/GeorgeContreras241'
                target='_blank'
                rel='noopener noreferrer'
                className='grid place-items-center text-white hover:text-gray-900 dark:hover:text-white transition-colors hover:scale-110'
                aria-label='GitHub'
                title='GitHub'
              >
                <FaGithub className='h-7 w-7' />
              </a>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center cursor-pointer  lg:w-2/4 h-[280px] lg:h-[320px] overflow-hidden rounded-2xl w-full mt-6 lg:mt-0 shadow-xl '>
          <img
            src='./images/hero-img.webp'
            className='w-[90%] h-[90%] object-cover hover:scale-105 transition-transform duration-500 brightness-110 dark:brightness-100 contrast-105'
          />
        </div>
      </div>
      <section className='flex flex-col w-full lg:mt-12 mt-8'>
        <h2 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-6 text-center'>
          Características Principales
        </h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-6'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
      <section className='flex flex-col w-full lg:mt-12 mt-8'>
        <h2 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-6 text-center'>
          Otros Proyectos
        </h2>
        <div className='grid grid-cols-1 gap-6 my-6 w-full'>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className='flex flex-col lg:flex-row gap-6 p-6 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800/50 backdrop-blur-sm hover:scale-[1.02]'
            >
              <div className='lg:w-2/5 w-full'>
                <div className='relative overflow-hidden  border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900'>
                  <div className='flex gap-2 p-3 border-b border-gray-300 dark:border-gray-600'>
                    <span className='w-3 h-3 rounded-full bg-red-500' />
                    <span className='w-3 h-3 rounded-full bg-yellow-500' />
                    <span className='w-3 h-3 rounded-full bg-green-500' />
                  </div>
                  <img
                    src='https://porta-tau.vercel.app/images/project07.webp'
                    alt='Imagen de proyecto'
                    loading='lazy'
                    className='w-full h-64 object-contain hover:scale-105 transition-transform duration-500'
                  />
                </div>
              </div>
              <div className='lg:w-3/5 w-full flex flex-col justify-between'>
                <div>
                  <h3 className='text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-800 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent mb-3'>
                    {project.name}
                  </h3>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.map(tech => (
                      <span key={tech.name} className='px-3 py-1 bg-gray-100 dark:bg-gray-700/30 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold'>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <p className='text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6'>
                    {project.description}
                  </p>
                </div>
                <div className='flex gap-3'>
                  <a
                    href={project.github}
                    aria-label={`Ver código fuente de ${project.name} en GitHub`}
                    title={`Ver código fuente de ${project.name} en GitHub`}
                    target='_blank'
                    className='bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all transform hover:scale-105 shadow-md'
                    rel='noreferrer'
                  >
                    <FaGithub className='h-4 w-4' />
                    Código
                  </a>
                  <a
                    href='./login'
                    target='_blank'
                    className='bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all transform hover:scale-105 shadow-md'
                    rel='noreferrer'
                  >
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
