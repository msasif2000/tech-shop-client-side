import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import bg from '../assets/images/cool-background.png'

const ProductDetails = () => {
    const bgStyle = {
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    const product = useLoaderData();
    console.log(product);
    return (
        <div>
            <Navbar></Navbar>
            <div style={bgStyle}>
                <div className="md:container mx-auto">
                    <div className="md:flex items-center justify-center md:gap-8 p-8">
                        <img src={product.photo} alt="" className="h-[400px] rounded-lg md:mx-0 mx-auto" />
                        <div className="text-white">
                            <p className="font-rancho text-4xl text-center pt-2">{product.productName}</p>
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
                                            <td>{product.type}</td>
                                        </tr>

                                        <tr>
                                            <td>Brand</td>
                                            <td>{product.brandName}</td>
                                        </tr>

                                        <tr>
                                            <td>Price</td>
                                            <td>${product.price}</td>
                                        </tr>

                                        <tr>
                                            <td>Brand</td>
                                            <td>{product.brandName}</td>
                                        </tr>
                                        <tr>
                                            <td>Ratings</td>
                                            <td>{product.ratings} out of 5</td>
                                        </tr>
                                        <tr>
                                            <td>Details</td>
                                            <td>{product.details}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex md:justify-end justify-center pt-4">
                                <button className="bg-orange-600 px-3 py-1 rounded ">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;