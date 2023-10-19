import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiTwotoneEdit, AiOutlineDelete } from "react-icons/ai";
import Swal from 'sweetalert2'

const ProductCard = ({ product, products, setProducts }) => {
    const { productName, price, ratings, photo, _id } = product;

    const handleDelete = (_id) => {
        console.log(_id);
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

                            const remaining = products.filter(cof => cof._id !== _id)
                            setProducts(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className='flex flex-col gap-4 p-6 items-center border-2 rounded border-orange-300'>
                <figure><img src={photo} alt="photo" className='h-[300px] w-[280px] rounded-lg'/></figure>
                <div className='space-y-4'>
                    <p className='text-left'><span className='font-bold'>Name: </span>{productName}</p>
                    <p className='text-left'><span className='font-bold'>Price: </span>{price}</p>
                    <p className='text-left'><span className='font-bold'>Category: </span>{ratings}</p>
                </div>
                <div>
                    <div className="flex gap-4 items-center justify-center">
                        <button className="bg-[#D2B48C] p-2 rounded"><AiOutlineEye className='text-white'></AiOutlineEye></button>
                        <Link to={`updateProduct/${_id}`}><button className="bg-[#3C393B] p-2 rounded"><AiTwotoneEdit className='text-white'></AiTwotoneEdit></button></Link>
                        <button onClick={() => handleDelete(_id)} className="bg-[#EA4744] p-2 rounded"><AiOutlineDelete className='text-white'></AiOutlineDelete></button>
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