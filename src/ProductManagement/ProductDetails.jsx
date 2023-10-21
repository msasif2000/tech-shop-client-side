import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import bg from '../assets/images/cool-background.png'
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const bgStyle = {
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const { user } = useContext(AuthContext);
    const product = useLoaderData();
    const { productName, price, ratings, brandName, type, details, photo } = product;
    const email = user?.email;
    const handleAddToCart = () => {
        const newCart = { productName, brandName, price, type, photo, email };
        console.log(newCart);

        fetch('http://localhost:5001/addToCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
            .then(res => res.json())
            .then(data => {
                 if (data) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product is added to the cart. Please Check your cart',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }


                
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div style={bgStyle}>
                <div className="md:container mx-auto">
                    <div className="md:flex items-center justify-center md:gap-8 py-20">
                        <img src={photo} alt="" className="h-[400px] rounded-lg md:mx-0 mx-auto" />
                        <div className="text-white">
                            <p className="font-rancho text-4xl text-center pt-2">{productName}</p>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <h2>Phone Details</h2>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Type</td>
                                            <td>{type}</td>
                                        </tr>

                                        <tr>
                                            <td>Brand</td>
                                            <td>{brandName}</td>
                                        </tr>

                                        <tr>
                                            <td>Price</td>
                                            <td>${price}</td>
                                        </tr>

                                        <tr>
                                            <td>Brand</td>
                                            <td>{brandName}</td>
                                        </tr>
                                        <tr>
                                            <td>Ratings</td>
                                            <td>{ratings} out of 5</td>
                                        </tr>
                                        <tr>
                                            <td>Details</td>
                                            <td>{details}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex md:justify-end justify-center">
                                <button className="bg-orange-600 px-3 py-1 rounded" onClick={handleAddToCart}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProductDetails;