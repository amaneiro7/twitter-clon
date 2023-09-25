import Link from 'next/link'

export function SignOutBox ({ userName }) {
  return (
        <div className="flex flex-col gap-1 w-[300px] h-[132px] py-3 rounded-2xl shadow-md shadow-white">
            <Link href='#' className='hover:bg-slate-500'>
                Agregar una cuenta existente
            </Link>
            <Link href='#' className='hover:bg-slate-500'>
                {`Cerrar la sesión de @${userName}`}
            </Link>
        </div>
  )
}
