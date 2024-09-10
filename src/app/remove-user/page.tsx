'use client'

import UserList from '@/components/UserList'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function RemoveUser({ }: Props) {

    return (
        <div className='p-8 flex flex-col gap-4'>
            <UserList />
            <Link href='/' className='hover:text-blue-400 hover:underline'>Home Page</Link>
        </div>
    )
}