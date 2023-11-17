import React from 'react'

const SpecialOffer = () => {
  return (
    <section>
      <h1 className='mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
      <span className=' text-coral-red inline-block mt-3'>Nike&nbsp; </span>
          <span className='xl:bg-white  xl:whitespace-nowrap relative pr-10'>Offer</span>
          
        </h1>
        <p className="info-text w-full  mt-4">
          Lorem ipsum . Placeat architecto inventore eaque nesciunt, rerum
          eligendi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illum minus nesciunt, molestiae ratione ea tempora doloribus adipisci voluptatum iste cum molestiae, eligendi! Laborum, dolorum.
        </p>
      <div className='mt-7'>
      <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Shop Now</button>
      <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Leran More</button>
      </div>
    </section>
  )
}

export default SpecialOffer
