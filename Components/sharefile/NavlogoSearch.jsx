
import Image from "next/image";
import logo from '../../public/logo.png'
import { MdSearch } from "react-icons/md";
import Link from "next/link";
const NavlogoSearch = () => {
    return (

        <div className="bg-secondary flex items-center justify-between">
            <Link href="/">
                <a className="flex-1 px-2 mx-2 text-4xl flex items-center text-success">
                    <div>
                        <Image className="" height={50} width={60} src={logo} alt="logo of wow mart" />
                    </div>
                    <p>wow-mart</p>
                </a>
            </Link>

            <div className="flex-none lg:hidden text-success">
                <label htmlFor="nav-drower" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className='w-6/12 hidden lg:flex mx-auto my-4'>
                <input className='bg-base-100 px-7 rounded-l-3xl w-11/12 h-11 text-gray-800' type="search" name="search" id="" placeholder='Search here....' />
                <button className='flex  justify-center items-center px-5 bg-info rounded-r-3xl h-11'><MdSearch />Search</button>
            </div>

            <div className="flex-none  w-3/12 hidden lg:flex justify-end text-success">
                <ul className="menu menu-horizontal">

                    <li><a>Navbar Item </a></li>
                    <li><a>Navbar Item 1</a></li>
                </ul>
            </div>
        </div>




    );
};

export default NavlogoSearch;