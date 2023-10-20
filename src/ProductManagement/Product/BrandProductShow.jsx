
import ReactStarsRating from 'react-awesome-stars-rating';
import {PropTypes} from 'prop-types';
import { Link } from "react-router-dom";
import { AiOutlineEye, AiTwotoneEdit} from "react-icons/ai";
import { useContext } from 'react';
import { AuthContext } from '../../Components/Provider/AuthProvider';

const BrandProductShow = ({product}) => {
    const {user} = useContext(AuthContext)
    const {_id, productName, price, ratings, type, photo} = product;
    return (
        <div>
            <div className='flex flex-col gap-4 p-6 items-center border-2 rounded border-orange-300 shadow-2xl'>
                <figure><img src={photo} alt="photo" className='h-[300px] w-[280px] rounded-lg'/></figure>
                <div className='space-y-2'>
                    <p className='text-left'><span className='font-bold'>Name: </span>{productName}</p>
                    <p className='text-left'><span className='font-bold'>Price: </span>{price}</p>
                    <p className='text-left'><span className='font-bold'>Type: </span>{type}</p>
                    <p><ReactStarsRating value={`${ratings}`} primaryColor="rgba(255, 140, 71, 1)" isEdit={false} size={28} className="flex"/></p>
                </div>
                <div>
                    <div className="flex gap-4 items-center justify-center">
                        <Link to={`/productDetails/${_id}`}><button className="bg-[#D2B48C] p-2 rounded"><AiOutlineEye className='text-white'></AiOutlineEye></button></Link>
                        {
                            user? 
                            <Link to={`/updateProduct/${_id}`}><button className="bg-green-600 p-2 rounded"><AiTwotoneEdit className='text-white'></AiTwotoneEdit></button></Link>
                            :
                            <Link to={`/login`}><button className="bg-green-600 p-2 rounded"><AiTwotoneEdit className='text-white'></AiTwotoneEdit></button></Link>
                        }
                    </div>
                </div>
            </div>
    
        </div>
    );
};

BrandProductShow.propTypes = {
    product: PropTypes.object.isRequired
}
export default BrandProductShow;