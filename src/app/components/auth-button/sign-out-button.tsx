'use client'

import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export function SignOutButton ({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }
  return (
    <button
    onClick={handleSignOut}
    className='flex flex-col cursor-pointer px-4 py-3 transition w-full hover:bg-slate-600/70'>
    <span>Cerrar la sesión de</span>
    <span>{`@${session?.user?.user_metadata?.user_name}`}</span>
  </button>
  )
}
