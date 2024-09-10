'use client'

import { userState } from '@/recoil/store/userState'
import React from 'react'
import { useRecoilState } from 'recoil'

type Props = {}

export default function UserList({ }: Props) {

    const [users, setUsers] = useRecoilState(userState)

    const removeUser = (id: string) => {
        const data = users.filter((user) => user.id !== id)
        setUsers(data)
        localStorage.setItem('users', JSON.stringify(data))
    }

    return (
        <div className='min-h-32 border-2 border-gray-500 p-2'>
            <div className='h-auto flex flex-col gap-4'>
                <h1 className='text-2xl font-semibold'>User List</h1>
                {users.map((user) => (
                    <div key={user.id} className='flex flex-col items-center p-2 border-2 border-orange-200 rounded-md'>
                        <h1>ID: {user.id}</h1>
                        <p>Name: {user.name}</p>
                        <button onClick={() => removeUser(user.id)} className='p-1 bg-red-400 hover:bg-red-600 rounded-md text-red-900 hover:text-red-100 transition duration-150'>Remove User</button>
                    </div>
                ))}
            </div>
        </div>
    )
}