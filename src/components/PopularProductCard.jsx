import React from 'react'
import {star} from '../assets/icons'
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL}  
      width={280}
      height={280}/>
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} width={24}
        height={24}  />
        <p className='text-slate-gray font-montserrat text-xl leading-normal font-bold'>(4.5)</p>
      </div>
      <h3 className='mt-2  leading-normal font-semibold font-palanquin '>{name}</h3>
      <p className='mt-2 font-semibold text-coral-red font-montserrat'>{price}</p>
    </div>
    
  )
}

export default PopularProductCard