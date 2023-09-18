import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from 'next/navigation'
import { PostLists } from './components/post-list'
import { type Database } from './types/database'
import { ComposePost } from './components/compose-posts'
import { Header } from './components/navbar/header-navbar'
import { Aside } from './components/aside/aside'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(name, user_name,avatar_url)')
  return (
    <div className='w-full flex flex-row justify-center'>
      <Header
        userAvatarUrl={session.user?.user_metadata?.avatar_url}
        username={session.user?.user_metadata?.usermane}
      />
      <main className="flex flex-1 min-h-screen flex-row items-center justify-between">
        <section className='w-full mx-auto border-l border-r border-white/20 min-h-screen'>
          <ComposePost userAvatarUrl={session.user?.user_metadata?.avatar_url} />
          <PostLists posts={posts} />
        </section>
        <Aside />
      </main>
    </div>
  )
}
