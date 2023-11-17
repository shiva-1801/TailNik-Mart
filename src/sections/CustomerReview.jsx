import React from 'react'
import { reviews } from '../constants'
import ReCard from '../components/ReCard'
const CustomerReview = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-5">
      <div>
        <h1 className="mt-3 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          What Our&nbsp;
          <span className=" text-coral-red inline-block mt-3">
            Customer&nbsp;
          </span>
          Say?
        </h1>
        <p className="text-slate-gray text-lg leading-8 mt-6 mv-14 w-full">
          Lorem ipsum . Placeat architecto inventore eaque nesciunt, rerum
          eligendi?
        </p>
      </div>
      <div className="  ml-4 mt-16 grid lg:grid-row  sm:gap-4 gap-14">
        {reviews.map((product) => (
          <ReCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default CustomerReview