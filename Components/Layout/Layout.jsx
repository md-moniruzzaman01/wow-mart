
import { MdSearch } from "react-icons/md";

import Link from "next/link";

import NavTop from '../sharefile/NavTop';
import NavlogoSearch from '../sharefile/NavlogoSearch';
import Navbuttom from '../sharefile/Navbuttom';
import Footer from '../sharefile/Footer';
import Head from 'next/head'

const Layout = ({ children }) => {

    return (
        <>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.19.1/dist/full.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com" async></script>
        </Head>
            <div className="drawer drawer-end ">
                <input id="nav-drower" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <NavTop />
                    <NavlogoSearch />
                    <Navbuttom />
                    {children}
                    <Footer />
                </div>

                {/* drower */}
                <div className="drawer-side">
                    <label htmlFor="nav-drower" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80  text-info bg-secondary">
                        <li className="w-full">
                            <div className=' flex bg-warning'>
                                <input className='h-11 w-11/12 px-2 bg-neutral' type="search" name="search" id="" placeholder='Search here....' />
                                <button className='text-info text-3xl flex items-center'><MdSearch /></button>
                            </div>
                        </li>
                        <li><a>Browse Cetagories</a></li>
                        <li> <Link href="/"><a>Home</a></Link> </li>
                        <li><Link href="/shop"><a>Shop</a></Link></li>
                        <li><Link href="/products"><a>Products</a></Link></li>
                        <li><Link href="/blog"><a>Blogs</a></Link></li>
                        <li><Link href="/contact"><a>Contact us</a></Link></li>
                        <li><Link href="/about"><a>About us</a></Link></li>
                        <li><a>Sidebar Item 2</a></li>


                    </ul>

                </div>
                <script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js" async></script>
            </div>

        </>
    );
};

export default Layout;