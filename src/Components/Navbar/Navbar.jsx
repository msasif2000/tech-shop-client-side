import bg from '../../assets/images/bg-3.png'
import logo from '../../assets/images/logo.avif'
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const nvS = {
    position: 'sticky',
    top: '0',
    zIndex: '1',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover', // Optional: Set background size as needed
    backgroundRepeat: 'no-repeat', // Optional: Set background repeat as needed
    backgroundPosition: 'center', // Optional: Set background position as needed
    width: '100%',
    height: '100%'
}

const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/blogs">Recent Blogs</NavLink></li>
    <li><NavLink to="/about">About us</NavLink></li>
</>
const Navbar = () => {
    return (
        <div style={nvS}>
            <div className="navbar md:container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content sty mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='flex items-center '>
                        <img src={logo} alt="" className='w-10 h-8' />
                        <a className="btn btn-ghost normal-case text-3xl font-rancho">Tech-PH</a>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 sty">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to="/login" className="bg-orange-600 py-1 px-4 text-white font-bold rounded">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;