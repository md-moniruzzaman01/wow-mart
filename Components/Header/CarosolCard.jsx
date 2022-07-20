import Image from 'next/image';
import React from 'react';
import { BsArrowRight } from "react-icons/bs";
const CarosolCard = ({ data }) => {

    return (
        <div className='relative'>
            <Image src={data.img} width={1600} height={600} alt="slider image" />
            <div className='absolute inset-y-1/4  left-4 md:left-20 max-w-xs md:max-w-md'>
                <p className='text-primary text-base md:text-3xl font-semibold '>Daily Deals</p>
                <h2 className='text-3xl md:text-8xl  font-semibold mb-2 md:mb-5'>{data.title}</h2>
              <p className='text-base md:text-4xl flex items-start font-semibold  mb-2 md:mb-7'>Today:  <span className='text-primary text-base md:text-6xl ml-2'>${data.price}</span> </p>
                <button className='btn-sm md:btn-md btn btn-primary px-2 md:px-11 rounded-3xl'>Click Here <span className='text-xl ml-2'><BsArrowRight/></span> </button>

            </div>

        </div>
    );
};

export default CarosolCard;