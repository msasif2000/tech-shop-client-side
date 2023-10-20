import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import BrandProductShow from "./BrandProductShow";
import bg from '../../assets/images/logo.avif';
import { useEffect, useState } from "react";

const BrandProducts = () => {
    const bgStyle = {
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/images')
            .then(res => res.json())
            .then(data => {
                setImages(data);
            })
    }, []);

    const products = useLoaderData();
    const { bName } = useParams();
    const cleanBrandName = bName.trim().toLowerCase();

    const brandProducts = products.filter((product) => product.brandName.trim().toLowerCase() === cleanBrandName);
    const brandImages = images.filter((image) => image.brand.trim().toLowerCase() === cleanBrandName);

    const img_1 = brandImages.length > 0 ? brandImages[0].img1 : null;
    const img_2 = brandImages.length > 0 ? brandImages[0].img2 : null;
    const img_3 = brandImages.length > 0 ? brandImages[0].img3 : null;

    if (brandProducts.length === 0) {
        return (
            <div>
                <Navbar />
                <div style={bgStyle} className="flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="font-rancho text-4xl bg-slate-500 text-center text-white p-32">
                            Sorry! No Product Found
                        </h2>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="md:container mx-auto py-8">
                <dir>
                    {img_1 && <img src={img_1} alt="" />}
                    {img_2 && <img src={img_2} alt="" />}
                    {img_3 && <img src={img_3} alt="" />}
                </dir>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {
                        brandProducts.map(product => <BrandProductShow key={product._id} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandProducts;
