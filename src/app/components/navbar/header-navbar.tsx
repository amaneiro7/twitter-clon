import Link from 'next/link'
import { UserAvatar } from '../user-avatar'
import { HomeIcon, ListIcon, LogoIcon, MessageIcon, NewPostIcon, NotificationIcon, OptionsIcon, ProfileIcon, SearchIcon } from '../icons'
import { AuthButtonServer } from '../auth-button-server'

export interface Props {
  userAvatarUrl: string
  username: string
}
export async function Header ({
  userAvatarUrl,
  username
}: Props) {
  return (
    <header className='min-w-fit'>
        <div className='flex flex-col w-[88px] items-end gap-8'>
            <div className='h-full top-0 fixed basis-0 flex flex-col justify-around items-end gap-8'>
                <AuthButtonServer />
                <h1
                    role='heading'
                    className='max-w-full py-1'
                >
                    <Link
                        href="/"
                        className='min-w-[52px] min-h-[52px] cursor-pointer'
                    >
                        <LogoIcon />
                    </Link>
                </h1>
                <nav className='flex-1'>
                    <ul className='h-full flex flex-col gap-8'>
                        <li>
                            <Link href='#'>
                                <HomeIcon />
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <SearchIcon />
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <NotificationIcon/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <MessageIcon />
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <ListIcon />
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                            </Link>
                        </li>
                        <li>
                            <button
                                title='verifed account'
                            >
                                <LogoIcon />
                            </button>
                        </li>
                        <li>
                            <Link href='#'>
                                <ProfileIcon />
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <OptionsIcon />
                            </Link>
                        </li>
                        <li>
                            <button
                                type="button"
                                title='new Tweet'
                            >
                                <NewPostIcon />
                            </button>
                        </li>
                    </ul>
                </nav>
            <Link href={`/${username}`}>
                {(userAvatarUrl !== undefined) && <UserAvatar avatarUrl={userAvatarUrl}/>}
            </Link>
            </div>
        </div>
    </header>
  )
}
