
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { RiH1 } from "react-icons/ri";
import FleshCard from './FleshCard'
const FlashDeals = ({flashDeals}) => {
    
    return (
        <div className="bg-accent min-h-[60vh] px-2">
            <div className="flex justify-between items-center py-2 mx-2 border-b">
                <h2 className="text-3xl">Flash Deals</h2>
                <p className="flex items-center">End In :
                    <span className="countdown font-mono text-xl ml-2">
                        <span className="--value:10;"></span>h
                        <span className="--value:24;"></span>m
                        <span className="--value:18;"></span>s
                    </span>
                </p>
                <Link href="/products"><a><button className="flex items-center">View All <span className="ml-1 text-xl"><IoIosArrowForward/></span></button></a></Link> 

            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5">
            {
                    flashDeals.map(fd=> <FleshCard key={fd._id} flashDeals={fd}></FleshCard>)
                }
            </div>
        </div>
    );
};

export default FlashDeals;