
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Register = () => {

    const { createUser } = useContext(AuthContext);
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

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen  bg-gradient-to-r from-cyan-500 to-indigo-500...">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register Your Account!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-l from-indigo-500 ...">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text font-bold text-xl">Accept <Link to="/termsCondition" className="underline">Term & Conditions</Link></span>
                                    <input type="checkbox" className="checkbox checkbox-secondary" required />
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="text-white py-2 rounded-xl font-bold bg-orange-600">Register</button>
                            </div>

                            <label className="label">
                                <p>Already have an Account?<Link to="/login" className="underline">Login</Link></p>
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