export const Button = ({ text, ariaLabel,onClick }) => {
  return (
    <button 
    aria-label={ariaLabel}
    onClick={onClick}
    className='w-full inline-flex justify-center rounded-md border border-transparent bg-gray-800  py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
      {text}
    </button>
  )
}
