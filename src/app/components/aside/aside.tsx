'use client'
import { SearchInput } from './search-input'
import { SuscribeCard } from './suscribe-card'
import { ThreadsCard } from './threads-card'

export function Aside () {
  return (
        <aside className='w-[350px] px-8 flex flex-col gap-4'
        >
            <SearchInput />
            <SuscribeCard />
            <ThreadsCard />
        </aside>
  )
}
