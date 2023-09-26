import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { SignInButton } from './components/auth-button/sign-in-button'

export default async function Login () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session !== null) {
    redirect('/home')
  }
  return (
        <section className='grid place-content-center min-h-screen'>
            <h1 className='text-xl font-bold mb-4'>Sign In</h1>
            <SignInButton />
        </section>
  )
}
