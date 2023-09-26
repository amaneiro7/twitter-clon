import Link from 'next/link'

export function SignOutBox ({ userName }: { userName: string }) {
  return (
        <>
            <div className="flex flex-col w-[300px] min-w-[260px] max-w-[360px] max-h-[488px] py-3 rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.2),0_0_3px_1px_rgba(255,255,255,0.15)] after:border-4 after:border-transparent2 after:left-1/2 after:-ml-1 after:absolute after:top-full">
                <Link href='#' className='cursor-pointer px-4 py-3 transition w-full hover:bg-slate-600/70'>
                    Agregar una cuenta existente
                </Link>
                <Link href='#' className='flex flex-col cursor-pointer px-4 py-3 transition w-full hover:bg-slate-600/70'>
                    <span>Cerrar la sesión de</span>
                    <span>{`@${userName}`}</span>
                </Link>
            </div>
            {/* <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill='currentColor'
                className="aboslute inline-block fill-current align-text-bottom w-6 max-w-full h-[24px] text-sm text-black rotate-180 -bottom-3 left-36 drop-shadow-sm"
            >
                <g>
                    <path
                        d="M22 17H2L12 6l10 11z">
                    </path>
                </g>
            </svg> */}
        </>
  )
}
