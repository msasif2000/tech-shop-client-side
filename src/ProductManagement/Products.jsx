import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import bg from '../assets/images/triang.png'
import ProductCard from "./ProductCard";
import { useState } from "react";

const Products = () => {
    const loadedProducts = useLoaderData();
    const [products, setProducts] = useState(loadedProducts);
    console.log(products);

    const bgStyle = {
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return (
        <div>
            <Navbar></Navbar>
            <div style={bgStyle}>
                <div className="md:container mx-auto py-6">
                    <h2 className="font-rancho text-3xl py-4">All Products are here: </h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        {
                           loadedProducts.map(product => <ProductCard key={product._id} product={product} products={products} setProducts={setProducts}></ProductCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;