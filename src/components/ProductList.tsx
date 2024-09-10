import { Product } from '@/type/productType'
import React from 'react'

type Props = {
    productData: Product
}

export default function ProductList({ productData }: Props) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

            <div className='flex flex-col items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300'>
                <img src={productData.image} alt={productData.title} className='w-32 h-32 object-contain mb-4' />
                <h2 className='text-lg font-semibold mb-2 text-center'>{productData.title}</h2>
                <p className='text-sm text-gray-600 mb-2 text-center'>{productData.description.substring(0, 60)}...</p>
                <p className='text-md font-bold text-blue-500'>${productData.price}</p>
            </div>
        </div>
    )
}