'use client'
import { useState } from 'react'
import { DotsIcon } from '../icons'
import { UserAvatar } from '../user-avatar'
import { SignOutBox } from '../sign-out-box/sign-out-box'
import { type Session } from '@supabase/supabase-js'

export interface Props {
  userAvatarUrl: string
  userFullName: string
  userName: string
  session: Session
}

export function ButtonLogOut ({
  userAvatarUrl,
  userName,
  userFullName,
  session
}: Props) {
  const [isSignOutBox, setIsSignOutBox] = useState<boolean>(false)
  const handleSignOutBox = () => {
    setIsSignOutBox(!isSignOutBox)
  }
  return (
    <>
      {isSignOutBox && <SignOutBox session={session}/>}
      <button
        className='w-full p-3 rounded-full hover:bg-slate-800 transition cursor-pointer'
        onClick={handleSignOutBox}
      >
        <div className="flex gap-x-2 justify-between items-center">
          {(userAvatarUrl !== undefined) && <UserAvatar avatarUrl={userAvatarUrl} />}
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-[15px] font-bold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-[15px] tracking-tight text-default-400">@{userName}</h5>
          </div>
          <DotsIcon className='w-6 h6 mr-2' />
        </div>
      </button>
    </>
  )
}
