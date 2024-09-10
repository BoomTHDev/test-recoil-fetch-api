import { User } from '@/type/userType'
import { atom } from 'recoil'

export const userState = atom<User[]>({
    key: 'user',
    default: []
})
