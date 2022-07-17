import Navbar from "../sharefile/Navbar";
import Footer from '../../Components/sharefile/Footer'

const Layout = ({children}) => {
    return (
        <>
       
            <Navbar>{children}</Navbar>
            <Footer/>
            
        </>
    );
};

export default Layout;