import { IoDiamondOutline } from "react-icons/io5";

const Navbuttom = () => {
    return (
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
    );
};

export default Navbuttom;