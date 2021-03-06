import Image from 'next/image';
import banner1 from '../../public/banner1.jpg';
import banner2 from '../../public/banner2.jpg';




const Ads1 = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            <div className="flex justify-center  bg-slate-300 items-center my-5 relative">
                <Image src={banner1} width={800} alt="" />
                <div className='absolute inset-y-1/6 md:inset-y-1/4  left-4 max-w-[15rem] md:max-w-xs space-y-0 md:space-y-5'>
                    <h2 className='text-2xl md:text-4xl font-semibold text-white'>Meet Alpinerx Blue New Version</h2>
                    <p className='text-white'>It’s a long established fact that a reader.</p>
                    <button className='px-9 py-2 bg-white font-semibold'>Shop Now</button>
                </div>
            </div>
            <div className="flex justify-center  bg-slate-500 items-center my-5 relative">
                <Image src={banner2} width={800} alt="" />
                <div className='absolute inset-y-1/6 md:inset-y-1/4  left-4 max-w-[15rem] md:max-w-xs space-y-0 md:space-y-5'>
                    <h2 className='text-2xl md:text-4xl font-semibold text-white'>Toy Story Toons
                        Small Fry</h2>
                    <p className='text-white'>It’s a long established fact that a reader.</p>
                    <button className='px-9 py-2 bg-white font-semibold'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Ads1;