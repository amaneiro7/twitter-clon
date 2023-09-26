import { type Session } from '@supabase/supabase-js'
import { ButtonLogOut } from './button-log-out'
import { NavbarList } from './NavbaList'

export interface Props {
  userAvatarUrl: string
  userFullName: string
  userName: string
  session: Session
}
export async function Header ({
  userAvatarUrl,
  userName,
  userFullName,
  session
}: Props) {
  return (
      <div className='flex flex-col w-[275px] top-0 fixed h-full overflow-y-auto overflow-x-auto justify-around self-end items-end gap-8'>
        <div className='h-full top-0 fixed basis-0 flex flex-col justify-around items-start gap-8'>
          <NavbarList />
          <ButtonLogOut session={session} userAvatarUrl={userAvatarUrl} userName={userName} userFullName={userFullName} />
        </div>
      </div>
  )
}
