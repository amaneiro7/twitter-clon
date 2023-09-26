import Link from 'next/link'
import { SignOutButton } from '../auth-button/sign-out-button'
import { type Session } from '@supabase/supabase-js'

export function SignOutBox ({ session }: { session: Session | null }) {
  return (
        <div className='absolute w-[300px] min-w-[260px] max-w-[360px] max-h-[488px] bottom-20 left-6 z-50'>
            <div className="flex flex-col relative w-full h-full py-3 bg-black rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.2),0_0_3px_1px_rgba(255,255,255,0.15)] after:border-[6px] after:border-transparent after:border-t-black after:left-1/2 after:-ml-1 after:absolute after:top-full after:shadow-large after:shadow-white">
                <Link href='#' className='cursor-pointer px-4 py-3 transition w-full hover:bg-slate-600/70'>
                    Agregar una cuenta existente
                </Link>
                <SignOutButton session={session}/>
            </div>
        </div>
  )
}
