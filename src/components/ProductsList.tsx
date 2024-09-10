'use client'

import { productsState } from '@/recoil/store/productState'
import { Product } from '@/type/productType'
import React from 'react'
import { useRecoilState } from 'recoil'

type Props = {
    productData: Product[]
}

export default function ProductList({ productData }: Props) {

    const [products, setProducts] = useRecoilState(productsState)

    if (productData) {
        setProducts(productData)
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                productData.map((product, index) => (
                    <div key={index} className='flex flex-col items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300'>
                        <img src={product.image} alt={product.title} className='w-32 h-32 object-contain mb-4' />
                        <h2 className='text-lg font-semibold mb-2 text-center'>{product.title}</h2>
                        <p className='text-sm text-gray-600 mb-2 text-center'>{product.description.substring(0, 60)}...</p>
                        <p className='text-md font-bold text-blue-500'>${product.price}</p>
                    </div>
                ))
            }
        </div>
    )
}