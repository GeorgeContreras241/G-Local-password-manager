import { FiSearch } from 'react-icons/fi'

export const Search = ({ dataFiltrada, setDataFiltrada }) => {
  return (
    <section className='flex flex-row lg:gap-22 gap-4 items-center pb-8 dark:bg-gray-800/90 border-b border-gray-200 dark:border-gray-700/50'>
      <div className='flex items-center gap-2'>
        <span className='text-xl font-semibold text-gray-900 dark:text-gray-200'>Tus Contraseñas</span>
      </div>
      <div className='relative flex-1'>
        <input
          type='text'
          placeholder='Buscar contraseñas...'
          className='w-full p-3 pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200'
          onChange={e => setDataFiltrada(e.target.value)}
          value={dataFiltrada}
        />
        <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5' />
      </div>
    </section>
  )
}
