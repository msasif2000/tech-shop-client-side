import bg from '../../assets/images/bg-3.png'
import logo from '../../assets/images/logo.avif'
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { GrUserManager } from "react-icons/gr";
import { AiOutlineShoppingCart } from 'react-icons/ai'


const Navbar = () => {

    const { user, userLogout } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const photoURL = user?.photoURL;
    const handleLogout = () => {
        userLogout()
            .then(result => {
                console.log(result)
                navigate(location.state?.from ? location.state.from : '/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const nvS = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%'
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        {
            user ?
                <li><NavLink to="/addBrand">Add Brand</NavLink></li>
                :
                ' '
        }
        {
            user ?
                <li><NavLink to="/addProduct">Add Product</NavLink></li>
                :
                ' '
        }
    </>


    return (
        <div style={nvS}>
            <div className='md:container mx-auto'>
                <div className="navbar">
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
                            <a className="btn btn-ghost normal-case text-3xl font-rancho text-orange-600">Tech-PH</a>

                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 sty">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end  gap-4">
                        {

                            <div className="indicator">
                                {
                                    user ?
                                        <span className="indicator-item badge badge-sm badge-secondary"></span>
                                        :
                                        ''
                                }
                                <div className="grid rounded-full p-2 bg-base-300 place-items-center"><AiOutlineShoppingCart className='text-2xl'></AiOutlineShoppingCart></div>
                            </div>

                        }
                        {
                            user ?
                                <button onClick={handleLogout} className="bg-orange-600 py-1 px-4 text-white font-bold rounded">Logout</button>
                                :
                                <Link to="/login" className="bg-orange-600 py-1 px-4 text-white font-bold rounded">Login</Link>
                        }
                    </div>
                </div>
                <div className='flex items-center gap-3 justify-end p-2'>
                    {
                        user ?
                            <h1 className="text-xl font-bold text-blue-600">{user.email}</h1>
                            :
                            ''
                    }

                    {
                        user ?
                            <>
                                {
                                    photoURL ?
                                        <Link to="/profile"><img src={user.photoURL} alt="" className="w-10 rounded-full bg-blue-300 p-1" /></Link>
                                        :
                                        <Link to="/profile"><img src="https://i.ibb.co/R3PnR7z/user.png" alt="" className="w-10 rounded-full bg-blue-300 p-1" /></Link>
                                }
                            </>

                            :
                            <GrUserManager className="text-4xl rounded-full p-1 bg-blue-300"></GrUserManager>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;