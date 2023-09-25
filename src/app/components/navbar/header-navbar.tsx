import Link from 'next/link'
import { HomeIcon, ListIcon, LogoIcon, MessageIcon, NotificationIcon, ProfileIcon, SearchIcon } from '../icons'
import { AuthButtonServer } from '../auth-button-server'
import { Logo } from './logo'
import { ButtonLogOut } from './button-log-out'
import { ButtonOption } from './button-option'
import { SignOutBox } from '../sign-out-box/sign-out-box'

export interface Props {
  userAvatarUrl: string
  userFullName: string
  userName: string
}
export async function Header ({
  userAvatarUrl,
  userName,
  userFullName
}: Props) {
  const navbarList = [
    {
      href: '/home',
      component: <Logo />,
      text: ''
    },
    {
      href: '/home',
      component: <HomeIcon />,
      text: 'Inicio'
    },
    {
      href: '/explore',
      component: <SearchIcon />,
      text: 'Explorar'
    },
    {
      href: '/notifications',
      component: <NotificationIcon />,
      text: 'Notificaciones'
    },
    {
      href: '/messages',
      component: <MessageIcon />,
      text: 'Mensajes'
    },
    {
      href: '/lists',
      component: <ListIcon />,
      text: 'Listas'
    },
    {
      href: 'i/verified-choose',
      component: <LogoIcon />,
      text: 'Verificado'
    },
    {
      href: '/profile',
      component: <ProfileIcon />,
      text: 'Perfil'
    }

  ]
  return (
    <header className='min-w-fit'>
      <div className='flex flex-col w-[275px] h-full overflow-y-auto items-end gap-8'>
        <div className='h-full top-0 fixed basis-0 flex flex-col justify-around items-end gap-8'>
          <nav className='flex-1'>
            <ul className='h-full flex flex-col'>
              {navbarList.map((data, index) => (
                <li key={index} className='flex flex-row w-min items-center justify-between p-3 rounded-full text-center hover:bg-slate-800 transition cursor-pointer'>
                  <Link href={data.href} className='flex flex-row'>
                    {data.component}
                    {(data.text !== '') && <p className='text-xl ml-5 mr-4'>
                      {data.text}
                    </p>}
                  </Link>
                </li>
              )
              )}
              <li>
                <ButtonOption />
              </li>
              <li className='w-full items-center justify-between p-3 rounded-full text-center mt-2 bg-sky-500 hover:bg-sky-500/90 transition cursor-pointer'>
                <Link href='/compose/tweet' className='w-full text-xl'>
                  Postear
                </Link>
              </li>
            </ul>
          </nav>
          <SignOutBox userName={userName}/>
          <ButtonLogOut userAvatarUrl={userAvatarUrl} userName={userName} userFullName={userFullName} />
          <AuthButtonServer />
        </div>
      </div>
    </header>
  )
}
