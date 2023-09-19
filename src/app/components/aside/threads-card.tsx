import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'
import { Title } from './title'
import Link from 'next/link'

export function ThreadsCard () {
  return (
        <Card>
            <CardHeader className='px-5'>
                <Title title='Tendencias para ti'/>
            </CardHeader>
            <CardBody className='flex flex-row justify-between pb-2'>
                <div className='text-sm font-medium text-white/40'>
                    <span>Deportes · Tendencia</span>
                    <p className='text-base text-white'>Manchester City</p>
                    <span>17 mil posts</span>
                </div>
                <span></span>
            </CardBody>
            <CardFooter className='px-5 hover:bg-slate-800 transition cursor-pointer'>
                <Link
                    href={'#'}
                    className='text-sky-500'
                >
                    Mostrar más
                </Link>
            </CardFooter>
        </Card>
  )
}
