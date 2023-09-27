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
    <Card className="flex flex-row gap-2 py-2 px-4 shadow-none bg-transparent rounded-none hover:bg-gray-950/80 transition border-b border-white/20 cursor-pointer">
      <Link href={`/${userName}`}>
        <UserAvatar avatarUrl={avatarUrl}/>
      </Link>
      <CardBody className='p-0 gap-[2px]'>
        <CardHeader className="p-0 pl-2 justify-between rounded-none">
          <div className="flex gap-x-2">
            <div className="flex flex-row gap-1 items-center justify-center">
              <h4 className="text-base font-bold leading-none text-default-600">{userFullName}</h4>
              <h5 className="text-sm tracking-tight text-default-400">@{userName}</h5>
            </div>
          </div>
        </CardHeader>
        <CardBody className="text-sm text-white px-0 pl-2">
          <p>
            {content}
          </p>
        </CardBody>
        <CardFooter className="rounded-none gap-3 flex text-default-400 place-content-between p-0">
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
      </CardBody>
    </Card>
  )
}
