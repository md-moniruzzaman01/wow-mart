
import { BsTelephone } from "react-icons/bs";
import { themeChange } from 'theme-change'
import { useEffect } from 'react'
import { MdSearch } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import logo from '../../public/logo.png'
import Image from "next/image";
const Navbar = ({ children }) => {

    const liLinks =
        <>
            <li className="hover:text-primary"><a>My Account</a></li>
            <li className="hover:text-primary"><a>My Wishlist</a></li>
            <li className="hover:text-primary"><a>Checkout</a></li>

        </>
    useEffect(() => {
        themeChange(false)
    }, [])
    return (
        <>
            <div className="bg-secondary ">
                {/* top nav bar section  */}
                <div className="container flex justify-between text-info mx-auto border-b border-slate-600">
                    <div className="flex items-center py-2  hover:text-primary">
                        <p><BsTelephone /></p>
                        <p className="pl-1">Call: +8801881965826</p>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0 hidden md:flex">
                            {liLinks}
                        </ul>

                        <div className="dropdown dropdown-end block md:hidden">
                            <label tabIndex="0" className="btn btn-ghost">
                                <p className="flex items-center hover:text-primary">
                                    Links<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </p>
                            </label>
                            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-1 p-2 shadow bg-base-100 rounded-box w-32">
                                {liLinks}
                            </ul>
                        </div>
                    </div>

                </div>

            </div>


            {/* drower */}


            <div className="drawer drawer-end  bg-slate-500">
                <input id="nav-drower" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <div className="text-base-100 bg-secondary flex items-center justify-between">
                        <div className="flex-1 px-2 mx-2 text-4xl flex items-center">
                        
                        <div>
                        <Image className="" height={50} width={60} src={logo} alt="logo of wow mart"/>
                        </div>
                        <p>wow-mart</p>
                        
                        
                         </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="nav-drower" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className='w-6/12 hidden lg:flex mx-auto my-4'>
                            <input className='bg-base-100 px-7 rounded-l-3xl w-11/12 h-11 text-gray-800' type="search" name="search" id="" placeholder='Search here....' />
                            <button className='flex  justify-center items-center px-5 bg-info rounded-r-3xl h-11'><MdSearch />Search</button>
                        </div>

                        <div className="flex-none  w-3/12 hidden lg:flex justify-end">
                            <ul className="menu menu-horizontal">

                                <li><a>Navbar Item </a></li>
                                <li><a>Navbar Item 1</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="container flex items-center mx-auto gap-x-4  font-semibold text-xl border-b border-slate-200">
                        <ul className="menu  w-3/12">
                            <li>
                                <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                   Browse Cetagories
                                </a>
                            </li>
                        </ul>
                        <ul className="menu menu-horizontal  w-6/12">


                            <li><a>Home</a></li>
                            <li><a>Shop</a></li>
                            <li><a>Product</a></li>
                            <li><a>Blogs</a></li>
                            <li><a>Contact us</a></li>
                            <li><a>About us</a></li>
                        </ul>
                        <ul className="menu  w-3/12">
                            <li><a > <span><IoDiamondOutline/></span> Clearance Up to 30% Off</a></li>
                        </ul>
                    </div>
                    {/* containt here */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="nav-drower" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-success text-base-100">
                        <li className="w-full">
                            <div className=' flex bg-warning'>
                                <input className='h-11 w-11/12 px-2 bg-neutral' type="search" name="search" id="" placeholder='Search here....' />
                                <button className='text-info text-3xl flex items-center'><MdSearch/></button>
                            </div>
                        </li>
                        <li><a>Sidebar Item 2</a></li>
                        <li><a>Sidebar Item 3</a></li>

                    </ul>

                </div>
            </div>

        </>
    );
};

export default Navbar;