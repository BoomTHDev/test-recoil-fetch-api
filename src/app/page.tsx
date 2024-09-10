import ProductList from '@/components/ProductList'
import ProductsList from '@/components/ProductsList'
import { getData } from '@/lib/getData'
import { Product } from '@/type/productType'
import React from 'react'

type Props = {}

export default async function Home({}: Props) {
  const url_to_fetch_all = 'https://fakestoreapi.com/products'
  const url_to_fetch_by_id = 'https://fakestoreapi.com/products/4'
  const products: Product[] = await getData(url_to_fetch_all)
  const product1: Product = await getData(url_to_fetch_by_id)

  return (
    <div className='flex flex-col items-center gap-8 p-8'>
      <h1 className='text-4xl font-bold mb-8'>Products</h1>
        <ProductsList productData={products} />
        <ProductList productData={product1} />
    </div>
  )
}
