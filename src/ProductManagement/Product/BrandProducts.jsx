import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import BrandProductShow from "./BrandProductShow";
import bg from '../../assets/images/logo.avif';
import bg1 from '../../assets/images/triang1.png';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BrandProducts = () => {
    const bgStyle = {
        background: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };
    const bgS = {
        background: `url(${bg1})`,
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
                            Sorry! No Products Found
                        </h2>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div style={bgS}>
                <div className="md:container mx-auto py-8 px-4">
                    <div>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide><img src={img_1} alt="" className="md:w-2/3 w-full md:h-[450px] h-[250px]  mx-auto shadow-2xl shadow-blue-600" /></SwiperSlide>
                            <SwiperSlide><img src={img_2} alt="" className="md:w-2/3 w-full md:h-[450px] h-[250px] mx-auto shadow-2xl shadow-blue-600" /></SwiperSlide>
                            <SwiperSlide><img src={img_3} alt="" className="md:w-2/3 w-full md:h-[450px] h-[250px] mx-auto shadow-2xl shadow-blue-600" /></SwiperSlide>
                        </Swiper>
                        {/* {img_1 && <img src={img_1} alt="" />}
                    {img_2 && <img src={img_2} alt="" />}
                    {img_3 && <img src={img_3} alt="" />} */}

                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-20">
                        {
                            brandProducts.map(product => <BrandProductShow key={product._id} product={product} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandProducts;
