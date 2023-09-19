import { Card, CardBody, CardFooter } from '@nextui-org/react'
import { CommonButton } from './button'
import { Title } from './title'

export function SuscribeCard () {
  return (
        <Card>
              <CardBody
                className='font-bold text-white'
              >
                <Title title='Suscríbete a Premium' />
                <p className='text-sx'>
                  Suscríbete para desbloquear nuevas funciones y, si eres elegible, recibir un pago de cuota de ingresos por anuncios.
                </p>
              </CardBody>
              <CardFooter>
                <CommonButton text='Suscribirse'/>
              </CardFooter>
            </Card>
  )
}
