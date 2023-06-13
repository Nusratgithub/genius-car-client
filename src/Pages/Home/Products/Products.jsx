import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductHeading from './ProductHeading'
import ProductItem from './ProductItem'
import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'

const Products = () => {

   const products =[
    {
        "_id": "635f88091e00ce3c5832cd35",
        "product_id": "01",
        "title": "Car Engine Plug",
        "img": img6,
        "price": "20.00"
    },
    {
        "_id": "635f88186478e3ad5a561b19",
        "product_id": "02",
        "title": "Car Air Filter",
        "img": img3,
        "price": "20.00"
    },
    {
        "_id": "635f882115b6d4abb4399713",
        "product_id": "03",
        "title": "Cools Led Light",
        "img": img1,
        "price": "20.00"
    },
    {
        "_id": "635f882115b6d4abb4399713",
        "product_id": "03",
        "title": "Cools Led Light",
        "img": img2,
        "price": "20.00"
    },
    {
        "_id": "635f882115b6d4abb4399713",
        "product_id": "03",
        "title": "Cools Led Light",
        "img": img5,
        "price": "20.00"
    },
    {
        "_id": "635f882115b6d4abb4399713",
        "product_id": "03",
        "title": "Cools Led Light",
        "img": img4,
        "price": "20.00"
    }
]
    
   

    return (
        <section className='container mx-auto mb-b-70 lg:mb-b-130'>
            <ProductHeading />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-b-50'>
                {
                    products.map(product => (
                        <ProductItem key={product?._id} product={product} />
                    ))
                }
            </div>
            <div className='text-center my-14'>
                <Link
                    to="/products"
                    className="font-semibold transition-colors duration-200 text-red-500 text-lg leading-21 border border-red-500 px-[22px] py-[17px] rounded-md hover:bg-red-500 hover:text-white"
                    aria-label="More Products"
                    title="More Products"
                >
                    More Products
                </Link>
            </div>
        </section>
    )
}

export default Products