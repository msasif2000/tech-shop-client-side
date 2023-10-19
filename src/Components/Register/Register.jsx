import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import bg from '../../assets/images/cool-background.png'

const Register = () => {

    const { createUser, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photoURL, email, password)
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters!", {
                position: toast.POSITION.TOP_CENTER, autoClose: 2000,
            });
            return;
        }

        const specialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;
        const uppercase = /[A-Z]/;
        if(!specialChar.test(password) || !uppercase.test(password)){
            toast.error("Password must contain at least one special character and one uppercase letter!", {
                position: toast.POSITION.TOP_CENTER, autoClose: 2500,
            });
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Registration Successful & You're Logged in!", {
                    position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                });


                setTimeout(() => {
                    navigate(location.state?.from ? location.state.from : '/');
                }, 2000);
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Email already registered! Please Login now", {
                    position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                });


                setTimeout(() => {
                    navigate(location.state?.from ? location.state.from : '/login');
                }, 2000);
            })

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                toast.success("Login with Google Successful!", {
                    position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                  });

              
                  setTimeout(() => {
                    navigate(location.state?.from ? location.state.from : '/');
                  }, 2000);
            })
            .catch(error => {
                console.log(error.message)
                toast.error("Email or Password error!", {
                    position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                  });

                  setTimeout(() => {
                    navigate(location.state?.from ? location.state.from : '/login');
                  }, 2000);
            })
    }

    const bgS = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%'
    }

    return (
        <div>
            <Navbar></Navbar>
            <div style={bgS}  className="hero min-h-screen">
                <div className="hero-content flex-col text-white">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Your Account!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-indigo-400 ...">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text font-bold text-xl text-white">Accept <Link to="/termsCondition" className="underline">Term & Conditions</Link></span>
                                    <input type="checkbox" className="checkbox checkbox-secondary" required />
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="text-white py-2 rounded-xl font-bold bg-orange-600">Register</button>
                            </div>
                            <div className="text-center">
                                <p>or</p>
                                <div className="flex gap-4 justify-center pt-2">
                                    <FaGoogle onClick={handleGoogleLogin} className="text-4xl p-2 bg-orange-500 rounded-full hover:bg-white"></FaGoogle>
                                    <FaFacebook className="text-4xl p-2 bg-orange-500 rounded-full hover:bg-white"></FaFacebook>
                                    <FaGithub className="text-4xl p-2 bg-orange-500 rounded-full hover:bg-white"></FaGithub>
                                </div>
                            </div>

                            <label className="label">
                                <p>Already have an Account? <Link to="/login" className="underline hover:bg-orange-600 hover:p-2 hover:rounded-xl">Login</Link></p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default Register;