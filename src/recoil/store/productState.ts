import { Product } from '@/type/productType'
import { atom } from 'recoil'

export const productsState = atom<Product[]>({
    key: 'products',
    default: []
})

export const productState = atom<Product>({
    key: 'product',
    default: {
        id: 0,
        title: '',
        price: '',
        category: '',
        description: '',
        image: '',
    }
})