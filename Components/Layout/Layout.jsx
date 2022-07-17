
import { MdSearch } from "react-icons/md";



import NavTop from '../sharefile/NavTop';
import NavlogoSearch from '../sharefile/NavlogoSearch';
import Navbuttom from '../sharefile/Navbuttom';
import Footer from '../sharefile/Footer';


const Layout = ({children}) => {
  
    return (
        <>
        <div className="drawer drawer-end ">
            <input id="nav-drower" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <NavTop/>
                <NavlogoSearch />
                <Navbuttom />
                {children}
                <Footer />
            </div>

            {/* drower */}
            <div className="drawer-side">
                <label htmlFor="nav-drower" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-success text-base-100">
                    <li className="w-full">
                        <div className=' flex bg-warning'>
                            <input className='h-11 w-11/12 px-2 bg-neutral' type="search" name="search" id="" placeholder='Search here....' />
                            <button className='text-info text-3xl flex items-center'><MdSearch /></button>
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

export default Layout;