import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { googleLogin, userLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Login Successful!", {
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
    return (
        <div>
            <div className="hero min-h-screen  bg-gradient-to-r from-indigo-500 to-cyan-500...">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-indigo-500 ...">
                        <form onSubmit={handleLogin} className="card-body">
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
                            <div className="form-control mt-6">
                                <button className="text-white py-2 rounded-xl font-bold bg-orange-600">Login</button>
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
                                <p>Don`t have an Account?<Link to="/register" className="underline">Register</Link></p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;