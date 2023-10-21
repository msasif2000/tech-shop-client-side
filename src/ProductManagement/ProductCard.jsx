import { PropTypes } from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete } from "react-icons/ai";
import Swal from 'sweetalert2'
import ReactStarsRating from 'react-awesome-stars-rating';
import { useContext } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';


const ProductCard = ({ product, products, setProducts }) => {

    const { user } = useContext(AuthContext);
    const { productName, price, ratings, photo, _id, brandName } = product;

    const location = useLocation();
    const navigate = useNavigate();
    //console.log(ratings)
    const handleDelete = (_id) => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5001/products/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee card has been deleted.',
                                'success'
                            )

                            const remaining = products.filter(prod => prod._id !== _id)
                            setProducts(remaining);

                            navigate(location.state?.from ? location.state.from : '/products');
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className='flex flex-col gap-4 p-6 items-center border-2 rounded border-orange-300 shadow-2xl'>
                <figure><img src={photo} alt="photo" className='h-[300px] w-[280px] rounded-lg' /></figure>
                <div className='space-y-4'>
                    <p className='text-left'><span className='font-bold'>Name: </span>{productName}</p>
                    <p className='text-left'><span className='font-bold'>Brand: </span>{brandName}</p>
                    <p className='text-left'><span className='font-bold'>Price: </span>${price}</p>
                    <p><ReactStarsRating value={`${ratings}`} primaryColor="rgba(255, 140, 71, 1)" isEdit={false} size={28} className="flex" /></p>
                </div>
                <div>
                    <div className="flex gap-4 items-center justify-center">
                        {
                            user ?
                                <Link to={`/productDetails/${_id}`}><button className="bg-[#cf9346] p-2 rounded"><AiOutlineEye className='text-white'></AiOutlineEye></button></Link>
                                :
                                <Link to='/login'><button className="bg-[#cf9346] p-2 rounded"><AiOutlineEye className='text-white'></AiOutlineEye></button></Link>
                        }
                        {
                            user ?
                                <Link to={`/updateProduct/${_id}`}><button className="bg-green-600 p-2 rounded"><AiTwotoneEdit className='text-white'></AiTwotoneEdit></button></Link>
                                :
                                <Link to='/login'><button className="bg-green-600 p-2 rounded"><AiTwotoneEdit className='text-white'></AiTwotoneEdit></button></Link>
                        }
                        {
                            user ?
                                <button onClick={() => handleDelete(_id)} className="bg-red-500 p-2 rounded"><AiOutlineDelete className='text-white'></AiOutlineDelete></button>
                                :
                                <Link to='/login'><button className="bg-red-500 p-2 rounded"><AiOutlineDelete className='text-white'></AiOutlineDelete></button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired,
};
export default ProductCard;