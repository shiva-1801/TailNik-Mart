import React from 'react'
import { star } from '../assets/icons'
const ReCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex flex-1 flex-col justify-center items-center w-full max-sm:w-full'>
      <img src={imgURL}  
      className=' rounded-full'
      width={195}
      height={195}/>
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} width={24}
        height={24}  />
        <p className='text-slate-black font-montserrat text-l leading-normal font-bold'>{rating}</p>
      </div>
      <h3 className='mt-2 text-coral-red leading-normal text-xl font-semibold font-palanquin '>{customerName}</h3>
      <p className='mt-2 font-semibold text-slate-gray font-montserrat'>{feedback}</p>
    </div>
  )
}

export default ReCard