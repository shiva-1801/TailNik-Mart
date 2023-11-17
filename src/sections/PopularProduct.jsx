import React from 'react'
import { products } from '../constants';
import PopularProductCard from '../components/PopularProductCard';
const PopularProduct = () => {
  return (
    <sectiom id="products" 
    className=" max-container max-sm:mt-12">
       <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'> Our <span className='text-coral-red'>Popular </span>Products</h2>
        <p className='text-slate-gray text-lg leading-8 mt-2 mv-14'>Lorem ipsum, dols. Corrupti voluptatum repellat placeat molestias impedit quidem!</p>

       </div>
       <div className='  ml-4 mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-col-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map((product)=>(
          <PopularProductCard key={product.name}{...product}/>
        ))}
        
        </div>
    </sectiom>
  )
}

export default PopularProduct;