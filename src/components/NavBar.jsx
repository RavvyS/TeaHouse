import {Link} from "react-router-dom";
import "../css/NavBar.css";




function NavBar(){
    return(
        <nav className="navbar  flex  justify-between">
            <div className="navbar-brand">
                <Link to="/">
                <img src="./public/teaLogo.png" alt="teaLogo" className="h-30 w-auto ml-5 mt-3" ></img>
                </Link>
            </div>

            <div className="navbar-links text-amber-900 font-bold mr-6 mt-15" >
                <Link to="/" className=" justify-between flex-row m-10">Home</Link>
                <Link to="/Products" className=" justify-between flex-row m-10">Products</Link>
                <Link to="/ContactUs" className=" justify-between flex-row m-10">Contact Us</Link>
            </div>
        </nav>
    )

}export default NavBar;