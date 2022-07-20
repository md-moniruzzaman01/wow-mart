import { IoIosArrowForward } from "react-icons/io";
import style from '../../styles/Home.module.css'
import FleshCard from '../Flash Deals/FleshCard'
import banner3 from '../../public/banner3.jpg'
import Image from 'next/image';
import BestSellerCard from "./BestSellerCard";
import Link from "next/link";
const NewArrivals = ({ NewArrivels,Bestseller }) => {
    return (
        <div className={style.arraivlsSection}>
            <div className="bg-accents my-11">
                <div className="flex justify-between items-center py-2 mx-2 border-b">
                    <h2 className="text-3xl">New Arrivals</h2>
                    <Link href="/products"><a><button className="flex items-center">View All <span className="ml-1 text-xl"><IoIosArrowForward/></span></button></a></Link> 
                    

                </div>

                <div className="mt-5 flex justify-center relative">
                    <Image src={banner3} width={1000}  alt="" />
                    <div className='absolute inset-1/5 md:inset-1/4 text-center text-gray-800 space-y-0 md:space-y-1'>
                        <h1 className="text-base md:text-4xl font-semibold">Kitchen Utensils</h1>
                        <p className="pb-2 text-xs md:text-base">Itss long established fact that render</p>
                        <button className='bg-white px-5 md:px-11 py-0.5 md:py-1.5 font-semibold '>Shop </button>

                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 my-5">
                    {
                        NewArrivels.map(fd => <FleshCard key={fd._id} flashDeals={fd}></FleshCard>)
                    }
                </div>
            </div>

            <div className="bg-accents my-11">
                <div className="flex justify-between items-center py-2 mx-2 border-b">
                    <h2 className="text-3xl">Best Seller</h2>

                    <Link href="/products"><a><button className="flex items-center">View All <span className="ml-1 text-xl"><IoIosArrowForward/></span></button></a></Link> 

                </div>

                <div  className="mt-2 mx-4">
                    {
                     
                     Bestseller.map(fd => <BestSellerCard  key={fd._id} flashDeals={fd}></BestSellerCard>)
                       
                    }
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;