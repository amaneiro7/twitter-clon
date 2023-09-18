'use client'
import { Input } from '@nextui-org/react'
import { SearchIcon } from '../icons'

export function Aside () {
  return (
        <aside>
            <div className='flex flex-row rounded-lg bg-slate-700 p-2'>
                <SearchIcon className='w-6 h-6 mr-2'/>
                <Input
                    type="text"
                    title="search"
                    placeholder="Buscar"
                >

                </Input>
            </div>
        </aside>
  )
}
