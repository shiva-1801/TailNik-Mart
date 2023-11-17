import React from 'react'
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg  font-bold">
          We Provide You<span className=" text-coral-red inline-block mt-3">&nbsp;Super</span>
          <br />
          <span className=" text-coral-red inline-block mt-3">Quality&nbsp;
           </span>
            Shoes
        </h2>
        <p className="info-text lg:max-w-lg mt-4">
          Lorem ipsum . Placeat architecto inventore eaque nesciunt, rerum
          eligendi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illum minus nesciunt, molestiae ratione ea tempora doloribus adipisci voluptatum iste cum molestiae, eligendi! Laborum, dolorum.
        </p>
        <div className='mt-11'>
        <button
          type="button"
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Weiw Details
        </button>
        </div>
      </div>
      <div
      className='flex-1 flex justify-center items-center'>
        <img src={shoe8} 
        width={570}
        height={490} />
      </div>
    </section>
  );
}

export default SuperQuality