import Link from 'next/link'
import { HomeIcon, ListIcon, LogoIcon, MessageIcon, NotificationIcon, ProfileIcon, SearchIcon } from '../icons'
import { Logo } from './logo'
import { ButtonOption } from './button-option'

export function NavbarList () {
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
  )
}
