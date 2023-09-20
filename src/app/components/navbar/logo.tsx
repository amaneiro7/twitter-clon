import Link from 'next/link'
import { LogoIcon } from '../icons'

export function Logo () {
  return (
        <h1
                    role='heading'
                    className='max-w-full py-1'
                >
                    <Link
                        href="/home"
                        className='min-w-[52px] min-h-[52px] cursor-pointer'
                    >
                        <LogoIcon />
                    </Link>
                </h1>
  )
}
