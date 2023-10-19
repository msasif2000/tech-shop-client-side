import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import bg from '../../assets/images/bg-3.png';
import { useLoaderData } from "react-router-dom";
import BrandCard from "../../ProductManagement/BrandCard";

const Home = () => {
    const brands = useLoaderData();

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
            <div className="md:container mx-auto text-center font-rancho text-3xl mt-8">
                <h2>Our Branded Products</h2>
                <div className="flex md:flex-col-4 flex-col-2 p-4 gap-6 items-center justify-center">
                    {
                        brands.map(brand => <BrandCard key={brands._id} brand={brand}></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;