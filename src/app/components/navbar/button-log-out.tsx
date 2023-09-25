import { DotsIcon } from '../icons'
import { UserAvatar } from '../user-avatar'

export interface Props {
  userAvatarUrl: string
  userFullName: string
  userName: string
}

export function ButtonLogOut ({
  userAvatarUrl,
  userName,
  userFullName
}: Props) {
  return (
        <button className='w-full p-3 rounded-full hover:bg-slate-800 transition cursor-pointer'>
        <div className="flex gap-x-2 justify-between items-center">
          {(userAvatarUrl !== undefined) && <UserAvatar avatarUrl={userAvatarUrl} />}
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-[15px] font-bold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-[15px] tracking-tight text-default-400">@{userName}</h5>
          </div>
          <DotsIcon className='w-6 h6 mr-2'/>
        </div>
      </button>
  )
}
