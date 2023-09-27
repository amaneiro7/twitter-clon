'use client'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react'
import { IconMessageCircle, IconHeart, IconRepeat } from '@tabler/icons-react'
import Link from 'next/link'
import { UserAvatar } from './user-avatar'
import { ShareIcon, StadisticsIcon } from './icons'

export function PostCard ({
  userFullName,
  userName,
  avatarUrl,
  content
}: {
  userFullName: string
  userName: string
  avatarUrl: string
  content: string
}) {
  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-800 transition border-b border-white/20 cursor-pointer">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
            <Link href={`/${userName}`}>
              <UserAvatar avatarUrl={avatarUrl}/>
            </Link>
          <div className="flex flex-row gap-1 items-center justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3 flex place-content-between">
        <button
          type='button'
          title='Message Button'
          className='flex flex-row text-xs justify-center items-center gap-2 rounded-full p-2 transition-colors hover:bg-blue-500/10 hover:text-blue-500'
        >
            <IconMessageCircle className="w-4 h-4"/>
            <span>242</span>
        </button>
        <button
          type='button'
          title='Retweet Button'
          className='flex flex-row text-xs justify-center items-center gap-2 rounded-full p-2 transition-colors hover:bg-green-500/10 hover:text-green-500'
        >
            <IconRepeat className="w-4 h-4 rotate-90"/>
            <span>830</span>
        </button>
        <button
          type='button'
          title='Like Button'
          className='flex flex-row text-xs justify-center items-center gap-2 rounded-full p-2 transition-colors hover:bg-red-500/10 hover:text-red-500'
        >
            <IconHeart className="w-4 h-4"/>
            <span>7.747</span>
        </button>
        <button
          type='button'
          title='Like Button'
          className='flex flex-row text-xs justify-center items-center gap-2 rounded-full p-2 transition-colors hover:bg-blue-500/10 hover:text-blue-500'
        >
            <StadisticsIcon className="w-4 h-4"/>
            <span>2.1M</span>
        </button>
        <button
          type='button'
          title='Like Button'
          className='flex flex-row text-xs justify-center items-center gap-2 rounded-full p-2 transition-colors hover:bg-blue-500/10 hover:text-blue-500'
        >
            <ShareIcon className="w-4 h-4"/>
        </button>
      </CardFooter>
    </Card>
  )
}
