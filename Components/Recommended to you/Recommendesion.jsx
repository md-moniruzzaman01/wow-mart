import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

import FleshCard from '../Flash Deals/FleshCard'
const Recommendesion = ({Recommendation}) => {
    return (
        <div className="bg-accent min-h-[60vh] px-2">
        <div className="flex justify-between items-center py-2 mx-2 border-b">
            <h2 className="text-3xl font-semibold">Recommended To You</h2>
            
            <Link href="/products"><a><button className="flex items-center">View All <span className="ml-1 text-xl"><IoIosArrowForward/></span></button></a></Link> 

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5">
        {
                Recommendation.map(fd=> <FleshCard key={fd._id} flashDeals={fd}></FleshCard>)
            }
        </div>
        <div className="flex justify-center my-5 pb-4">
        <Link href="/products"><a><button className=' px-11 py-2 font-semibold bg-secondary text-info  text-xl'>View All</button></a></Link> 

        
        </div>
    </div>
    );
};

export default Recommendesion;