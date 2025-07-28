export const Button = ({ text, ariaLabel,onClick }) => {
  return (
    <button 
    aria-label={ariaLabel}
    onClick={onClick}
    className='w-full inline-flex justify-center rounded-md border border-transparent bg-blue-600  py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
      {text}
    </button>
  )
}
