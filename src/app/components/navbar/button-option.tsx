import { OptionsIcon } from '../icons'

export function ButtonOption () {
  return (
        <button
                  type='button'
                  className='flex flex-row w-max items-center justify-between p-3 rounded-full text-center hover:bg-slate-800 transition cursor-pointer'
                >
                  <OptionsIcon />
                  <p className='text-xl ml-5 mr-4'>
                    Más opciones
                  </p>
                </button>
  )
}
