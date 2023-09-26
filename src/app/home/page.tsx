import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { type Database } from '../types/database'
import { Header } from '../components/navbar/header-navbar'
import { MainContent } from '../components/main-content/main-section'
import { Aside } from '../components/aside/aside'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/')
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(name, user_name,avatar_url)')
  return (
    <div className='w-full min-h-[932px] flex flex-row items-stretch pointer-events-auto'>
      <header className='relative flex flex-col items-end grow'>
        <Header
          session={session}
          userAvatarUrl={session.user?.user_metadata?.avatar_url}
          userName={session.user?.user_metadata?.user_name}
          userFullName={session.user?.user_metadata?.name}
        />
      </header>
      <main className="flex grow pt-3 shrink min-h-screen flex-row justify-center items-start">
        <MainContent userAvatarUrl={session.user?.user_metadata?.avatar_url} posts={posts} />
        <Aside />
      </main>
    </div>
  )
}
