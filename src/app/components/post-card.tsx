'use client'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react'
import { IconMessageCircle, IconHeart, IconRepeat } from '@tabler/icons-react'
import Link from 'next/link'
import { UserAvatar } from './user-avatar'

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
          <div className="flex flex-col gap-1 items-start justify-center">
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
        <button type='button' title='Message Button'>
            <IconMessageCircle className="w-4 h-4"/>
        </button>
        <button type='button' title='Like Button'>
            <IconHeart className="w-4 h-4"/>
        </button>
        <button type='button' title='Retweet Button'>
            <IconRepeat className="w-4 h-4"/>
        </button>
      </CardFooter>
    </Card>
  )
}
