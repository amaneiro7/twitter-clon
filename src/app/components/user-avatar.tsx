'use client'

import { Avatar } from '@nextui-org/react'

export function UserAvatar ({ avatarUrl }: { avatarUrl: string }) {
  return <Avatar radius="full" size="md" src={avatarUrl} />
}
