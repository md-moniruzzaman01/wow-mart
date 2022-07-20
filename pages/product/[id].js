

import { useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { HiMinusSm } from "react-icons/hi";
import style from '../../styles/Home.module.css'
const product = ({ data }) => {
    const quantity = 4
    const { title, picture, driscribtion, company, sells, price,color} = data;
 
  
   
    console.log(quantity);
    return (
        <div className={style.detailsSection}>
            <div>
                list
            </div>
            <div className='bg-accent static md:flex justify-between mt-5'>
                <div className='w-full md:w-6/12 m-4'>
                    <img className='w-10/12 mx-auto' src={picture} alt="" />
                </div>
                <div className='w-10/12 md:w-7/12 mx-auto md:mx-11 my-11'>
                    <h1 className='font-semibold text-xl md:text-2xl'>{title}</h1>
                    <div className='py-1 md:py-3 bg-info my-5 w-11/12'><p className='text-2xl font-semibold ml-5'>{price}</p></div>
                    <article>
                        {driscribtion}
                    </article>
                   <div className="flex  items-center mt-5">
                   <div className="flex items-center ">
                        
                        <button  className="text-base md:text-3xl p-.5 bg-info"><BsPlus /></button>
                     <p className="px-4 text-base md:text-xl">{quantity}</p>
                        <button className="text-base md:text-3xl p-.5 bg-info"><HiMinusSm /></button>
                        
                    </div>

                    <div>
                    <button className='bg-primary px-5 md:px-11 py-1 md:py-2 text-gray-800 font-semibold text-base md:text-xl ml-5 md:ml-11'>Add to Card</button>
                    </div>
                   </div>
                    

                </div>
            </div>
        </div>
    );
};


export async function getServerSideProps(context) {
    const { id } = await context.query;

    const res = await fetch(`http://localhost:3000/api/details/${id}`);
    const data = await res.json();

    return { props: { data } };
}

export default product;