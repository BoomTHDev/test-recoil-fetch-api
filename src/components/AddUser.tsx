'use client'

import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { userState } from '@/recoil/store/userState'
import { v4 as uuidv4 } from 'uuid'

type Props = {}

export default function AddUser({ }: Props) {

    const [name, setName] = useState('')
    const [users, setUsers] = useRecoilState(userState)

    // Load users from localStorage
    useEffect(() => {
        const storedUsers = localStorage.getItem('users')
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers))
        }
    }, [setUsers])

    // Save users to localStorage
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    const addUser = () => {
        if (name) {
            const newUser = {
                id: uuidv4(),
                name
            }
            setUsers([...users, newUser])
            setName('')
        } else {
            alert('Name is required')
        }
    }

    return (
        <div className='min-h-32 border-2 border-gray-500 p-2'>
            <div className='h-auto flex flex-col gap-4'>
                <h1 className='text-2xl font-semibold'>AddUser</h1>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='border border-gray-500 rounded-md p-2' placeholder='User Name item' />
                <button onClick={addUser} className='p-2 bg-green-400 hover:bg-green-600 rounded-md text-green-900 hover:text-green-100 transition duration-150'>Add User</button>
                <Link href='/remove-user' className='hover:text-blue-400 hover:underline'>Remove User</Link>
            </div>
        </div>
    )
}