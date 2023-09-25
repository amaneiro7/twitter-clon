import { type Post } from '@/app/types/posts'
import { ComposePost } from '../compose-posts'
import { PostLists } from '../post-list'

export interface Props {
  userAvatarUrl: string
  posts: Post[]
}

export function MainContent ({ userAvatarUrl, posts }: Props) {
  return (
        <section className='max-w-[600px] w-full flex-1 border-l border-r border-white/20 min-h-screen'>
        <ComposePost userAvatarUrl={userAvatarUrl} />
        <PostLists posts={posts} />
      </section>
  )
}
