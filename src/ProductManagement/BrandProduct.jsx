import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const BrandProduct = () => {
    const products = useLoaderData();
    console.log(products);
    const { brandName } = useParams();
    const brandProducts = products.find(product => product.brandName == brandName);
    console.log(brandProducts);
    return (
        <div>
            <Navbar></Navbar>
            
        </div>
    );
};

export default BrandProduct;