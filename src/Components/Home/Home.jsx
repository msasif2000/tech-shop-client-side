import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import bg from '../../assets/images/bg-3.png';
import { Link, useLoaderData } from "react-router-dom";
import BrandCard from "../../ProductManagement/BrandCard";
import { useEffect, useState } from "react";
import FeaturedCard from "../../ProductManagement/FeaturedCard";

const Home = () => {
    const brands = useLoaderData();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://tech-ph-electronics-ow4bfvch6-mostafa-s-asifs-projects.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    const ratedProducts = products.filter(product => product.ratings > 4.5);
    //console.log(ratedProducts);
    const bgS = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%'
    }
    return (
        <div style={bgS}>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="md:container mx-auto text-center text-xl mt-8">
                <h2 className="border-2 border-black p-2 text-3xl font-rancho shadow-2xl shadow-orange-300">Our Branded Products</h2>
                <div className="flex flex-wrap md:flex-col-4 flex-col-3 p-4 gap-6 items-center justify-center">
                    {
                        brands?.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                    }
                </div>

                <div className="mt-8">
                    <h2 className="border-2 border-black text-3xl font-rancho p-2 shadow-2xl shadow-orange-300">Our Featured Products</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-4">
                        {
                            ratedProducts.map(prod => <FeaturedCard key={prod._id} prod={prod}></FeaturedCard>)
                        }
                    </div>
                    <div className="py-8">
                        <Link to="/products"><button className="text-white font-bold text-xl btn-sm font-rancho bg-orange-600 rounded">See more...</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;