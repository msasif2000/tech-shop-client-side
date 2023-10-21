import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import bg from '../assets/images/cool-1.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const bgStyle = {
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newProduct = { productName, price, ratings, brandName, type, details, photo };
        console.log(newProduct);

        fetch('https://tech-ph-electronics-ow4bfvch6-mostafa-s-asifs-projects.vercel.app/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Product Added Successfully!", {
                    position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                });


                setTimeout(() => {
                    navigate(location.state?.from ? location.state.from : '/products');
                }, 2000);
            })

    }
    return (
        <div>
            <Navbar></Navbar>

            <div style={bgStyle}>
                <div className="md-container lg:mx-24 md:mx-6 mx-2">
                    <div className="lg:p-12 md:p-6 p-4 space-y-6">
                        <h2 className="font-rancho text-4xl text-center text-white">Add New Product</h2>
                        <form onSubmit={handleAddProduct} className="font-raleway ">
                            <div className="md:flex gap-8 justify-center">
                                <div className="md:w-1/2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Product Name</span>
                                        </label>
                                        <label className="input-group">
                                            <input required type="text" name="productName" placeholder="Enter Product name" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Price</span>
                                        </label>
                                        <label className="input-group">
                                            <input required type="number" name="price" placeholder="Enter Product price" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Ratings</span>
                                        </label>
                                        <label className="input-group">
                                            <input required type="number" step="0.01" name="ratings" placeholder="Enter Ratings" className="input input-bordered w-full" />
                                        </label>
                                    </div>


                                </div>

                                <div className="md:w-1/2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Brand Name</span>
                                        </label>
                                        <label className="input-group">
                                            <input required type="text" name="brandName" placeholder="Enter Brand Name" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Type</span>
                                        </label>
                                        <label className="input-group">
                                            <input required type="text" name="type" placeholder="Enter Type" className="input input-bordered w-full" />
                                        </label>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Details</span>
                                        </label>
                                        <label className="input-group">
                                            <input required type="text" name="details" placeholder="Enter Product details" className="input input-bordered w-full" />
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Photo</span>
                                </label>
                                <label className="input-group">
                                    <input required type="url" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <input type="submit" value="Add Product" className="w-full mt-6 bg-orange-600 text-white border-black border-2 text-center p-2 font-rancho text-2xl" />
                        </form>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;